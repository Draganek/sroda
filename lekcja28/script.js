const wyrazy = ["funkcja", "giganci", "programowanie", "zielony", "rusztowanie", "komputer"];

const tabObrazki = [
    'wisielec0.png',
    'wisielec1.png',
    'wisielec2.png',
    'wisielec3.png',
    'wisielec4.png',
    'wisielec5.png',
    'wisielec6.png',
    'wisielec7.png',
    'wisielec8.png',
    'wisielec9.png',
    'wisielec10.png'
];

const wyraz = wyrazy[Math.floor(Math.random() * wyrazy.length)]

const odpowiedzi = []

let czyTrafiony = false

let szanse = tabObrazki.length

const uzyte = []

let pozostaleLitery = wyraz.length

for (let i = 0; i < wyraz.length; i++) {
    odpowiedzi[i] = '_'
}

document.getElementById('gra').textContent = odpowiedzi.join(' ')

document.getElementById('ok').addEventListener('click', function () {
    czyTrafiony = false
    document.getElementById('komunikat').textContent = ''
    const strzal = document.getElementById('litera').value
    document.getElementById('litera').value = ''

    if (strzal.length == 0) {
        document.getElementById('komunikat').textContent = 'Podaj literkę'
    } else {
        for (let i = 0; i < wyraz.length; i++) {
            if (wyraz[i] == strzal) {
                czyTrafiony = true
                odpowiedzi[i] = strzal
                pozostaleLitery--

                document.getElementById('gra').textContent = odpowiedzi.join(' ')
            }
        }
        if (pozostaleLitery === 0) {
            document.getElementById('ok').disabled = true
            document.getElementById('litera').disabled = true
            document.getElementById('komunikat').textContent =
                `Brawo odgadnięte hasło to: ${wyraz}`
        }
    }
})