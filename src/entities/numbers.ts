import { Type } from "./enums";

/**
 * Type Numbers contains the total number of board registered for each `Type`.
 */
export type Numbers = { [T in Type]: number }
