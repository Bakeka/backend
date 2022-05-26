import { Config } from "../config";
import { inject, injectable, singleton } from "tsyringe";
import mongoose from "mongoose";

@injectable()
@singleton()
export class DatabaseService {
  private _connection!: mongoose.Connection

  constructor(@inject("config") private config: Config) {}

  /**
   * Connects to the database. Throws error if the connection cannot be
   * estabilished.
   */
  public connect(): void {
    if (!this.config.db) throw "No database configuration found"

    this._connection = mongoose.createConnection(
      `mongodb://${this.config.db.host || "localhost"}:${this.config.db.port || 27017}`,
      {
        appName: "bakeka-backend",
        auth: {
          username: this.config.db.username,
          password: this.config.db.password
        },
        dbName: "bakeka"
      }
    )

    if (!this._connection) throw "Could not connect to DB"
  }

  /**
   * Closes the connection to the database.
   *
   * @param force Forces the connection to close, optional
   */
  public disconnect(force?: boolean | undefined): void {
    this._connection.close(force)
  }

  public get connection(): mongoose.Connection {
    return this._connection
  }
}
