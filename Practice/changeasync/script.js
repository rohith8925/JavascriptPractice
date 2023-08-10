
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello, Async/Await');
        }, 2000); 
    });
}


function updateDOM(data) {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = `<h1>${data}</h1>`;
}


async function fetchDataAndDisplay() {
    try {
       
        const data = await fetchData();

        
        updateDOM(data);
    } catch (error) {
        
        console.error('Error fetching data:', error.message);
    }
}


fetchDataAndDisplay();
 