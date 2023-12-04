'use strict'
var porcentagem = document.querySelector("#porcentagem")
<script>
var porcentagem = document.querySelector("#porcentagem")
var valorEstrela = 0
var lb = document.querySelector("#lb")

function getStarsNumber(){
    return parseInt(localStorage.getItem('starNumber'));
} 


function getStarsNumber(){
    return parseInt(localStorage.getItem('starNumber'));
} 
function calculatePorcentagem(){
     var valorEstrela = 0
    if(getStarsNumber() == 3){
        valorEstrela = 0.5
        porcentagem.width = getStarsNumber() + valorEstrela +'%';
    }else{
        valorEstrela = 1
        porcentagem.width = getStarsNumber() * valorEstrela +'%';
    }
  
    

}
 function createPorcent(){
    if(localStorage.getItem('porcentagem') == null){
         porcentagem.width = 0+'%'
        localStorage.setItem('porcentagem', 0 +'')
    }
 }

 createPorcent()
setInterval(calculatePorcentagem(), 2000)