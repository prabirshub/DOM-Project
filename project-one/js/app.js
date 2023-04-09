const root = document.getElementById('root')
const colorBtn = document.getElementById('color-btn')

function backgroundColorChange() {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)
  const bgColor = `rgb(${red}, ${green}, ${blue})`
  root.style.backgroundColor = bgColor
}

colorBtn.addEventListener('click', backgroundColorChange)
