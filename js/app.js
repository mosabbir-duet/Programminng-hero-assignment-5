

function randomColorChange(cardId) {

    var r = Math.floor(Math.random() * (255 - 0) + 0);
    var g = Math.floor(Math.random() * (255 - 0) + 0);
    var b = Math.floor(Math.random() * (255 - 0) + 0);
    let color = "rgb("+r+","+g+","+b+")";
    document.getElementById(cardId).style.backgroundColor = color;

}

document.getElementById('triangle-ranColorChange').addEventListener('mousemove', () => {
    randomColorChange('triangle-ranColorChange')
 })

document.getElementById('rectangle-ranColorChange').addEventListener('mousemove', () => {
    randomColorChange('rectangle-ranColorChange')
 })

document.getElementById('parallelogram-ranColorChange').addEventListener('mousemove', () => {
    randomColorChange('parallelogram-ranColorChange')
 })

document.getElementById('rhombus-ranColorChange').addEventListener('mousemove', () => {
    randomColorChange('rhombus-ranColorChange')
 })

document.getElementById('pentagon-ranColorChange').addEventListener('mousemove', () => {
    randomColorChange('pentagon-ranColorChange')
 })

document.getElementById('ellipse-ranColorChange').addEventListener('mousemove', () => {
    randomColorChange('ellipse-ranColorChange')
 })