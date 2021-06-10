import Paddle from "/src/paddle";
import inputHandler from "/src/input.js";
import Ball from "/src/ball.js";
import { makeBrick, level0, level1, level2, level3 } from "/src/levels.js";
export default class game {
  constructor(gamewidth, gameheight) {
    this.gamewidth = gamewidth;
    this.gameheight = gameheight;
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    new inputHandler(this);
    this.gameObjects = [];
    this.lives = 3;
    this.levels = [level0, level1, level2, level3];
    this.currentLevel = 0;
    this.bricks = [];
    this.gameState = {
      pause: false,
      running: false,
      menu: true,
      over: false,
      restart: false
    };
  }

  start() {
    if (this.currentLevel < this.levels.length) {
      this.gameState.menu = false;
      this.gameState.over = false;
      this.gameState.running = true;
      this.lives = 3;
      this.bricks = makeBrick(this, this.levels[this.currentLevel]);
      this.gameObjects = [this.paddle, this.ball];
    }
  }
  draw(ctx) {
    // this.paddle.draw(ctx);
    // this.ball.draw(ctx);

    [...this.gameObjects, ...this.bricks].forEach((object) => object.draw(ctx));
    if (this.gameState.pause) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
      ctx.fillRect(0, 0, this.gamewidth, this.gameheight);
      ctx.fillStyle = "rgba(256, 256, 256)";
      ctx.textAlign = "center";
      ctx.font = "25px Verdana, sans-serif";
      ctx.fillText("Game Paused", this.gamewidth / 2, this.gameheight / 3);
    }
    if (this.gameState.menu) {
      ctx.fillStyle = "rgba(0, 0, 0)";
      ctx.fillRect(0, 0, this.gamewidth, this.gameheight);
      ctx.fillStyle = "rgba(256, 256, 256)";
      ctx.textAlign = "center";
      ctx.font = "25px Verdana, sans-serif";
      ctx.fillText(
        "Press ENTER to start",
        this.gamewidth / 2,
        this.gameheight / 3
      );
    }
    if (this.lives === 0) {
      this.gameState.over = true;
      this.gameState.running = false;
      ctx.fillStyle = "rgb(0, 0, 0, 0.8)";
      ctx.fillRect(0, 0, this.gamewidth, this.gameheight);
      ctx.fillStyle = "rgba(256, 0, 0)";
      ctx.textAlign = "center";
      ctx.font = "50px Verdana, sans-serif";
      ctx.fillText("GAME OVER", this.gamewidth / 2, this.gameheight / 3);
      ctx.font = "30px Verdana, sans-serif";
      ctx.fillText(
        "Press Enter to restart",
        this.gamewidth / 2,
        this.gameheight / 4
      );
    }
    if (this.currentLevel === this.levels.length) {
      this.gameState.over = true;
      this.gameState.running = false;
      ctx.fillStyle = "rgb(0, 0, 0, 0.8)";
      ctx.fillRect(0, 0, this.gamewidth, this.gameheight);
      ctx.fillStyle = "rgba(0, 256, 0)";
      ctx.textAlign = "center";
      ctx.font = "50px Verdana, sans-serif";
      ctx.fillText("YOU WON", this.gamewidth / 2, this.gameheight / 3);
      ctx.font = "30px Verdana, sans-serif";
      ctx.fillText(
        "Press Enter to restart",
        this.gamewidth / 2,
        this.gameheight / 3 + this.gameheight / 4
      );
    }
  }
  update(deltatime) {
    // this.paddle.update(deltatime);
    // this.ball.update(deltatime);
    if (this.gameState.pause || this.gameState.menu || this.gameState.over)
      return;

    [...this.gameObjects, ...this.bricks].forEach((object) =>
      object.update(deltatime)
    );
    this.bricks = this.bricks.filter((bricks) => !bricks.markedForDeletion);
    if (this.bricks.length === 0) {
      this.currentLevel++;
      this.start();
      this.ball.resetBall();
    }
  }
}
