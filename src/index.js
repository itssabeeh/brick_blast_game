import "./styles.css";
import Game from "/src/game.js";

let canvas = document.getElementById("gamescreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
// paddle.draw(ctx);

let lasttime = 0;
const gameLoop = (timestamp) => {
  let deltatime = timestamp - lasttime;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(deltatime);
  game.draw(ctx);
  lasttime = timestamp;
  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);
