// ui
const colorBox = document.getElementById("colorBox");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const color = document.getElementById("color");

// simple color
const colors = ["red", "green", "rgb(0,0,255)", "#4B0082"];
btn1.addEventListener("click", () => {
  const randomNumber = getRandomNumber(colors);
  colorBox.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
})

// advanced color

let hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn2.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexCode[getRandomNumber(hexCode)];
  }
  colorBox.style.backgroundColor = hexColor;
  color.textContent = hexColor;
})






const getRandomNumber = (data) => {
  return Math.floor(Math.random() * data.length)
}