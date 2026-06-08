const button = document.getElementById('my-button');
const head = document.getElementById('heading');
const button_add = document.getElementById('add-data');
const list = document.getElementById('my-list');
const textarea = document.getElementById('user-input');

button.addEventListener('click', () => {
    console.log("hello world");
    head.innerText = "Moi maailma";
});

button_add.addEventListener('click', () => {
    const item = document.createElement('li');
    item.innerText = textarea.value;
    list.appendChild(item);
    textarea.value = "";
});