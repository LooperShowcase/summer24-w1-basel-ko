function realpic() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);

  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}
console.log(realpic());

//showing the images
const fakepic = "https://thispersondoesnotexist.com/";

//showing the images
const imgcontainer = document.getElementById("images");
const rescontainer = document.getElementById("result");
function draw() {
  const randombool = Math.random() > 0.5;
  const arr = [randombool, !randombool];
  const again = document.createElement("button");
  again.innerHTML = "play again!";
  again.onclick = draw;
imgcontainer.innerHTML="";
rescontainer.innerHTML="";
  for (const isreal of arr) {
    const img = document.createElement("img");
    img.src = isreal ? realpic() : fakepic;
    img.onclick = function () {
      if (isreal) {
        rescontainer.innerHTML = "Mabrook:D";
      } else {
        rescontainer.innerHTML = "Try again:(";
      }
      rescontainer.appendChild(again);
    };
    imgcontainer.appendChild(img);
  }
}
// showing the images

draw();
