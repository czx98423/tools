import './sass/index.scss'
import imgsrc from './image/abc.png'
let main = document.getElementById('main')

main.innerText='ok'
main.classList='default-text'

let img = document.createElement('img')
img.src = imgsrc
main.appendChild(img)