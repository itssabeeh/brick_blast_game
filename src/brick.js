import { detectCollison } from "./collisionDetection";

export default class bricks {
  constructor(game, position) {
    this.game = game;
    this.image = document.getElementById("img_brick");
    this.position = position;
    this.width = 80;
    this.height = 50;
    this.markedForDeletion = false;
  }
  update() {
    const collision = detectCollison(this.game.ball, this);
    if (collision === "normal") {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.markedForDeletion = true;
    } else if (collision === "sideways") {
      this.game.ball.speed.x = -this.game.ball.speed.x;
      this.markedForDeletion = true;
    }
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
