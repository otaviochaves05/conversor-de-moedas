const currencys = [
    { name: "real", surname: "BRL", symbol: "R$", rates: { real: 1.00, dolar: 0.20, euro: 0.18, yuan: 1.42, peso: 171.73 } },
    { name: "dolar", surname: "USD", symbol: "$", rates: { real: 5.10, dolar: 1.00, euro: 0.93, yuan: 7.24, peso: 876.14 } },
    { name: "euro", surname: "EUR", symbol: "€", rates: { real: 6.40, dolar: 1.08, euro: 1.00, yuan: 7.79, peso: 943.54 } },
    { name: "yuan", surname: "CNY", symbol: "¥", rates: { real: 0.70, dolar: 0.14, euro: 0.13, yuan: 1.00, peso: 121.05 } },
    { name: "peso", surname: "ARS", symbol: "$", rates: { real: 0.0058, dolar: 0.0011, euro: 0.0011, yuan: 0.0083, peso: 1.00 } }
]

let cotacaoOrigem = "";
let cotacaoDestino = "";

const valorInput = document.querySelector("#value-to-convert"); 
const cotacaoOrigemInput = document.querySelector("#currency-1");
const cotacaoDestinoInput = document.querySelector("#currency-2");

function changeSelect() {
    cotacaoOrigem = cotacaoOrigemInput.value;
    cotacaoDestino = cotacaoDestinoInput.value;
}


function convert() {

    let valorOrigem = parseFloat(valorInput.value);


    for (let i = 0; i < currencys.length; i++) {

        // console.log(currencys[i].rates[cotacaoDestino]);

        if (currencys[i].name == cotacaoOrigem) {

            let valorDestino =  parseFloat((currencys[i].rates[cotacaoDestino]))
            let result = valorOrigem * valorDestino;  
            
            console.log(result);

            mostrarResultado(result)
        }
        
    }
    
}

function mostrarResultado(result){
    document.querySelector("#result").innerText = "Resultado: " + result;
}

window.addEventListener("load", () => {
    let button = document.querySelector("#confirm")
    button.addEventListener("click", () => { convert() });
});





// for (let i = 0; i <= currencys.length; i++) {
//     if (currencys[i].name == currency1Value) {

//     }


// }

