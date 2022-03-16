var imageArray = ["assets/1.jpg", "assets/2.jpg", "assets/3.jpg", "assets/4.jpg", "assets/5.jpg", "assets/6.jpg"];
var index = 0

function rotateImage(){
    document.querySelector("img").setAttribute("src", imageArray[index]);
    index++;
    if (index >= imageArray.length) {
        index = 0;
    }
}