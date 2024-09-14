
// async keyword converts the function to a promise returning function
// If the function successfully returns the value the promise get resolved with that value

// async function add(x, y) {
//     if (x + y === 5) {
//         throw new Error('Result cannot be 5!');
//     }
//     return x + y;
// }


// console.log('START')

// async function fetchProducts() {
//     try {
//         console.log('Starting to fetch')
//         const res = await fetch('https://fakestoreapi.com/products');
//         console.log('Fetch complete');
//         const data = await res.json();
//         console.log('Data parsing is complete');
//         console.log(data);
//         console.log('Function ends');
//     }
//     catch (e) {
//         console.log(e);   
//     }
// }

// fetchProducts();


// console.log('After the fetchProducts....')
// console.log('After the fetchProducts....')
// console.log('After the fetchProducts....')
// console.log('After the fetchProducts....')
// console.log('After the fetchProducts....')
// console.log('After the fetchProducts....')
// console.log('After the fetchProducts....')
// console.log('After the fetchProducts....')
// console.log('After the fetchProducts....')
// console.log('After the fetchProducts....')
// console.log('After the fetchProducts....')

// console.log('END');

// -------------------------------------------------

// ------------------------Fetch all the product with Ids in the `productIds` Array. 

// List of productIds = [3,4,5,10, 11, 12, 20];
// https://fakestoreapi.com/products/4


async function fetchProduct(productId) {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await res.json();
    return product;
}


async function main() {
    const productIds = [3, 4, 5, 8, 9, 11];
    console.time('timer')
    // for (let id of productIds) {
    //     const product = await fetchProduct(id);
    //     console.log(product);
    // }
    
    // Optimsed code
    const listOfPromise = [];
    for (let id of productIds) {
        const productPromise = fetchProduct(id);
        listOfPromise.push(productPromise);
    }

    const products = await Promise.all(listOfPromise);
    console.log(products);

    console.timeEnd('timer')
}

main();


