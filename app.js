document.getElementById("btn").addEventListener("click",function(){

    // XMLHtppRequest

    const xhr = new XMLHttpRequest();

    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById("ajax").textContent = this.responseText;
        }
    }

    xhr.open("GET","example.txt",true);

    xhr.send();



})