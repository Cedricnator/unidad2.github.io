
export const checkGameStatus = (gameOver, enemy, hero) => {
    if (!enemy.isAlive()) {
        alert("You win!");
        gameOver = true;
    } else {
        if (!hero.isAlive()) {
            alert("You lose! Game Over!");
            gameOver = true;
        }
    }
}
