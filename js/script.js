var carro1 = document.getElementById("carro1")
var carro2 = document.getElementById("carro2")
var modal1 = document.getElementById("modal1")
var modal2 = document.getElementById("modal2")

function start(){
    var pos1 = 0
    var pos2 = 0
    var tempo = setInterval(function(){
        var vel1 = Math.floor(Math.random()*8)
        var vel2 = Math.floor(Math.random()*8)
        document.getElementById("carro1").style.marginLeft = pos1+"0px"
        document.getElementById("carro2").style.marginLeft = pos2+"0px"
        pos1+=vel1
        pos2+=vel2
        
        if(pos1 >= 190){
            modal1.style.display = "block"
            clearInterval(tempo)
        }else if(pos2 >=190){
            modal2.style.display = "block"
            clearInterval(tempo)
        }
    },100)
}

function fechar1(){
    modal1.style.display = "none"

}
function fechar2(){
    modal2.style.display = "none"

}


