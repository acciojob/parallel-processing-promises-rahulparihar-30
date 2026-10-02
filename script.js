//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
const loading = document.getElementById("loading")
const err = document.getElementById("error");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];


function downloadImage(img) {
  return new Promise(function (resolve, reject) {
    let image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject("Failed " + img);
    image.src = img;
  })
}

function downloadimages() {
  loading.style.display = "block";
  const promises = images.map((image) => downloadImage(image.url));
  Promise.all(promises).then((downloadedImages) => {
    loading.style.display = "none";
    downloadedImages.map((img) => {
      console.log(img)
      output.appendChild(img);
    })
    btn.style.display = "none"
  }).catch((error) => {
    loading.style.display = "none";
    err.innerText = error;
  })
}

btn.addEventListener("click", downloadimages);