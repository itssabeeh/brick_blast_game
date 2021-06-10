export function detectCollison(ball, gameObject) {
  let topOfBall = ball.position.y;
  let bottomOfBall = ball.position.y + ball.size;
  let leftOfBall = ball.position.x;
  let rightOfBall = ball.position.x + ball.size;
  let topOfgameObject = gameObject.position.y;
  let bottomOfgameObject = gameObject.position.y + gameObject.height;
  let leftOfgameObject = gameObject.position.x;
  let rightOfgameObject = gameObject.position.x + gameObject.width;
  let correctionValue = ball.size / 6;
  if (
    bottomOfBall >= topOfgameObject &&
    topOfBall <= bottomOfgameObject &&
    rightOfBall > leftOfgameObject + correctionValue &&
    leftOfBall <= rightOfgameObject - correctionValue
  ) {
    return "normal";
  } else if (
    rightOfBall >= leftOfgameObject &&
    leftOfBall <= rightOfgameObject &&
    topOfBall <= bottomOfgameObject &&
    bottomOfBall >= topOfgameObject
  ) {
    return "sideways";
  } else {
    return "false";
  }
}
