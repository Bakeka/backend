/**
 * Enum Accessibility represents a board's physical environment and reachability.
 */
export enum Accessibility {
  /**
   * A public and freely accessible space.
   */
  Public = "PUBLIC",

  /**
   * An accessible space but on private grounds.
   */
  Private = "PRIVATE",

  /**
   * A hardly reachable or otherwise inaccessible (to the public) space.
   */
  Inaccessible = "INACCESSIBLE"
}

/**
 * Enum Material describes a board's surface material.
 */
export enum Material {
  WOOD = "WOOD",
  METAL = "METAL",
  PLASTIC = "PLASTIC",
  GLASS = "GLASS",
  OTHER = "OTHER"
}

/**
 * Enum Size describes a boards's general physical size.
 */
export enum Size {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE"
}

/**
 * Enum Type represents a board's purpose.
 */
export enum Type {
  /**
   * An obituary for the deceased.
   */
  OBITUARY = "OBITUARY",

  /**
   * A politics-oriented bulletin board.
   */
  POLITICS = "POLITICS",

  /**
   * A board for notices and advisories.
   */
  NOTICE = "NOTICE",

  /**
   * A board for the public with a variety of postable media.
   */
  PUBLIC = "PUBLIC",

  /**
   * A board which does not fit in any of the other categories.
   */
  OTHER = "OTHER"
}
