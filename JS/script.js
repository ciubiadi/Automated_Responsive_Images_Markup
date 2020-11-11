//create array that contains all the images on the page
const IMAGES = document.querySelectorAll("img");

const SIZES = {

    showcase : "100vw",
    reason : "(max-width: 799px) 100vw, 372px",
    feature : "(max-width: 799px) 100vw, 558px",
    story : "(max-width: 799px) 100vw, 670px"

}

function makeSrcset(imgSrc) {

    let markup = [];
    
    let width = 400; // the smallest

    for (let i = 0; i < 5; i ++) { // we generate 5 different sizes

        markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";

        width+=400;

    }

    return markup.join();

}

for (let i = 0; i < IMAGES.length; i++) {

    let imgSource = IMAGES[i].getAttribute("SRC");

    // "-800.jpg" has 8 characters, tht's why we slice 8
    imgSource = imgSource.slice(0, -8);

    let srcset = makeSrcset(imgSource);

    IMAGES[i].setAttribute("srcset", srcset);

    let type = IMAGES[i].getAttribute("data-type");

    let sizes = SIZES[type];

    IMAGES[i].setAttribute("sizes", sizes);

}