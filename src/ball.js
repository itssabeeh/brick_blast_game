import { detectCollison } from "./collisionDetection";

export default class ball {
  constructor(game) {
    this.game = game;
    this.gamewidth = game.gamewidth;
    this.gameheight = game.gameheight;
    this.paddle = game.paddle;
    this.image = document.getElementById("img_ball");
    this.size = 14;
    this.position = {
      x: game.paddle.position.x + game.paddle.width / 2,
      y: game.paddle.position.y - this.size + 1
    };
    // this.position = {
    //   x: 10,
    //   y: 70
    // };
    this.speed = { x: 4, y: -2 };
  }
  resetBall() {
    this.position = {
      x: this.game.paddle.position.x + this.game.paddle.width / 2,
      y: this.game.paddle.position.y - this.size + 1
    };
    this.speed = { x: 4, y: -2 };
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }
  changeDirection() {
    this.currentSpeed = { x: -this.speed.x, y: -this.speed.y };
  }

  update(deltatime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //bottom
    // if (
    //   this.position.y + this.paddle.height === this.paddle.position.y &&
    //   this.position.x >= this.paddle.position.x &&
    //   this.position.x <= this.paddle.position.x + this.paddle.width
    // ) {
    //   this.speed.y = -this.speed.y;
    // }

    let collision = detectCollison(this, this.game.paddle);
    if (collision === "normal") {
      this.speed.y = -this.speed.y;
    } else if (collision === "sideways") {
      this.speed.x = -this.speed.x;
    }
    //top
    else if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    //right && left
    else if (
      this.position.x + this.size > this.gamewidth ||
      this.position.x < 0
    ) {
      this.speed.x = -this.speed.x;
    }
    //gameover
    else if (this.position.y > this.gameheight) {
      this.game.lives--;
      this.resetBall();
    }
  }
}
