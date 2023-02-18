// This randomColorChange function work for generating random color for each card using mousemove event
function randomColorChange(cardId) {

    var r = Math.floor(Math.random() * (255 - 0) + 0);
    var g = Math.floor(Math.random() * (255 - 0) + 0);
    var b = Math.floor(Math.random() * (255 - 0) + 0);
    let color = "rgb("+r+","+g+","+b+")";
    document.getElementById(cardId).style.backgroundColor = color;

}

// This function calculate area of different geometry shape 

function calculationArea(geometryShapeId, firstInputFieldId, secondInputFieldId) {
    let firstInputValue = takeInput(firstInputFieldId);
    let secondInputValue = takeInput(secondInputFieldId);
    
}

function takeInput(InputFieldId) {
    const InputField= document.getElementById(InputFieldId);
    const InputFieldValue = InputField.value;
    InputField.value = "";
    return InputFieldValue;
}


// click event 


document.getElementById('btn-traingle-calc').addEventListener('click', () => {
    calculationArea('btn-traingle-calc', 'tringle-first-field', 'tringle-second-field')
 })

document.getElementById('btn-rectangle-calc').addEventListener('click', () => {
    randomColorChange('rectangle-ranColorChange')
 })

document.getElementById('btn-parallelogram-calc').addEventListener('click', () => {
    randomColorChange('parallelogram-ranColorChange')
 })

document.getElementById('btn-rhombus-calc').addEventListener('click', () => {
    
 })

document.getElementById('btn-pentagon-calc').addEventListener('click', () => {
    
 })

document.getElementById('btn-ellipse-calc').addEventListener('click', () => {
    
 })

// mousemove event 

document.getElementById('triangle-ranColorChange').addEventListener('mousemove', () => {
    randomColorChange('triangle-ranColorChange');
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