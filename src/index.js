let btn = document.getElementById('button');
console.log({btn})

btn.addEventListener("click", function() {
    if(btn.classList.contains("is-primary")) {
        button.classList.replace("is-primary", "is-warning")
    } else {
        button.classList.replace("is-warning", "is-primary")
    }
    
});

let input = document.querySelector('#input');
let text = document.querySelector('#reverse-text');

input.addEventListener('input', function() {
    text.innerHTML = input.value.split('').reverse().join('')
});