document.addEventListener('DOMContentLoaded', function () {
    let widthOptions = document.querySelectorAll('#width input');
    let genderOptions = document.querySelectorAll('#gender input');
    let sizeOptions = document.querySelectorAll('#size input');
    let selectOptions = document.querySelector('.product-form select');
    let widthSelected = document.querySelector('#width input:checked');
    let genderSelected = document.querySelector('#gender input:checked');
    let clickedOption = widthSelected.id + '_' + genderSelected.id;
    let buttonPrice = document.getElementById('button-price');
    let priceCurrent = document.querySelector('.price .current');
    let priceCompare = document.querySelector('.price .compare');
    let priceDiscount = document.querySelector('.price .discount span');

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.1,
        spaceBetween: 11,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    sizeOptions.forEach(sizeOption => {
        sizeOption.nextElementSibling.classList.remove('show');

        if (sizeOption.dataset.option == clickedOption) {
            sizeOption.nextElementSibling.classList.add('show');
        }

        sizeOption.addEventListener('click', function () {
            selectOptions.value = this.id;
            let selectedOption = document.querySelector('.product-form select option:checked');
            let discountValue = 100 - ((selectedOption.dataset.price * 100) / selectedOption.dataset.compare);
            buttonPrice.textContent = '$' + selectedOption.dataset.price;
            priceCurrent.textContent = '$' + selectedOption.dataset.price;
            priceCompare.textContent = '$' + selectedOption.dataset.compare;
            priceDiscount.textContent = discountValue.toFixed(0);
        });
    });

    widthOptions.forEach(widthOption => {

        widthOption.addEventListener('click', function () {
            let widthSelected = this.id;
            let genderSelected = document.querySelector('#gender input:checked');
            let sizeSelected = document.querySelector('#size input:checked');
            let clickedOption = widthSelected + '_' + genderSelected.id;

            sizeOptions.forEach(sizeOption => {
                sizeOption.nextElementSibling.classList.remove('show');

                if (sizeOption.dataset.option == clickedOption) {
                    sizeOption.nextElementSibling.classList.add('show');
                    let firstOption = document.querySelector('[data-option="' + clickedOption + '"]');
                    firstOption.checked = true;
                    selectOptions.value = firstOption.id;
                    let selectedOption = document.querySelector('.product-form select option:checked');
                    let discountValue = 100 - ((selectedOption.dataset.price * 100) / selectedOption.dataset.compare);
                    buttonPrice.textContent = '$' + selectedOption.dataset.price;
                    priceCurrent.textContent = '$' + selectedOption.dataset.price;
                    priceCompare.textContent = '$' + selectedOption.dataset.compare;
                    priceDiscount.textContent = discountValue.toFixed(0);
                }
            });
        });
    });

    genderOptions.forEach(genderOption => {

        genderOption.addEventListener('click', function () {
            let genderSelected = this.id;
            let widthSelected = document.querySelector('#width input:checked');
            let sizeSelected = document.querySelector('#size input:checked');
            let clickedOption = widthSelected.id + '_' + genderSelected;

            sizeOptions.forEach(sizeOption => {
                sizeOption.nextElementSibling.classList.remove('show');

                if (sizeOption.dataset.option == clickedOption) {
                    sizeOption.nextElementSibling.classList.add('show');
                    let firstOption = document.querySelector('[data-option="' + clickedOption + '"]');
                    firstOption.checked = true;
                    selectOptions.value = firstOption.id;
                    let selectedOption = document.querySelector('.product-form select option:checked');
                    let discountValue = 100 - ((selectedOption.dataset.price * 100) / selectedOption.dataset.compare);
                    buttonPrice.textContent = '$' + selectedOption.dataset.price;
                    priceCurrent.textContent = '$' + selectedOption.dataset.price;
                    priceCompare.textContent = '$' + selectedOption.dataset.compare;
                    priceDiscount.textContent = discountValue.toFixed(0);
                }
            });
        });
    });


}); 