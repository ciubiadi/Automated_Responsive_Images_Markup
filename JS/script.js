//create array that contains all the images on the page
const IMAGES = document.querySelectorAll("img");

for (let i = 0; i < IMAGES.length; i++) {

    let imgSource = IMAGES[i].getAttribute("SRC");
    // "-800.jpg" has 8 characters, tht's why we slice 8
    imgSource = imgSource.slice(0, -8);
    console.log(imgSource);

    let type = IMAGES[i].getAttribute("data-type");
    console.log(type);

}