const choosenPicture = document.querySelector("#select-picture")
const canvas = document.getElementById("meme")
const textTop = document.querySelector("#text-top")
const textBottom = document.querySelector("#text-bottom")
const rangeTopLabel = document.querySelector("#offset-top-value")
const rangeTop = document.querySelector("#offset-top")
const rangeBottomLabel = document.querySelector("#offset-bottom-value")
const rangeBottom = document.querySelector("#offset-bottom")
const fontSizeRange = document.querySelector("#font-size")
const fontSizeValue = document.querySelector("#font-size-value")
let offsetTop = 0
let offsetBottom = 0
let fontSize = 100
let picture

choosenPicture.addEventListener("change", function (e) {
    const pictureUrl = URL.createObjectURL(e.target.files[0])

    picture = new Image()
    picture.src = pictureUrl

    picture.addEventListener("load", function () {
        console.log("Wczytywanie obrazka...");
        updateMeme(canvas, picture, textTop.value, textBottom.value)
    })
})

function updateMeme(canvas, picture, textTop, textBottom) {
    if (picture) {
        canvas.style.display = "block"
        const ctx = canvas.getContext("2d")
        const canvasWidth = picture.width
        const canvasHeight = picture.height
        const offsetY = canvasHeight / 8
        canvas.width = canvasWidth
        canvas.height = canvasHeight

        ctx.drawImage(picture, 0, 0)

        ctx.strokeStyle = "black"
        ctx.lineWidth = Math.floor(fontSize / 4)
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.lineJoin = "round"
        ctx.font = `${fontSize}px Lato`

        ctx.textBaseLine = "top"
        ctx.strokeText(textTop, canvasWidth / 2, offsetY + offsetTop)
        ctx.fillText(textTop, canvasWidth / 2, offsetY + offsetTop)

        ctx.textBaseLine = "bottom"
        ctx.strokeText(textBottom, canvasWidth / 2, canvasHeight - offsetY - offsetBottom)
        ctx.fillText(textBottom, canvasWidth / 2, canvasHeight - offsetY - offsetBottom)
    }
}

textTop.addEventListener("input", function () {
    updateMeme(canvas, picture, textTop.value, textBottom.value)
})
textBottom.addEventListener("input", function () {
    updateMeme(canvas, picture, textTop.value, textBottom.value)
})

rangeTop.addEventListener("input", function () {
    rangeTopLabel.textContent = rangeTop.value
    offsetTop = rangeTop.value * 5
    updateMeme(canvas, picture, textTop.value, textBottom.value)
})

rangeBottom.addEventListener("input", function () {
    rangeBottomLabel.textContent = rangeBottom.value
    offsetBottom = rangeBottom.value * 5
    updateMeme(canvas, picture, textTop.value, textBottom.value)
})

fontSizeRange.addEventListener("input", function () {
    fontSizeValue.textContent = `Rozmiar czcionki: ${fontSizeRange.value}`
    fontSize = fontSizeRange.value * 10
    updateMeme(canvas, picture, textTop.value, textBottom.value)
})

