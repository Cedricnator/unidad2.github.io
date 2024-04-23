export const moveCharacterByCoords = (coords, events, character, container) => {
    document.addEventListener("keydown", function (event) {
        const index = events.indexOf(event.key);
        if (index !== -1) {
            let newX = coords[0];
            let newY = coords[1];
    
            const characterRect = character.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            const maxRight = containerRect.right - characterRect.width;
            const maxLeft = containerRect.left;
            const maxTop = containerRect.top;
            const maxBottom = containerRect.bottom - characterRect.height;

            if (index === 0 && characterRect.right <= maxRight ) newX += 20;
            else if (index === 1 && characterRect.left  >= maxLeft) newX -= 20;
            else if (index === 2 && characterRect.top>= maxTop) newY -= 20;
            else if (index === 3 && characterRect.bottom  <= maxBottom) newY += 20;
            
            if( newX <= maxLeft && newX <= maxRight) {
                coords[0] = newX;
            }

            if( newY <= maxTop && newY <= maxBottom) {
                coords[1] = newY;
            }
            

            character.style.transform = `translate(${coords[0]}px, ${coords[1]}px)`;
        }
    });
}