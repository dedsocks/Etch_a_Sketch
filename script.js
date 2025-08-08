const gridContainer = document.querySelector("#gridContainer");
const gridContainerSideLength = gridContainer.offsetWidth; 
let gridSquare = [];

let inputLabel = document.querySelector("#inputLabel");
let inputColumns = document.querySelector("#inputColumns");
let numberOfColumns = inputColumns.getAttribute("value");

inputColumns.addEventListener("input",event => {
    numberOfColumns = event.target.value;
    inputLabel.textContent = `${numberOfColumns} X ${numberOfColumns}`;
    removeExistingGridSquares();
    changeGridSquares();
})

changeGridSquares();

function changeGridSquares(){
    let numberOfSquares = numberOfColumns**2; //area of square = side^2

    for(let i = 0; i < numberOfSquares; i++){
        gridSquare[i] = document.createElement("div");
        gridSquare[i].style.height = `${30/numberOfColumns}rem`;
        gridSquare[i].style.width = `${30/numberOfColumns}rem`;
        gridSquare[i].classList.add("gridChild"); 
        gridContainer.appendChild(gridSquare[i]);
    }
}

function removeExistingGridSquares(){
    gridContainer.replaceChildren();
}

