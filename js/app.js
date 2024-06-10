
const uri = '../js/data.json'


async function getData(){
    
    const response = await fetch(uri)
    const data = await response.json();

    for (let index = 0; index < data.results.length; index++) {
        console.log(data.results[index].title);  
    }

    data.results.forEach(element => {
        console.log(element);
        
    });

    console.log(data.results);
    console.log(data.status);

}

getData()
