document.getElementById("num-btn").addEventListener('click', function () {
    for (let i = 1; i <= 10; i++) {
        setTimeout(() => {
            document.getElementById('output').innerHTML += `<li style="list-style-type: none;">${i}</li>`;
        }, i * 1000)
    }
})

document.getElementById("reverse-btn").addEventListener('click',()=>{
    for (let i= 10; i>= 1; i--){
        setTimeout(()=>{
            const outputElement = document.getElementById('reverse-output');
            const listitem = document.createElement('li');
            listitem.style.listStyleType = 'none';
            listitem.textContent = i;
            outputElement.appendChild(listitem);
        }, (10 - i) * 1000)
    }
})