const texts = document.querySelectorAll('.mems__text');
const radios = document.querySelectorAll('.mem-slider__btns input');

radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        texts.forEach(text => text.style.display = 'none');
        texts[index].style.display = 'block';
    });
});

const checkedIndex = Array.from(radios).findIndex(radio => radio.checked);
texts.forEach(text => text.style.display = 'none');
texts[checkedIndex].style.display = 'block';
