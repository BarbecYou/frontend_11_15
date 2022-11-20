"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let results = document.getElementById('result-container');
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
    });
    document.getElementById('result-container').appendChild(ul);
}
// first task
document.getElementById('first-task-button').addEventListener('click', () => {
    let taskList = {};
    fetch('./quotes.json')
        .then(res => res.json())
        .then((data) => {
        taskList.quoteList = data.quotes.sort((a, b) => (a.author.toLowerCase() > b.author.toLowerCase()) ? 1 : (b.author.toLowerCase() > a.author.toLowerCase() ? -1 : 0));
        displayData(taskList);
    });
});
// second task
document.getElementById('second-task-button').addEventListener('click', () => {
    document.getElementById('result-container').innerHTML = '';
    let quotesListString = [];
    fetch('./quotes.json')
        .then(res => res.json())
        .then(data => {
        data.quotes.forEach((e) => {
            quotesListString.push(e.quote);
        });
    })
        .then(function () {
        let ol = document.createElement('ol');
        results.appendChild(ol);
        ol.style.paddingTop = '20px';
        quotesListString.forEach(s => {
            let li = document.createElement('li');
            let tempString = s.replace(/\bthe\b/g, '<span style="font-weight:bold;">the</span>');
            let tempString2 = tempString.replace(/\bThe\b/g, '<span style="font-weight:bold;">The</span>');
            li.innerHTML = tempString2;
            ol.appendChild(li);
        });
    });
});
// third task
document.getElementById('third-task-button').addEventListener('click', () => {
    results.innerHTML = '';
    let QuoteListInts = [];
    fetch('./quotes.json')
        .then(res => res.json())
        .then(data => {
        data.quotes.forEach((q) => {
            QuoteListInts.push(q.quote.length);
        });
    })
        .then(function () {
        let string = QuoteListInts.join(', ');
        let p = document.createElement('p');
        p.style.paddingTop = '20px';
        p.textContent = string.toString();
        results.appendChild(p);
    });
});
// fourth task
document.getElementById('fourth-task-button').addEventListener('click', () => {
    results.innerHTML = '';
    let givenAuthor = document.getElementById('givenAuthor').value;
    fetch('./quotes.json')
        .then(res => res.json())
        .then(data => {
        document.getElementById('resultQuoteAmount').value = data.quotes.filter((a) => a.author.toLowerCase().trim() == givenAuthor.toLowerCase().trim()).length;
    });
});
