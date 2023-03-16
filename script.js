const largeBox = document.querySelector(".container")

let size = prompt("Pick a number from 1-100")
size = Math.pow(size, 2)


for (i = 0; i < size; i++) {
    let smallBox = document.createElement("div");
    smallBox.classList.add("smallBox")
    largeBox.appendChild(smallBox);

    //smallBox.textContent = "O"

    function mouseOn() {
        smallBox.style.backgroundColor = "black"
    }

    
    smallBox.addEventListener("mouseover", mouseOn)
}

largeBox.style.gridTemplateColumns = `repeat(${Math.sqrt(size)}, 1fr)`





