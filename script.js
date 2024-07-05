document.addEventListener('DOMContentLoaded', (event) => {
    const counterElement = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const addToCartButton = document.getElementById('add-to-cart-btn');
    const minusButton = document.getElementById('minus');

    plusButton.addEventListener('click', () => {
        let currentValue = parseInt(counterElement.innerText);
        counterElement.innerText = currentValue + 1;
    });

    addToCartButton.addEventListener('click', () => {
        let currentValue = parseInt(counterElement.innerText);
        counterElement.innerText = currentValue + 1;
    });

    minusButton.addEventListener('click', () => {
        let currentValue = parseInt(counterElement.innerText);
        if (currentValue > 0) {
            counterElement.innerText = currentValue - 1;
        }
    });
});



document.addEventListener('DOMContentLoaded', (event) => {
    const plusButton = document.getElementById('plus-description');
    const minusButton = document.getElementById('minus-description');
    const descriptionParagraph = document.getElementById('description-p');

    plusButton.addEventListener('click', () => {
        descriptionParagraph.style.display = 'block';
        plusButton.style.display = 'none';
        minusButton.style.display = 'block';
    });

    minusButton.addEventListener('click', () => {
        descriptionParagraph.style.display = 'none';
        plusButton.style.display = 'block';
        minusButton.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const plusButton = document.getElementById('plus-description1');
    const minusButton = document.getElementById('minus-description1');
    const descriptionParagraph = document.getElementById('how-to-use');

    plusButton.addEventListener('click', () => {
        descriptionParagraph.style.display = 'block';
        plusButton.style.display = 'none';
        minusButton.style.display = 'block';
    });

    minusButton.addEventListener('click', () => {
        descriptionParagraph.style.display = 'none';
        plusButton.style.display = 'block';
        minusButton.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const plusButton = document.getElementById('plus-description2');
    const minusButton = document.getElementById('minus-description2');
    const descriptionParagraph = document.getElementById('ingredients');

    plusButton.addEventListener('click', () => {
        descriptionParagraph.style.display = 'block';
        plusButton.style.display = 'none';
        minusButton.style.display = 'block';
    });

    minusButton.addEventListener('click', () => {
        descriptionParagraph.style.display = 'none';
        plusButton.style.display = 'block';
        minusButton.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const plusButton = document.getElementById('plus-description3');
    const minusButton = document.getElementById('minus-description3');
    const descriptionParagraph = document.getElementById('shipping-policy');

    plusButton.addEventListener('click', () => {
        descriptionParagraph.style.display = 'block';
        plusButton.style.display = 'none';
        minusButton.style.display = 'block';
    });

    minusButton.addEventListener('click', () => {
        descriptionParagraph.style.display = 'none';
        plusButton.style.display = 'block';
        minusButton.style.display = 'none';
    });
});

