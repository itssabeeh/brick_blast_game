export default class paddle {
  constructor(game) {
    this.gamewidth = game.gamewidth;
    this.gameheight = game.gameheight;
    this.width = 150;
    this.height = 20;
    this.direction = "stop";
    this.maxspeed = 7;
    this.position = {
      x: this.gamewidth / 2 - this.width / 2,
      y: this.gameheight - this.height - 10
    };
  }
  draw(ctx) {
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  stop() {
    this.direction = "stop";
  }
  changeDirection(direction) {
    this.direction = direction;
  }

  setDirrctionAtEdge() {
    if (this.position.x >= this.gamewidth - this.width) {
      this.position.x = this.gamewidth - this.width;
    } else if (this.position.x <= 0) {
      this.position.x = 0;
    }
  }
  update(deltatime) {
    this.setDirrctionAtEdge();
    if (this.direction === "right") this.position.x += this.maxspeed;
    else if (this.direction === "left") this.position.x -= this.maxspeed;
    else if (this.direction === "stop") this.position.x -= 0;
  }
}
