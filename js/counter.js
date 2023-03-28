
window.addEventListener('click', function(evt){

    let counter; 

    if((evt.target.dataset.action === 'plus') || (evt.target.dataset.action === 'minus')){

        const counterWrapper = evt.target.closest('.counter-wrapper')
        counter = counterWrapper.querySelector('[data-counter]')
    }


    if(evt.target.dataset.action === 'plus'){

        counter.innerText = ++counter.innerText;

    } 

    if(evt.target.dataset.action === 'minus') {

        if (Number(counter.innerText) > 1) {

            counter.innerText = --counter.innerText;

        } else {

            counter.innerText = 1;

        }
    }
})