// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
// ed emetto un messaggio in console con il numero della cella cliccata.



const gridGame = document.querySelector('.grid');
const playStartTheGame = document.querySelector('.btn');

playStartTheGame.addEventListener('click', function () {
  
   const mySelect = document.querySelector('.select').value;
   console.log(mySelect);

   
   let howManyCells = difficultyLevel (mySelect)
   console.log(howManyCells);

   gridGame.style.display = 'flex'

   gridGame.innerHTML = '';
       for (let i = 1; i <= howManyCells; i++) {
       
           let squareGenerated = squareGenerator(i, mySelect)
           gridGame.append(squareGenerated);

           squareGenerated.addEventListener('click', function() {
               this.classList.toggle('square-blue')
               console.log(i);
           })
       }
});


//level-difficult


function squareGenerator(number, inputDifficulty) {
    let squareDiv = document.createElement('div');
    let classCells;
    if (inputDifficulty === 'easy') {
        classCells = 'square';
    } else if (inputDifficulty === 'medium') {
        classCells = 'square-medium';
    } else if (inputDifficulty === 'hard') {
        classCells = 'square-hard';
    }
    squareDiv.classList.add(classCells);
    squareDiv.innerHTML += `<span>${number}</span>`
    return squareDiv
}



function difficultyLevel (input) {
    let numberCells;
    if (input === 'easy') {
        numberCells = 100;
    } else if (input === 'medium') {
        numberCells = 81;
    } else if (input === 'hard') {
        numberCells = 49;
    }
    return numberCells
}
