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
    // call takeInput function for taking value from input field
    let firstInputValue = takeInput(firstInputFieldId);
    let secondInputValue =  takeInput(secondInputFieldId);

// call checkValidateInputValue function for checking tha validation

    const checkValidation = checkValidationInputValue(firstInputValue, secondInputValue);
    // console.log(checkValidation);


    if(checkValidation) {
        firstInputValue = parseFloat(firstInputValue);
        secondInputValue = parseFloat(secondInputValue);

        if(geometryShapeId == 'btn-traingle-calc') {
            const area = 0.5 * firstInputValue * secondInputValue;
           
            
            console.log(area.toFixed(2));
        }

        else if( geometryShapeId == 'btn-rectangle-calc') {
            const area = firstInputValue * secondInputValue;
            console.log(area.toFixed(2));
        }

        else if( geometryShapeId == 'btn-rectangle-calc') {
            const area = firstInputValue * secondInputValue;
            console.log(area.toFixed(2));
        }
    }
    else {
        return;
    }
}

function takeInput(InputFieldId) {
    const InputField= document.getElementById(InputFieldId);
    const InputFieldValue = InputField.value;
    InputField.value = "";
    return InputFieldValue;
}

function checkValidationInputValue(firstInputValue, secondInputValue) {

    if((firstInputValue.length == 0 && secondInputValue.length == 0)) {
        alert("Each field is empty!!! please give value in each field");
        return false;
    }

    else if((firstInputValue.length == 0 && typeof secondInputValue.length != 0) || (secondInputValue.length == 0 && typeof firstInputValue.length != 0) ){
        alert("one field empty!!! please give value in each field");
        return false;
    }

    else if((isNaN(firstInputValue) && secondInputValue.length != 0) || (isNaN(secondInputValue) && typeof firstInputValue.length != 0) ) {
        alert("one field value is string!!!");
        return false;
    }

    
    
    else {
        return true
    }
}



// click event 


document.getElementById('btn-traingle-calc').addEventListener('click', () => {
    calculationArea('btn-traingle-calc', 'tringle-first-field', 'tringle-second-field');
 })

document.getElementById('btn-rectangle-calc').addEventListener('click', () => {
    calculationArea('btn-rectangle-calc', 'rectangle-first-field', 'rectangle-second-field');
 })

document.getElementById('btn-parallelogram-calc').addEventListener('click', () => {
    calculationArea('btn-parallelogram-calc', 'parallelogram-first-field', 'parallelogram-second-field');
 })

document.getElementById('btn-rhombus-calc').addEventListener('click', () => {
    calculationArea('btn-rhombus-calc', 'rhombus-first-field', 'rhombus-second-field');
    
 })

document.getElementById('btn-pentagon-calc').addEventListener('click', () => {
    calculationArea('btn-pentagon-calc', 'pentagon-first-field', 'pentagon-second-field');

 })

document.getElementById('btn-ellipse-calc').addEventListener('click', () => {

    calculationArea('btn-ellipse-calc', 'ellipse-first-field', 'ellipse-second-field');
    
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