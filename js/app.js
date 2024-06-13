const uri = '../js/data.json';

async function getData() {
    const response = await fetch(uri);
    const data = await response.json();

    const resultsBody = document.getElementById('resultsBody');
    data.results.forEach(result => {
        const row = `<tr><td>${result.title}</td><td>${result.priority}</td><td>${result.isDone ? 'Yes' : 'No'}</td></tr>`;
        resultsBody.innerHTML += row;
    });
}

getData();

