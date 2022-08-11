const bt1 = document.querySelector('button');
const bt2 = document.querySelector('.sec')
const h1 = document.querySelector('h1');

const randomizeColor = () =>
{
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    let colorCode = `rgb(${R},${G},${B}`;
    return colorCode
}
const randomizePosition = () =>
{
    let left = Math.floor(Math.random() * document.body.clientWidth);
    let top = Math.floor(Math.random() * document.body.clientHeight);
    bt1.style.left = `${left}px`;
    bt1.style.top = `${top}px`; 
}

const backgroundTransform = () =>
{
    document.body.style.backgroundColor = randomizeColor();
    bt1.innerText = "Hì hi tớ cũm v";
    h1.innerHTML = "<h1>Hihi tớ cũm v</h1> <p>Mình thành đôi nha</p>";
}
bt2.addEventListener("click", ()=> {backgroundTransform();bt2.classList.toggle('none-display');bt1.classList.toggle('none-display')});
// bt1.addEventListener("mouseenter",() => {randomizePosition()});
bt1.addEventListener("click",() => {randomizePosition();alert("Chọn sai rùi!")});
randomizePosition();