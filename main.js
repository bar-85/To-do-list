const form1 = document.querySelector('.form1');
const ul = document.querySelector('ul');
const itemNumber = document.querySelector('h2 span');
const itemList = document.getElementsByClassName('task');
const input = document.querySelector('.input1');
const input2 = document.querySelector('.input2')



const removeTask = (e) => {
 e.target.parentNode.remove();
 itemNumber.textContent = itemList.length;
}

const lineThrough = (e) => {
    e.target.parentNode.style.textDecoration = 'line-through red'
}


const addLi = (e) => {
 e.preventDefault()
 const titleTask = input.value;
 if (titleTask === "") return;
 const task = document.createElement('li');
 task.className = 'task';
 task.innerHTML = '<button class= "btn1">❌</button>' + '<button class= "btn2">✅</button>' + titleTask 
 ul.appendChild(task);
 input.value = "";
 itemNumber.textContent = itemList.length;
 task.querySelector('.btn1').addEventListener('click', removeTask);
 task.querySelector('.btn2').addEventListener('click', lineThrough)

}

form1.addEventListener('submit', addLi)





   




