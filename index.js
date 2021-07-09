const changeColor = () => {
const red = document.querySelector('#red').value;
const green = document.querySelector('#green').value;
const blue = document.querySelector('#blue').value;
// let rgbColor
if (isColorInvalid(red) || isColorInvalid(green) || isColorInvalid(blue)) {
    alert('Include a number between 0 and 255');
} else {
   const rgbColor = `rgb(${red},${green},${blue})`;
   document.querySelector('#wrapper').style.backgroundColor = rgbColor;
   document.querySelector('#rgb').textContent = rgbColor;
}
}
const isColorInvalid = (color) => {
    if (color.replace(/ /g, '') === '') {
        return true
    }
    color = Number(color)
    return color > 255 || color < 0 || isNaN(color)
}
document.querySelector('#button').addEventListener('click', changeColor);