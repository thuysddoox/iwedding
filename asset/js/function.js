import { appendFile } from 'fs';
const wishForm = document.querySelector('#wish-form');
const emailWishForm = document.querySelector('#wish-form .email');
const fullnameWishForm = document.querySelector('#wish-form .fullname');
const contentWishForm = document.querySelector('#wish-form .wish-content');
const sendWish = document.querySelector('button.send-wishes');
const sucessWishForm = document.querySelector('#wish-form #success');
const errorWishForm = document.querySelector('#wish-form #success');

sendWish.addEventListener("click", (e) => {
  e.preventDefault();
  console.log('ấdf')
  errorWishForm.classList.add('d-block')
  appendFile('wishes.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
})