document.getElementById("change").addEventListener("click",change);

function change(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET","http://api.exchangeratesapi.io/v1/latest?access_key=d4631b779503c5f6823188e12ea00ffa",true);

    xhr.onload = function(){
        if(this.status == 200){
            const response = JSON.parse(this.responseText);
            
            const rate = response.rates.TRY
            const amount = Number(document.getElementById("amount").value);

            let total = document.getElementById("tl");

            total.value = amount * rate;
            


        }
    }
    xhr.send();
}