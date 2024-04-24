export const moveCharacterByCoords = (coords, events, character, combatZone) => {
    document.addEventListener("keydown", function (event) {
        const index = events.indexOf(event.key);
        if (index !== -1) {
            let newX = coords[0];
            let newY = coords[1];

            switch ( index ){
                case 0:
                    newX += 19.2;
                    break;
                case 1:
                    newX -= 19.2;
                    break;
                case 2:
                    newY -= 19.2;
                    break;
                case 3:
                    newY += 19.2;
                    break;
                default:
                    break;
            }
           
            if( (newX + character.offsetWidth + 88) > combatZone.clientWidth ){
                newX = combatZone.clientWidth - character.offsetWidth - 80;
            }
            
            if( newX < -94){
                newX = 0;
            }

            if( (newY - character.offsetHeight - 66) < -307 ){
                newY = newY + character.offsetHeight;
            }

            coords[0] = newX;
            coords[1] = newY;
            character.style.transform = `translate(${coords[0]}px, ${coords[1]}px)`;
        }
    });
}