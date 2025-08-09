const gridContainer = document.querySelector("#gridContainer");
let gridContainerSideLength = 500;
let gridSquare = [];

let inputLabel = document.querySelector("#inputLabel");
let inputColumns = document.querySelector("#inputColumns");
let numberOfColumns = inputColumns.value;

const blackBtn = document.querySelector("#black");
const rainbowBtn = document.querySelector("#rainbow");
let colorOnHover = "black";

addGridSquares();

inputColumns.addEventListener("input",event => {
    numberOfColumns = event.target.value;
    inputLabel.textContent = `${numberOfColumns} X ${numberOfColumns}`;
    removeExistingGridSquares();
    addGridSquares();
})

function addGridSquares(){
    let numberOfSquares = numberOfColumns**2; //area of square = side^2

    for(let i = 0; i < numberOfSquares; i++){
        gridSquare[i] = document.createElement("div");

        gridSquare[i].style.width = `${(gridContainerSideLength/numberOfColumns)-0.01}px`;//The 0.01 ensures that the child elements will be slightly smaller than the parent element so that they can flex and fill up the rest of the area instead of wrapping due to availability of less space because of inflated values on calc of gridContainerSideLength/numberOfColumns due to floating point precision errors.

        gridSquare[i].style.flex = "1 0 auto"
        gridSquare[i].style.height = `auto`;
        gridSquare[i].style.aspectRatio = "1/1";

        gridSquare[i].classList.add("gridChild");
        gridSquare[i].classList.toggle("defaultGridChildColor"); 


        gridSquare[i].addEventListener("mouseover",()=>{
            switch(colorOnHover){
                case "black":
                    gridSquare[i].style.backgroundColor = `rgba(0,0,0,1)`;
                    break;
                case "rainbow":
                    gridSquare[i].style.backgroundColor = `rgba(255,${Math.random()*255},${Math.random()*255},1)`;
                    break;
            }
        })

        gridContainer.appendChild(gridSquare[i]);
    }
}

function removeExistingGridSquares(){
    gridSquare = [];
    gridContainer.innerHTML = '';
}

blackBtn.addEventListener("click",()=>{colorOnHover = "black";})
rainbowBtn.addEventListener("click",()=>{colorOnHover = "rainbow";})
