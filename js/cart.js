const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function(evt){

    if(evt.target.hasAttribute('data-cart')){

        const card = evt.target.closest('.card');

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector(".price__currency").innerText,
            counter: card.querySelector('[data-counter]').innerText
        };
        const cartItemHTML = `							<div class="cart-item" data-id="02">
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img src="img/roll/california-tempura.jpg" alt="">
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${productInfo.title}</div>
                <div class="cart-item__weight">6 шт. / 205г.</div>

                <!-- cart-item__details -->
                <div class="cart-item__details">

                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">1</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__currency">250 ₽</div>
                    </div>

                </div>

            </div>
        </div>
    </div>`;

    
    }
})