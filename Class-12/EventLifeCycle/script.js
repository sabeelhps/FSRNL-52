const grandParent = document.getElementById('grand-parent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

const secondSection = document.querySelector('section:nth-of-type(2)');
const divs = document.querySelectorAll('section:nth-of-type(2) div');

grandParent.addEventListener('click', () => {
    console.log('grand parent');
}, true);

parent.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('parent');
}, true);

child.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('child');
}, true);

// console.log(divs);

// divs[0].addEventListener('click', () => {
//     console.log(1);
// });

// divs[1].addEventListener('click', () => {
//     console.log(2);
// });

// divs[2].addEventListener('click', () => {
//     console.log(3);
// });

// divs[3].addEventListener('click', () => {
//     console.log(4);
// });

// for (const div of divs) {
//     div.addEventListener('click', () => {
//         console.log(div.innerText);
//     })
// }

// Time Complexity : constant
// Space Complexity: Increases
// Other Problems: Events not getting added to dynamic divs



// Better Code ------------- Event Delegation

secondSection.addEventListener('click', (event) => {
    if (event.target.nodeName === 'DIV') {
        console.log(event.target.innerText);
   }
});


