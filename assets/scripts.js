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
  checkbox.addEventListener('click', removeLi);

  span.innerText = input;
  ul.appendChild(li);
}

let completedArray = [];

function removeLi(e) {
  let target = e.currentTarget;
  while (target.tagName !== 'LI') {
    target = target.parentNode;
  }
  let currentLi = target;
  let span = currentLi.querySelector('span');
  completedArray.push(span.innerText);
  span.style.textDecoration = 'line-through';
  currentLi.append(' Completed Task');
  currentLi.querySelector('.checkbox').checked = true;

  setTimeout(() => {
    span.remove();
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
