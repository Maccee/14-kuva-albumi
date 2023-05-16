var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var images = document.getElementsByClassName("gallery-item__image");
for (let i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
}
modal.onclick = function () {
  modal.style.display = "none";
};
