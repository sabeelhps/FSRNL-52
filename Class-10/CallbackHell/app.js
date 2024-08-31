// function downloadImage(url, downloaded) {
//     console.log('Starting to download the image');
//     setTimeout(() => {
//         const fileName = url.split('/').pop();
//         downloaded(fileName);
//     }, 2000);
// }

// function compressImage(fileName, compressed) {
//     console.log('Starting to compress the file');
//     setTimeout(() => {
//         const compressedFile = fileName.split('.')[0] + '.zip';
//         compressed(compressedFile);
//     }, 1000);
// }

const IMAGE_URL = 'http://facebook.com/download/image.jpg';

// downloadImage(IMAGE_URL, function (fileName) {
//     console.log(`File with name ${fileName} downloaded successfully`);
//     compressImage(fileName, function (compressedFile) {
//         console.log(`File compression completed for the file : ${compressedFile}`);
//     });
// });

// --------------------------Better code using promises-------------


function downloadImage(url) {
    console.log('Starting to download the image');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fileName = url.split('/').pop();
            if (!url.startsWith('ws')) {
                reject(new Error('Invalid URL'));
            }
            resolve(fileName);
        }, 2000);
    })
}

function compressImage(fileName) {
    console.log('Starting to compress the file');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const compressedFile = fileName.split('.')[0] + '.zip';
            resolve(compressedFile);
        }, 1000);
    })
}


downloadImage(IMAGE_URL)
    .then((fileName) => {
        console.log(`File downloaded successfully`);
        return compressImage(fileName);
    })
    .then((compressedFile) => {
        console.log(`file compressed successfully:  ${compressedFile}`);
    })
    .catch((err) => {
        console.log('Inside Reject');
        console.log(err.message);
    })


