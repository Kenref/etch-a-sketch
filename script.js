const largeBox = document.querySelector(".container")
const sliderValue = document.querySelector("span")
const inputSlider = document.querySelector("input")
const boxes = [];

let size = 50
draw(Math.pow(size, 2))

inputSlider.oninput = (() => {
    size = inputSlider.value;
    sliderValue.textContent = size;
    clear()
    draw(Math.pow(size, 2))
})

function clear() {
    boxes.forEach(box => {
        largeBox.removeChild(box);
    });
    boxes.length = 0;
}

function draw(size) {
    for (let i = 0; i < size; i++) {
        let smallBox = document.createElement("div");
        smallBox.classList.add("smallBox");
        largeBox.appendChild(smallBox);
        boxes.push(smallBox);

        function mouseOn() {
            this.style.backgroundColor = "black";
        }

        smallBox.addEventListener("mouseover", mouseOn);
    }

    largeBox.style.gridTemplateColumns = `repeat(${Math.sqrt(size)}, 1fr)`;
}
