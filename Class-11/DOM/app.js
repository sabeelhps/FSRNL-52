// const image = document.querySelector('img');

// const URL1 = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D";
// const URL2 = "https://plus.unsplash.com/premium_photo-1675805015392-28fd80c551ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D";

// let isTrue = true;

// function toggleImage() {
//     if (isTrue) {
//         image.setAttribute('src', URL1);
//     } else {
//         image.setAttribute('src', URL2);
//     }
//     isTrue = !isTrue;
// }

// setInterval(toggleImage, 1000);

const h1 = document.querySelector('h1');
const textInp = document.querySelector('input[type="text"]')

h1.onclick = function () {
    console.log('Heading clicked!');
}

textInp.onchange = function () {
    console.log('input changing')
}