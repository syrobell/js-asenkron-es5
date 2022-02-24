class Request {

    get(url){
        return new Promise((resolve, reject) =>{
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))

        })

        
    };
}

const request = new Request();
let albums;

request.get("https://jsonplaceholder.typicode.com/albums")
.then(data => {
    albums = data;
})
.catch(err => console.log(err));



setTimeout(() => {
    console.log(albums)
}, 5000);