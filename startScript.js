'use strict'
//<script src="startScript.js" defer></script>
var starNumber = document.querySelector('#starNumber');

function createStarNumber(){
    if(localStorage.getItem('starNumber') == null){
        localStorage.setItem('starNumber', 0+'')
    }
}onclick="addStars(1)"

createStarNumber()

function getStarsNumber(){
    return localStorage.getItem('starNumber');
} 
starNumber.textContent = getStarsNumber()
function setStarNumber(num){
    localStorage.setItem('starNumber', num + '')
}

function deleteProgress(){
    localStorage.removeItem('starNumber')
}
function addStars(num){
    if(getStarsNumber() != 13){
        setStarNumber( parseInt(getStarsNumber()) + num +'')
    }
}
 setInterval(() => {
    starNumber.textContent = getStarsNumber()
}, 2000);


