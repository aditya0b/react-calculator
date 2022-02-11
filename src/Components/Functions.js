function Division() {
    let value1 = parseFloat(document.getElementById('value-1').value)
    let value2 = parseFloat(document.getElementById('value-2').value)
    document.querySelector('#result').innerHTML = `Result : ${value1 / value2}`;
}

function Multiply() {
    let value1 = parseFloat(document.getElementById('value-1').value)
    let value2 = parseFloat(document.getElementById('value-2').value)
    document.querySelector('#result').innerHTML = `Result : ${value1 * value2}`;
}

function Addition() {
    let value1 = parseFloat(document.getElementById('value-1').value)
    let value2 = parseFloat(document.getElementById('value-2').value)
    document.querySelector('#result').innerHTML = `Result : ${value1 + value2}`;
}

function Subtract() {
    let value1 = parseFloat(document.getElementById('value-1').value)
    let value2 = parseFloat(document.getElementById('value-2').value)
    document.querySelector('#result').innerHTML = `Result : ${value1 - value2}`;
}



export {
    Division,
    Multiply,
    Addition,
    Subtract
}