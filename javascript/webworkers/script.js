const worker = new Worker('worker.js');
const sum_button = document.getElementById('sum-btn');
const color_button = document.getElementById('color-btn')

sum_button.addEventListener('click', () => {
    worker.postMessage("sum")
    worker.onmessage = function (message) {
        alert(`The sum is from worker: ${message.data}`);
    }

})

color_button.addEventListener('click', () => {
    if (document.body.style.backgroundColor !== 'red') {
        document.body.style.backgroundColor = 'red';
    } else {
        document.body.style.backgroundColor = 'white';
    }
});