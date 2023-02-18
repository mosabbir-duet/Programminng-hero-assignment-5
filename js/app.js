// This randomColorChange function work for generating random color for each card using mouseenter event

let serial = 0;

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

    // If validation return true for then if portion work and calculate area for each geometry shape

    if(checkValidation) {

        firstInputValue = parseFloat(firstInputValue);
        secondInputValue = parseFloat(secondInputValue);

        if(geometryShapeId == 'btn-traingle-calc') {
            const geometryShapeName = 'Traingle';
            let area = 0.5 * firstInputValue * secondInputValue;
            area = area.toFixed(2);
            printAreaValue(geometryShapeName,area);

        }

        else if( geometryShapeId == 'btn-rectangle-calc') {
            const geometryShapeName = 'Rectangle';
            let area = firstInputValue * secondInputValue;
            area = area.toFixed(2);
            printAreaValue(geometryShapeName,area);
            
        }

        else if( geometryShapeId == 'btn-parallelogram-calc') {
            const geometryShapeName = 'Parallelogram';
            let area = firstInputValue * secondInputValue;
            area = area.toFixed(2);
            printAreaValue(geometryShapeName,area);
        }

        else if( geometryShapeId == 'btn-rhombus-calc') {
            const geometryShapeName = 'Rhombus';
            let area = 0.5 * firstInputValue * secondInputValue;
            area = area.toFixed(2);
            printAreaValue(geometryShapeName,area);
        }

        else if( geometryShapeId == 'btn-pentagon-calc') {
            const geometryShapeName = 'Pentagon';
            let area = 0.5 * firstInputValue * secondInputValue;
            area = area.toFixed(2);
            printAreaValue(geometryShapeName,area);
        }

        else if( geometryShapeId == 'btn-ellipse-calc') {
            const geometryShapeName = 'Ellipse';
            const pi = 3.14;
            let area = pi *  firstInputValue * secondInputValue;
            area = area.toFixed(2);
            printAreaValue(geometryShapeName,area);
        }

    // validation function return false then execute else statement and don't calculate area of geometry shape 

    }
    else {
        return;
    }
}


// This Function take input value from form field

function takeInput(InputFieldId) {
    const InputField= document.getElementById(InputFieldId);
    const InputFieldValue = InputField.value;
    InputField.value = "";
    return InputFieldValue;
}

// This Function check the validation of input form data

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

    else if((firstInputValue < 0 || secondInputValue < 0) ) {
        alert("You give negative value as a input!!! please provide positive number");
        return false;
    }

    
    
    else {
        return true
    }
}


// This printAreaValue function take the geometry name and area as a parameter and added the table 

function printAreaValue (geometryShapeName, area) {
    serial += 1;
    const tableBody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.innerHTML = 
    `<td>${serial}.</td>
     <td>${geometryShapeName}</td>
     <td>${area} cm<sup>2</sup></td>
     <td><button class="btn py-auto" style = "background-color:#1090D8" id = "btn-convert">Convert m<sup>2</sup></button></td>
    `;
    tableBody.appendChild(tr);
    
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

// mouseenter event 

document.getElementById('triangle-ranColorChange').addEventListener('mouseenter', () => {
    randomColorChange('triangle-ranColorChange');
 })

document.getElementById('rectangle-ranColorChange').addEventListener('mouseenter', () => {
    randomColorChange('rectangle-ranColorChange')
 })

document.getElementById('parallelogram-ranColorChange').addEventListener('mouseenter', () => {
    randomColorChange('parallelogram-ranColorChange')
 })

document.getElementById('rhombus-ranColorChange').addEventListener('mouseenter', () => {
    randomColorChange('rhombus-ranColorChange')
 })

document.getElementById('pentagon-ranColorChange').addEventListener('mouseenter', () => {
    randomColorChange('pentagon-ranColorChange')
 })

document.getElementById('ellipse-ranColorChange').addEventListener('mouseenter', () => {
    randomColorChange('ellipse-ranColorChange')
 })


 // blog click event 

 document.getElementById('btn-click-blog').addEventListener('click', () => {
    window.open("../blog.html");
 });
