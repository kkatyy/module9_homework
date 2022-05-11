const result = document.querySelector('.output');

const btn = document.querySelector('.btn');

let data = localStorage.getItem('savedInfo');

function displayResult(data) {
    let cards = "";
    if (data) {
        data.forEach((item) => {
            const cardBlock = `
            <div class="card">
                <img src="${item.download_url}" class="card-image">
            </div>`;
            cards += cardBlock;
        });
        result.innerHTML = cards;
    }
}

btn.addEventListener('click', () => {
    const inputNumber = +document.querySelector('.input-number').value;
    const inputLimit = +document.querySelector('.input-limit').value;

    if (!(Number.isInteger(inputNumber)) && !(Number.isInteger(inputLimit))) {
        result.innerHTML = "<p>Номер страницы и лимит вне диапазона от 1 до 10 либо не являются целыми числами</p>";
     } else if ((inputNumber < 1 || inputNumber > 10) && (inputLimit < 1 || inputLimit > 10)) {
        result.innerHTML = "<p>Номер страницы и лимит вне диапазона от 1 до 10</p>";
    } else if ( !(Number.isInteger(inputNumber)) || (inputNumber < 1 || inputNumber > 10)) {
                   result.innerHTML = "<p>Номер страницы вне диапазона от 1 до 10 либо не является целым числом</p>";
        } else if (!(Number.isInteger(inputLimit)) || (inputLimit < 1 || inputLimit > 10)) {
                            result.innerHTML = "<p>Лимит вне диапазона от 1 до 10 либо не является целым числом</p>";
            } else {
                fetch(`https://picsum.photos/v2/list?page=${inputNumber}&limit=${inputLimit}`)

                    .then((response) => {
                        return response.json();
                    })

                    .then((data) => {
                        localStorage.setItem('savedInfo', JSON.stringify(data));
                        displayResult(data);
                                        })

                    .catch(() => { console.log('error') });
            }
       })

displayResult(JSON.parse(data));