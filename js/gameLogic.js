
export const checkGameStatus = (gameOver, enemy, hero) => {
    if (!enemy.isAlive()) {
        alert("The CHARACTER1 won! Game Over!");
        gameOver = true;
    } else {
        if (!hero.isAlive()) {
            alert("The CHARACTER2 won! Game Over!");
            gameOver = true;
        }
    }
}
