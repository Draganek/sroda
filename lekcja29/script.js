let punkty = []
let punktyRundy
let aktualnyGracz
let czyMoznaGrac

const obrazki =
    [
        "kosc1.png",
        "kosc2.png",
        "kosc3.png",
        "kosc4.png",
        "kosc5.png",
        "kosc6.png",
    ]

function nowaGra() {
    czyMoznaGrac = true
    aktualnyGracz = 0
    document.querySelector('.kosc').style.display = 'none'
    punkty = [0,0]
    punktyRundy = 0

    document.getElementById('wynik-0').textContent = "0"
    document.getElementById('wynik-1').textContent = "0"
    document.getElementById('aktualne-punkty-0').textContent = "0"
    document.getElementById('aktualne-punkty-1').textContent = "0"
    document.getElementById('nazwa-0').textContent = "Gracz 1"
    document.getElementById('nazwa-1').textContent = "Gracz 2"

    document.querySelector('.gracz-0-panel').classList.remove('zwyciestwo')
    document.querySelector('.gracz-1-panel').classList.remove('zwyciestwo')
    document.querySelector('.gracz-0-panel').classList.remove('aktywny')
    document.querySelector('.gracz-1-panel').classList.remove('aktywny')

    document.querySelector('.gracz-0-panel').classList.add('aktywny')
}

document.querySelector('.btn-rzuc').addEventListener('click', function() {
    if (czyMoznaGrac){
        const liczbaOczek = Math.floor(Math.random() * 6) + 1
        const koscObrazek = document.querySelector('.kosc')
        koscObrazek.src = obrazki[liczbaOczek-1]
        koscObrazek.style.display = 'block'

        if (liczbaOczek != 1){
            punktyRundy += liczbaOczek
            document.querySelector('#aktualne-punkty-' + aktualnyGracz).textContent = punktyRundy
        }else{
            
        }
    }
})

nowaGra()