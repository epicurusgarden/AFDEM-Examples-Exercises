
const img = document.querySelector('#image-swap');
let originalImageSrc = img.getAttribute("src");
img.addEventListener("mouseenter",function(){
  this.setAttribute("src","https://picsum.photos/200/300");
});
img.addEventListener("mouseleave",function(){
  this.setAttribute("src",originalImageSrc);
});