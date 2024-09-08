const h1 = document.querySelector('h1');
const btn = document.querySelector('button');
const divs = document.querySelectorAll('section div');
const textArea = document.querySelector('textarea');
const form = document.querySelector('form');
const para = document.querySelector('p');


h1.onclick = function () {
    console.log('clicked');
}

function scream() {
    console.log('scream........');
}

function shout() {
    console.log('shout.........');
}

// btn.onclick = scream; 
// btn.onclick = shout; 

btn.addEventListener('click', scream);
btn.addEventListener('click', shout);


// -------------------Mouse Events---------------

for (let div of divs) {
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'lightcoral';
    });
    div.addEventListener('mouseleave', () => {
        div.style.backgroundColor = 'aqua';
    });
}


//-----------------Keyboard Events

textArea.addEventListener('keypress', (event) => {
    // console.log(event);
    if (event.which === 13) {
        console.log(textArea.value);
    }
});


// ---------------Form Events--------------

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('form submitted'); 
    console.log(form.elements.username.value);
    console.log(form.elements.password.value);
});


// ------------------- copy ------------


para.addEventListener('copy', () => {
    console.log("Please don't copy from here!!!");
});





