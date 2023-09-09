const display = document.getElementById("demo");
async function fetchData(){
    const response = await fetch("data.txt");
    const data = await response.json();
    console.log(data.name);
    console.log(data);
    display.innerHTML = data;
}
fetchData();