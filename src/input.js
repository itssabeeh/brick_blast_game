export default class input {
  constructor(game) {
    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowLeft":
          game.paddle.changeDirection("left");
          break;
        case "ArrowRight":
          game.paddle.changeDirection("right");
          break;
        case "Space":
          if (game.gameState.running)
            game.gameState.pause = !game.gameState.pause;
          break;
        case "Enter":
          if (game.gameState.menu || game.gameState.over) {
            game.currentLevel = 0;
            game.start();
          }
          break;
        case "KeyR":
          game.gameState.restart = true;
          break;
        default:
          break;
      }
    });
    document.addEventListener("keyup", (event) => {
      switch (event.code) {
        case "ArrowLeft":
          if (game.paddle.direction === "left") game.paddle.stop();
          break;
        case "ArrowRight":
          if (game.paddle.direction === "right") game.paddle.stop();
          break;
        default:
          break;
      }
    });
  }
}
