async function fetchData()
{
    const response = await fetch('https://catfact.ninja/fact');

    const data = await response.json();

    console.log(data);
    
    return data;

}

async function dispOnPage()
{

    
    const info = await fetchData()

    const container = document.getElementById('data-container');
    setTimeout(()=>{
    let htmlEle = `<div>${info.fact}</div>`;

    container.innerHTML = htmlEle;
},2000)
}


dispOnPage();