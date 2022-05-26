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
  Wood = "WOOD",
  Metal = "METAL",
  Plastic = "PLASTIC",
  Glass = "GLASS",
  Other = "OTHER"
}

/**
 * Enum Size describes a boards's general physical size.
 */
export enum Size {
  Small = "SMALL",
  Medium = "MEDIUM",
  Large = "LARGE"
}

/**
 * Enum Type represents a board's purpose.
 */
export enum Type {
  /**
   * An obituary for the deceased.
   */
  Obituary = "OBITUARY",

  /**
   * A politics-oriented bulletin board.
   */
  Politics = "POLITICS",

  /**
   * A board for notices and advisories.
   */
  Notice = "NOTICE",

  /**
   * A board for the public with a variety of postable media.
   */
  Public = "PUBLIC",

  /**
   * A board which does not fit in any of the other categories.
   */
  Other = "OTHER"
}
