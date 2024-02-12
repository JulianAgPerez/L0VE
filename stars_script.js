var background = document.querySelector("body");
var stars = 50;
for (var i = 0; i < stars; i++) {
  var star = document.createElement("div");
  star.className = "star";
  star.style.animationDelay = Math.random() * 5 + "s";
  star.style.left = Math.random() * 100 + "%";
  background.appendChild(star);
}
