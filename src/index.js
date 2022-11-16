"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function displayData(list) {
    let ul = document.createElement('ul');
    ul.style.paddingTop = '20px';
    ul.style.listStyle = 'bullet';
    list.quoteList.forEach(quote => {
        let li = document.createElement('li');
        li.style.padding = '10px';
        let p = document.createElement('p');
        p.textContent = quote.author;
        let q = document.createElement('q');
        q.textContent = quote.quote;
        li.appendChild(p);
        li.appendChild(q);
        ul.appendChild(li);
        console.log(quote.id);
    });
    document.getElementById('result-container').appendChild(ul);
}
document.getElementById('first-task-button').addEventListener('click', () => {
    let taskList = {};
    fetch('./quotes.json')
        .then(res => res.json())
        .then((data) => {
        taskList.quoteList = data.quotes.sort((a, b) => (a.author.toLowerCase() > b.author.toLowerCase()) ? 1 : (b.author.toLowerCase() > a.author.toLowerCase() ? -1 : 0));
        displayData(taskList);
    });
});
