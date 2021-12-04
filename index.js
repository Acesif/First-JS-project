let counter = 0
let countId = document.getElementById("count")
function add(){
    counter = counter +1
    countId.innerText = counter
}
function reset(){
    counter = 0
    countId.innerText = counter
}