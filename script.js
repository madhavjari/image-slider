const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

leftBtn.addEventListener('click', () =>{
    let count = 0;
    const currPic = document.querySelector('.images > .show');
    const allImg = document.querySelectorAll('img');
    const dataId = parseInt(currPic.dataset.id);

    const currNum = document.querySelector('.number > .show');
    const numberDataId = parseInt(currNum.dataset.id);

    allImg.forEach(image => {
        count++;
    })
    if(dataId === 1 && numberDataId === 1){
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
    else{
        const showPic = document.querySelector(`img[data-id="${dataId-1}"]`)
        showPic.classList.remove('hide');
        showPic.classList.add('show');
        currPic.classList.remove('show');
        currPic.classList.add('hide');

        const showNum = document.querySelector(`.number>div[data-id="${dataId-1}"]`);
        showNum.classList.remove('hide');
        showNum.classList.add('show');
        currNum.classList.remove('show');
        currNum.classList.add('hide');
    }
    count = 0;
})

rightBtn.addEventListener('click', () =>{
    let count = 0;
    const currPic = document.querySelector('.show');
    const allImg = document.querySelectorAll('img');
    const dataId = parseInt(currPic.dataset.id);

    const currNum = document.querySelector('.number > .show');
    const numberDataId = parseInt(currNum.dataset.id);

    allImg.forEach(() => {
        count++;
    })
    if(dataId === count && numberDataId === count){
        const showPic = document.querySelector(`img[data-id="1"]`);
        showPic.classList.remove('hide');
        showPic.classList.add('show');
        currPic.classList.remove('show');
        currPic.classList.add('hide');

        const showNum = document.querySelector(`.number>div[data-id="1"]`);
        showNum.classList.remove('hide');
        showNum.classList.add('show');
        currNum.classList.remove('show');
        currNum.classList.add('hide');
    }
    else{
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
    count = 0;
})