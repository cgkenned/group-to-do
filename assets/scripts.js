let ul = document.querySelector('#to-do-list');

let btn = document.querySelector('.addItem');

let listItems = ul.children;

function addToDo(input) {
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.value = 'false';

    li.appendChild(checkbox);
    let span = document.createElement('span');
    li.appendChild(span);

    span.innerText = input;
    ul.appendChild(li);
}

function removeItem() {
    for (i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', function (event) {
            event.currentTarget.style.textDecoration = 'line-through';
            setTimeout(() => { listItems[i].remove(); }, 1000);
        });
    }
}

btn.addEventListener('click', function () {
    let inputElement = document.querySelector('#inputBox');
    let input = inputElement.value;
    addToDo(input);
    inputElement.value = '';
});

ul.addEventListener('mouseenter', removeItem);