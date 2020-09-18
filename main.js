let colorArray = ["blue","yellow","green","red"]
let currentColorIndex = 0
// every 5 seconds:
setInterval(() => {
//   get a new color
  let newColor = colorArray[currentColorIndex]
//   set the backgroundColor to the new color
  page.style.backgroundColor = newColor
  if (currentColorIndex >= 3) {
    currentColorIndex = 0
  } else {
   currentColorIndex = currentColorIndex + 1
  }
}, 5000)

let page =document.querySelector(".container");
setTimeout(() => {
page.style.backgroundColor = "red"

}, 5000)