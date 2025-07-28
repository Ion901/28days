// let list = document.createElement('ul');
// let addBtn = document.createElement('button');
// addBtn.textContent = "Adauga element";
// addBtn.addEventListener('click', addElement);

// let deleteBtn = document.createElement('button');
// deleteBtn.textContent = "Sterge element";
// deleteBtn.addEventListener('click', deleteElement)

// document.querySelector('.dom-manipulation').append(addBtn, deleteBtn);
// function addElement() {
//     let elements = document.createElement('li');
//     list.appendChild(elements);
//     document.querySelector('.dom-manipulation').append(list);
// }

// function deleteElement() {
//     let lastElement = list.lastChild;
//     list.remove(lastElement);
// }
// ------------------------Add/delete list elements in --------------------


// async function getData() {
//     let url = 'https://jsonplaceholder.typicode.com/users';
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Response status'.response.status)
//         }
//         const json = await response.json();
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// import fetch from 'node-fetch';
// import fs from 'fs/promises';

// const response = fetch('https://jsonplaceholder.typicode.com/posts/1');
// response.then(result => result.json())
//     .then(resuult => console.log(resuult))
//         .catch(error => console.log(error))


(async function () {
    const url = "https://w.wallhaven.cc/full/5y/wallhaven-5yd6d5.png";
    try {
        const initialResponse = await fetch(url);
        if (!initialResponse.ok) {
            throw new Error('Response status'. initialResponse.status)
        }
        const blobq = await initialResponse.blob();
        const objectURL = await URL.createObjectURL(blobq);
        
        
    } catch (error) {
        console.log(error);
    }
})();