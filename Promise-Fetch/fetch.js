function getTextFile(){
    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.error(err));    
};
function getJsonFile(){
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

}
// getTextFile();
// getJsonFile();
getAPI();

function getAPI(){
    fetch("http://api.exchangeratesapi.io/v1/latest?access_key=d4631b779503c5f6823188e12ea00ffa")
    .then(response => response.json())
    .then(data => console.log(data.rates.TRY))
    .catch(err => console.error(err));
}