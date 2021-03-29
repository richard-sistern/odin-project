// Find the ID for container
const container = document.querySelector('#container');

// Create new container.content div
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

// Create new container.content.p tag
const para = document.createElement('p');
para.style.color = 'Red';
para.textContent = "Hey I'm Red!";
content.appendChild(para);

// Create new container.content.h3 tag
const blueHeader = document.createElement('h3');
blueHeader.style.color = 'Blue';
blueHeader.textContent = "I'm a blue h3!";
content.appendChild(blueHeader);

// Create new container.part3 div
const part3 = document.createElement('div');
part3.style.backgroundColor = 'Pink';
part3.style.border = '2px solid black';

// Create new container.part3.h1 tag
const part3Header = document.createElement('h1');
part3Header.textContent = "I'm in a div";
part3.appendChild(part3Header);

// Create new container.part3.p tag
const part3Para = document.createElement('p');
part3Para.textContent = "ME TOO!";
part3.appendChild(part3Para);

// Apply part3 to container
container.appendChild(part3);

// Event method 3
const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e) {
    e.target.style.background = 'Blue';
});