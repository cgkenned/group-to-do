let ul = document.querySelector('#to-do-list');

let done = document.querySelector('#completed-list');

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

  span.addEventListener('click', removeLi);

  span.innerText = input;
  ul.appendChild(li);
}

const completedArray = [];

function removeLi(e) {
  completedArray.push(e.target.innerText);
  e.path[0].style.textDecoration = 'line-through';
  e.path[1].append(' Completed Task');
  e.path[1].children[0].checked = true;
  setTimeout(() => {
    e.target.remove();
  }, 3000);

  let li = document.createElement('li');
  for (i = 0; i < completedArray.length; i++) {
    li.innerText = completedArray[i];
    done.appendChild(li);
  }
}

btn.addEventListener('click', function () {
  let inputElement = document.querySelector('#inputBox');
  let input = inputElement.value;
  addToDo(input);
  inputElement.value = '';
});
