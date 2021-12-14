let ul = document.querySelector('#to-do-list');

let btn = document.querySelector('.addItem');

let listItems = document.querySelectorAll('li');

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

btn.addEventListener('click', function() {
    let inputElement = document.querySelector('#inputBox');
    let input = inputElement.value;
    addToDo(input);
    inputElement.value = '';
});


let i;
for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function(event) {
        event.currentTarget
        this.style.display = 'none';
    });
}