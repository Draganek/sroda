let punkty = []
let punktyRundy
let aktualnyGracz
let czyMoznaGrac
let punktyMax
let ostatniRzut

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
    punkty = [0, 0]
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

    document.querySelector('.punkty-max').style.display = 'block'

}

function nastepnyGracz() {
    aktualnyGracz = aktualnyGracz === 0 ? 1 : 0;
    punktyRundy = 0
    ostatniRzut = 0

    document.getElementById('aktualne-punkty-0').textContent = '0'
    document.getElementById('aktualne-punkty-1').textContent = '0'

    document.querySelector('.gracz-0-panel').classList.toggle('aktywny')
    document.querySelector('.gracz-1-panel').classList.toggle('aktywny')
}

document.querySelector('.btn-rzuc').addEventListener('click', function () {
    if (document.getElementById('wartosc').value > 0) {
        czyMoznaGrac = true
        document.getElementById('wartosc').style.backgroundColor = 'white'
    } else {
        czyMoznaGrac = false
        document.getElementById('wartosc').style.backgroundColor = 'red'
    }

    if (czyMoznaGrac) {

        document.querySelector('.punkty-max').style.display = 'none'
        punktyMax = document.getElementById('wartosc').value

        const liczbaOczek = Math.floor(Math.random() * 6) + 1
        const koscObrazek = document.querySelector('.kosc')
        koscObrazek.src = obrazki[liczbaOczek - 1]
        koscObrazek.style.display = 'block'

        if (liczbaOczek == 6 && ostatniRzut == 6) {
            punkty[aktualnyGracz] = 0
            document.querySelector('#wynik-' + aktualnyGracz).textContent = '0'
            alert(`Gracz ${aktualnyGracz} wylosował 2 razy z rzędu 6 oczek. Resetowanie punktów...`)
            nastepnyGracz()
        }
        else if (liczbaOczek != 1) {
            punktyRundy += liczbaOczek
            document.querySelector('#aktualne-punkty-' + aktualnyGracz).textContent = punktyRundy
        } else {
            nastepnyGracz()
        }
        ostatniRzut = liczbaOczek
    }
})

document.querySelector('.btn-zatrzymaj').addEventListener('click', function () {
    if (czyMoznaGrac) {
        punkty[aktualnyGracz] += punktyRundy
        document.querySelector('#wynik-' + aktualnyGracz).textContent = punkty[aktualnyGracz]

        if (punkty[aktualnyGracz] >= punktyMax) {
            czyMoznaGrac = false
            document.querySelector('#nazwa-' + aktualnyGracz).textContent = "Zwycięstwo!"
            document.querySelector('.kosc').style.display = 'none'
            document.querySelector('.gracz-' + aktualnyGracz + '-panel')
                .classList.add('zwyciestwo')
        } else {
            nastepnyGracz()
        }
    }
})

document.querySelector('.btn-nowa-gra').addEventListener('click', nowaGra)

nowaGra()
