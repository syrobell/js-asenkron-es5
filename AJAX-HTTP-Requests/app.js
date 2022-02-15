//Ajax, CallBack, HTTP Requests

class Requests{

    constructor(){
        this.xhr = new XMLHttpRequest();  
    }
    // Get Request 
    get(url,callback){
        this.xhr.open("GET",url); // Bağlantı Açıldı
        

        
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText); // Callback ile değeri çağıran fonksiyona gönderiyoruz
            }
            else{
                //Hata Durumu
                callback("Herhangi bir hata oluştu",null);
            }
        };

        this.xhr.send();
    }
    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json"); // Json verisi göndereceğimizi söyledik;

        this.xhr.onload = () =>{

            if(this.xhr.status === 201){
                // Başarılı Durum
                callback(null,this.xhr.responseText);
            }
            else{
                callback("Bir hata oluştu", null);
            }
        }
        this.xhr.send(JSON.stringify(data));



    }
    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json");
        
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("Put Request: Bir hata oluştu");
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    delete(url,data,callback){
        this.xhr.open("DELETE",url);
        this.xhr.setRequestHeader("Content-type","application/json");
        
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("Put Request: Bir hata oluştu");
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
}

const request = new Requests();

// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//     if(err === null){
//         // Başarılı
//         console.log(response);
//     }
//     else{
//         // Hata
//         console.log(err);
//     }
// });

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller Night"}, function(err,album){

//  if(err === null){
//     console.log(album);
//  }
//  else{
//     console.log(err);
//  }
// })

request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:1,title:"Infected Mushroom Becoming Insane"}, function(err,album){

 if(err === null){
    console.log(album);
 }
 else{
    console.log(err);
 }
})
request.delete("https://jsonplaceholder.typicode.com/albums/1", function(err,album){

    if(err === null){
       console.log(album);
    }
    else{
       console.log(err);
    }
})