import Brick from "/src/brick.js";

export const makeBrick = (game, level) => {
  let bricks = [];
  level.forEach((row, rindex) => {
    row.forEach((brick, bindex) => {
      if (brick === 1) {
        const position = {
          x: 80 * bindex,
          y: 100 + 24 * rindex
        };
        bricks.push(new Brick(game, position));
      }
    });
  });
  return bricks;
};

export const level0 = [[0, 0, 1, 0, 0, 0, 0, 0, 0, 0]];

export const level1 = [
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
export const level2 = [
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 1]
];
export const level3 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 1]
];
