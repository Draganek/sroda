const choosenPicture = document.querySelector("#select-picture")
const canvas = document.getElementById("meme")
const textTop = document.querySelector("#text-top")
const textBottom = document.querySelector("#text-bottom")
let picture

choosenPicture.addEventListener("change", function(e){
    const pictureUrl = URL.createObjectURL(e.target.files[0])

    picture = new Image()
    picture.src = pictureUrl

    picture.addEventListener("load", function(){
        console.log("Wczytywanie obrazka...");
        updateMeme(canvas, picture, textTop.value, textBottom.value)
    })
})

function updateMeme(canvas, picture, textTop, textBottom) {
    const ctx = canvas.getContext("2d")
    const canvasWidth = picture.width
    const canvasHeight = picture.height
    const fontSize = Math.floor(canvasWidth / 20)
    const offsetY = canvasHeight / 20

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
    ctx.strokeText(textTop, canvasWidth / 2, offsetY + 80)
    ctx.fillText(textTop, canvasWidth / 2, offsetY + 80)

    ctx.textBaseLine = "bottom"
    ctx.strokeText(textBottom, canvasWidth / 2, canvasHeight - offsetY)
    ctx.fillText(textBottom, canvasWidth / 2, canvasHeight - offsetY)
}

textTop.addEventListener("change", function(){
    updateMeme(canvas, picture, textTop.value, textBottom.value)
})
textBottom.addEventListener("change", function(){
    updateMeme(canvas, picture, textTop.value, textBottom.value)
})