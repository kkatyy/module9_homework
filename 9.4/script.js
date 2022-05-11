const result = document.querySelector('.output');

const btn = document.querySelector('.btn');


btn.addEventListener('click', () => {
    const width = +document.querySelector('.input-width').value;
    const height = +document.querySelector('.input-height').value;

    if (height < 100 || height > 300 || width < 100 || width > 300) {
        result.innerHTML = "<p>Одно из чисел вне диапазона от 100 до 300</p>";
    } else {
        fetch(`https://picsum.photos/${width}/${height}`)

        .then((response) => {
            result.innerHTML = `
            <div class="card">
                <img src="${response.url}">
            </div>`;
        })
        .catch(() => {console.log('error')});
    }

})