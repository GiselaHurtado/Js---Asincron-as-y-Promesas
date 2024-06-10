

const uri = '../js/data.json'


async function getData(){
    try {

    }catch (error){
        
    }


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

    for (const property in person) {
        const sentence = `Sentence = ${property} = ${person[property]}`
        console.log(sentence);
    }
}

