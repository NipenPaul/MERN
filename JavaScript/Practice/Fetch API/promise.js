const output = document.getElementById('demo');

async function getData(){
    // fetch("http://127.0.0.1:5500/JavaScript/Practice/Fetch%20API/bigdata.txt")
    // .then((res) => res.text())
    // .then((data) =>{
    //     output.innerText = data;
    // });

    const res = await fetch("http://127.0.0.1:5500/JavaScript/Practice/Fetch%20API/bigdata.txt");
    const data = await res.text();
    output.innerText = data;
}