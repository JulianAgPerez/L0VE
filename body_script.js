const btnYes = document.getElementById("yes");
const btnNo = document.getElementById("no");
const wujuuu = () => {
    alert('Nos vemos dentro de poquito entonces, tiamu 😘 uwu');
    alert('Mañana nos casamos');
    location.href = 'https://youtu.be/vOSYQCyQqOI?t=16'
}
const noAmur = () => {
    btnNo.style.position = 'absolute';
    btnNo.style.top = (Math.random() * window.innerHeight + 'px');
    btnNo.style.left = (Math.random() * window.innerWidth + 'px');
}

btnYes.addEventListener('click',wujuuu);
btnNo.addEventListener('mouseover',noAmur);

