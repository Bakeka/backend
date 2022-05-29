import { inject, injectable, singleton } from "tsyringe";
import mongoose from "mongoose";

import { Config } from "../config";

@injectable()
@singleton()
export class DatabaseService {
  constructor(@inject("config") private config: Config) {}

  /**
   * Connects to the database. Throws error if the connection cannot be
   * estabilished.
   */
  public connect(): void {
    if (!this.config.db) throw "No database configuration found"

    mongoose.connect(
      `mongodb://${this.config.db.host || "localhost"}:${this.config.db.port || 27017}`,
      {
        appName: "bakeka-backend",
        auth: {
          username: this.config.db.username,
          password: this.config.db.password
        },
        dbName: this.config.db.db
      }
    ).then(() => console.log("Connected to DB"))
  }

  /**
   * Closes the connection to the database.
   */
  public disconnect(): void {
    mongoose.disconnect()
  }
}
