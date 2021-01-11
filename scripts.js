const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const pictures = document.querySelector('#carousel');
const navvies = document.querySelector('.dot-holder');

currentViews = [true, false, false, false, false, false];

leftButton.addEventListener('click', () => shiftPic('left'));
rightButton.addEventListener('click', () => shiftPic('right'));

navvies.childNodes.forEach(node => node.addEventListener('click', setPic));

let autoShift = window.setInterval(() => shiftPic('right'), 5000);

function shiftPic(direction) {

    //reset auto-timer

    clearInterval(autoShift);
    autoShift = window.setInterval(() => shiftPic('right'), 5000);

    for (let i = 0, n = currentViews.length; i < n; i++) {
        if (currentViews[i] && direction === 'left') {
            currentViews[i] = false;
            pictures.children[i].classList.add('hide');
            navvies.children[i].classList.remove('current');

            if (i === 0) {
                currentViews[n - 1] = true;
                pictures.children[n - 1].classList.remove('hide');
                navvies.children[n - 1].classList.add('current');
                break;

            } else {
                currentViews[i - 1] = true;
                pictures.children[i - 1].classList.remove('hide');
                navvies.children[i - 1].classList.add('current');
                break;
            }        
        }

        else if (currentViews[i] && direction === 'right') {
            currentViews[i] = false;
            pictures.children[i].classList.add('hide');
            navvies.children[i].classList.remove('current');
            if (i === (n - 1)) {
                currentViews[0] = true;
                pictures.children[0].classList.remove('hide');
                navvies.children[0].classList.add('current');
                break;
            } else {
                currentViews[i + 1] = true;
                pictures.children[i + 1].classList.remove('hide');
                navvies.children[i + 1].classList.add('current');
                break;
            }  
        }
    }
}

function setPic(e) {

    //reset auto-timer

    clearInterval(autoShift);
    autoShift = window.setInterval(() => shiftPic('right'), 5000);



    for (let i = 0, n = navvies.children.length; i < n; i++) {

            if (navvies.children[i] === e.target) {
                let curI = currentViews.indexOf(true);
                currentViews[curI] = false;
                pictures.children[curI].classList.add('hide');
                navvies.children[curI].classList.remove('current');

                currentViews[i] = true;
                pictures.children[i].classList.remove('hide');
                navvies.children[i].classList.add('current');
                break;
            }

        }
    
}

