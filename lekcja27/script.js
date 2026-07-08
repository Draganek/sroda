document.getElementById("przyciskDodaj").addEventListener('click', function(){
    const nowyElement = document.getElementById("element").value.trim()
    if (nowyElement != ''){
        document.getElementById('komunikat').textContent=''
        document.getElementById('listaZadan').innerHTML += `<li>${nowyElement}</li>`
        document.getElementById("element").value = ''
    }else{
        document.getElementById('komunikat').textContent='Uzupełnij pole'
    }
})

document.getElementById('listaZadan').addEventListener('click', function(e){
    this.removeChild(e.target)
})