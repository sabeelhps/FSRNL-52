function fun() {
    console.log('Inside Fun');
}

console.log('START');

function delay() {
    const curr = new Date().getTime(); 
    const endTime = curr + 3000;
    while (new Date().getTime() < endTime) { }
    fun();
}

delay();

console.log('END');