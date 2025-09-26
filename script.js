const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

function gettingCurrentImage(){
    let count = 0;
    const currPic = document.querySelector('.show');
    const allImg = document.querySelectorAll('img');
    const dataId = parseInt(currPic.dataset.id);

    const currNum = document.querySelector('.number > .show');
    const numberDataId = parseInt(currNum.dataset.id);

    allImg.forEach(() => {
        count++;
    })
    return {currPic,currNum,dataId,numberDataId,count};
}

function changingImage(count,previousDataId,changeDataId,currPic,currNum){
    if(previousDataId === 1 && previousDataId > changeDataId){
        const showPic = document.querySelector(`img[data-id="${count}"]`);
        showPic.classList.remove('hide');
        showPic.classList.add('show');
        currPic.classList.remove('show');
        currPic.classList.add('hide');

        const showNum = document.querySelector(`.number>div[data-id="${count}"]`);
        showNum.classList.remove('hide');
        showNum.classList.add('show');
        currNum.classList.remove('show');
        currNum.classList.add('hide');
    }
    else if (previousDataId === count && changeDataId > previousDataId){
        const showPic = document.querySelector(`img[data-id="${dataId+1}"]`);
        showPic.classList.remove('hide');
        showPic.classList.add('show');
        currPic.classList.remove('show');
        currPic.classList.add('hide');

        const showNum = document.querySelector(`.number>div[data-id="${dataId+1}"]`);
        showNum.classList.remove('hide');
        showNum.classList.add('show');
        currNum.classList.remove('show');
        currNum.classList.add('hide');        
    }
}

leftBtn.addEventListener('click', () =>{
    const currentImage =  gettingCurrentImage();

    const count = currentImage.count;
    const previousDataId = currentImage.dataId;
    let changeDataId = previousDataId + 1;
    const currPic = currentImage.currPic;
    const currNum = currentImage.currNum;

    changingImage(count,previousDataId,changeDataId,currPic,currNum);

    gettingCurrentImage.count = 0;
})

//rightBtn.addEventListener('click', slide);

setInterval(slide,2000);