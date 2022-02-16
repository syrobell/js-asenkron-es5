function getData(data){ 
    return new Promise(function(resolve,reject){
        setTimeout(function(){

            if(typeof data === "string"){
                //Olumlu
                resolve(data);
            }
            else{
                // Olumsuz
                reject(new Error("Lütfen girdiğiniz değeri kontrol ediniz"));
            }
        },5000);
    });
}

getData("Merhaba")
.then(response => console.log("Gelen Değer "+ response))
.catch(err => console.error(err));

