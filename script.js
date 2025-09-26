const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

function gettingCurrentImage(){
    let count = 0;
    const currPic = document.querySelector('.show');
    const allImg = document.querySelectorAll('img');
    const dataId = parseInt(currPic.dataset.id);

    const currNum = document.querySelector('.number > .active');

    allImg.forEach(() => {
        count++;
    })
    return {currPic,currNum,dataId,count};
}

function changeClass(newPic,current,class1,class2){
    newPic.classList.remove(class1);
    newPic.classList.add(class2);
    current.classList.remove(class2);
    current.classList.add(class1);
}

function changingImage(pos){
    const currentImage =  gettingCurrentImage();

    const count = currentImage.count;
    const previousDataId = currentImage.dataId;
    const changeDataId = previousDataId + pos;
    const currPic = currentImage.currPic;
    const currNum = currentImage.currNum;
    console.log('hi');

    if(previousDataId === 1 && previousDataId > changeDataId){
        const showPic = document.querySelector(`img[data-id="${count}"]`);
        changeClass(showPic,currPic,'hide','show');

        const showNum = document.querySelector(`.number>button[data-id="${count}"]`);
        changeClass(showNum,currNum,'inactive','active');
    }
    else if (previousDataId === count && changeDataId > previousDataId){
        const showPic = document.querySelector(`img[data-id="${1}"]`);
        changeClass(showPic,currPic,'hide','show');

        const showNum = document.querySelector(`.number>button[data-id="${1}"]`);
        changeClass(showNum,currNum,'inactive','active');     
    }
    else{
        const showPic = document.querySelector(`img[data-id="${changeDataId}"]`);
        changeClass(showPic,currPic,'hide','show');

        const showNum = document.querySelector(`.number>button[data-id="${changeDataId}"]`);
        changeClass(showNum,currNum,'inactive','active');
    }
    currentImage.count = 0;
}

leftBtn.addEventListener('click', () =>{
    changingImage(-1);
})

rightBtn.addEventListener('click', () => {
    changingImage(1);
});

const circles = document.querySelectorAll('.number>button');
circles.forEach(circle => {
    circle.addEventListener('click', (e) => {
        const clickedDataId = parseInt(e.target.dataset.id);
        const currentImage = gettingCurrentImage();
        const changeDataId = clickedDataId;
        const currPic = currentImage.currPic;
        const currNum = currentImage.currNum;
        const currId = currentImage.dataId;
        console.log('curr',currId);
        console.log('to change',changeDataId); 

        if(changeDataId !== currId){
            const showPic = document.querySelector(`img[data-id="${changeDataId}"]`);
            changeClass(showPic,currPic,'hide','show');

            const showNum = document.querySelector(`.number>button[data-id="${changeDataId}"]`);
            changeClass(showNum,currNum,'inactive','active');
        }
    })
})

setInterval(changingImage,5000,1);