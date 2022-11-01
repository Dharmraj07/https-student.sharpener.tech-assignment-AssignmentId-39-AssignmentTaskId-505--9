const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const myForm=document.querySelector('#my-form');
const userList=document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();

    let li=document.createElement('li');
    // add a text node to the element
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    userList.appendChild(li);
}