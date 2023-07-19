// catch selector
const saturate = document.getElementById("saturate");
const contrast = document.getElementById("contrast");
const brightness = document.getElementById("brightness");
const sepia = document.getElementById("sepia");
const grayscale = document.getElementById("grayscale");
const blur = document.getElementById("blur");
const hueRotate = document.getElementById("hue-rotate");
const upload = document.getElementById("upload");
const download = document.getElementById("download");
const img = document.getElementById("img");
const reset = document.getElementById("reset");
const imgBox = document.querySelector(".img-box");
const canvas= document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(reset);// rest value

function resetValue(){
   saturate.value='100';
  contrast.value='100';
  brightness.value='100';
  sepia.value='0';
  grayscale.value='0';
  blur.value = '0';
  hueRotate.value = '0';
  ctx.filter = "none"
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  
}
window.onload = function () {
  reset.style.display = "none";
  download.style.display = "none";
  imgBox.style.display = "none";
};
upload.onchange = function () {
  resetValue();
  reset.style.display = "block ";
  download.style.display = "block";
  imgBox.style.display = "block";
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function () {
    img.src = file.result;
  };
  img.onload = function(){
    canvas.width =img.width;
    canvas.height =img.height;
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
    img.style.display = "none";
  }
};

// edit

let filters=document.querySelectorAll("ul li input");
filters.forEach(filter =>{
  filter.addEventListener("input",function() {
    ctx.filter = `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${hueRotate.value}deg)
    `
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
  })
})
download.onclick = function(){
  download.href = canvas.toDataURL("image/jpeg");
}

// dark mood function

let darkBtn = document.querySelector("#moon");
let sunBtn = document.querySelector("#sun");
let label =document.querySelectorAll("label");


darkBtn.onclick = function(){
  darkBtn.style.display= "none"
  sunBtn.style.display= "block"
  document.body.style.backgroundColor="#333"
  label.forEach(element => {
  element.style.color="#fff !important"    
  });
  document.querySelector(".container").style.backgroundColor="#111";

}
sunBtn.onclick = function(){
  darkBtn.style.display= "block"
  sunBtn.style.display= "none"
  document.body.style.backgroundColor="#fff"
  label.forEach(element => {
  element.style.color="#000 !important"    
    });
  document.querySelector(".container").style.backgroundColor="#a8a8a8";
}




