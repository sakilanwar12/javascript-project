let count = 0;
let btns = document.querySelectorAll(".btn");
let counter = document.querySelector(".counter");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let styles = btn.classList;
    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    if (count < 0) {
      counter.style.color = "red";
    } else if (count > 0) {
      counter.style.color = "green";
    } else {
      counter.style.color = "black";
    }
    counter.textContent = count;
  })
})
