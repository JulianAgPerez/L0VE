function generateHeart(x, y) {
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    heart.classList.add('heart');
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    let size = Math.random() * 80;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';
    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate(' + transformValue + 'deg)';

    body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 1000);
}

function onMouseMove(event) {
    generateHeart(event.clientX, event.clientY);
}

function stopGeneratingHearts() {
    document.removeEventListener('mousemove', onMouseMove);
}

document.addEventListener('mousedown', function () {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup',stopGeneratingHearts)
});
