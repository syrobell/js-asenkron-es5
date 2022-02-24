// function getData(data){ 
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){

//             if(typeof data === "string"){
//                 //Olumlu
//                 resolve(data);
//             }
//             else{
//                 // Olumsuz
//                 reject(new Error("Lütfen girdiğiniz değeri kontrol ediniz"));
//             }
//         },5000);
//     });
// }

// getData("Merhaba")
// .then(response => console.log("Gelen Değer "+ response))
// .catch(err => console.error(err));

addTwo(number => {
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number+2);
            }
            else{
                reject(new Error("Lütfen bir sayı girin"));
            }
        },3000);
    });
});

addTwo(10)
.then(response =>{
    console.log(response);
    return response + 2;
}).then(response2 => console.log(response2))
.catch(err => console.error(err));