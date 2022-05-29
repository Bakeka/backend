// db.createCollection("boards")

let board = {
  location: []
}

const randRange = (min, max) => Math.random() * (max - min) + min

const randRangeInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const randIn = (...elems) => elems[Math.floor(Math.random() * elems.length)]

for (let i = 0; i < 100; i++) {
  db.boards.insert({
    location: {
      type: "Point",
      coordinates: [
        randRange(-180, 180),
        randRange(-90, 90)
      ]
    },
    accessibility: randIn("PUBLIC", "PRIVATE", "INACCESSIBLE"),
    material: randIn("WOOD", "METAL", "PLASTIC", "GLASS", "OTHER"),
    size: randIn("SMALL", "MEDIUM", "LARGE"),
    traffic: randRangeInt(1, 5),
    type: randIn("OBITUARY", "POLITICS", "NOTICE", "PUBLIC", "OTHER"),
    created: Date.now(),
    modified: Date.now(),
  })
}
