window.addEventListener("resize", calculateColumns);
calculateColumns(); // Call the function initially

function calculateColumns() {
  const gallery = document.querySelector(".gallery");
  const galleryItems = gallery.querySelectorAll(".gallery-item");

  // Remove previously set style
  galleryItems.forEach((item) => (item.style.gridColumnEnd = ""));

  const galleryWidth =
    gallery.offsetWidth -
    parseInt(window.getComputedStyle(gallery).paddingLeft) * 2; // gallery width excluding padding
  const itemWidth =
    galleryItems[0].offsetWidth +
    parseInt(window.getComputedStyle(galleryItems[0]).marginRight) +
    parseInt(window.getComputedStyle(galleryItems[0]).marginLeft); // including margin

  const numColumns = Math.floor(galleryWidth / itemWidth); // calculate the number of columns

  const numItems = galleryItems.length;
  const numItemsInLastRow = numItems % numColumns;

  if (numItemsInLastRow !== 0) {
    const lastItem = galleryItems[numItems - 1];
    lastItem.style.gridColumnEnd = `span ${numColumns - numItemsInLastRow + 1}`;
  }
}
