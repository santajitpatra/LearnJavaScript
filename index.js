console.log("Hi, There");

// right way to get the data promises by async function
async function getData() {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(await data.json());
}
getData();

// 2nd way to get the data (wrong way)
fetch("https://jsonplaceholder.typicode.com/posts").then((data) =>{
    console.log(data);
} ).catch((error) => {
    console.log(error);
})