import { Type } from "./enums";

/**
 * Type Numbers contains the total number of board registered for each
 * {@link Type}.
 */
export type Numbers = { [T in Type]: number }
