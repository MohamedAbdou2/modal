let imgList = Array.from(document.querySelectorAll('.item img'));
let lightboxcontainer = document.getElementById("lightboxcontainer");
let closeBtn = document.getElementById("closeBtn");
let currentSlideIndex = 0;
for(let i=0;i<imgList.length;i++){
    imgList[i].addEventListener('click',function(e){
        lightboxcontainer.style.display = "flex";
         currentSlideIndex = imgList.indexOf(e.target);
        let imgSrc = e.target.getAttribute('src');
        lightboxcontainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`;
    })
}

// function nextSlide(){
//     currentSlideIndex++;
//     if(currentSlideIndex == imgList.length){currentSlideIndex=0;}
//     let imgSrc = imgList[currentSlideIndex].getAttribute('src');
//     lightboxcontainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`;
// }
// function prevSlide(){
//     currentSlideIndex--;
//     if(currentSlideIndex < 0 ){currentSlideIndex=imgList.length-1;}
//     let imgSrc = imgList[currentSlideIndex].getAttribute('src');
//     lightboxcontainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`;
// }

////// one function for sliding /////////// 
function slide(step){     /////if step postitive 1 will be act as ++ to next if negative will be act as -- to previous
    currentSlideIndex = currentSlideIndex +step;
    if(currentSlideIndex == imgList.length){currentSlideIndex=0;}
    if(currentSlideIndex < 0 ){currentSlideIndex=imgList.length-1;}
    let imgSrc = imgList[currentSlideIndex].getAttribute('src');
    lightboxcontainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`;
}
function exit(){
    lightboxcontainer.style.display = "none";
}
closeBtn.nextElementSibling.addEventListener('click',function(){slide(1)});
closeBtn.previousElementSibling.addEventListener('click',function(){slide(-1)});
closeBtn.addEventListener('click',exit);