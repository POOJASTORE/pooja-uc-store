let selectedPrice = "";
let selectedUC = "";
let orderID = "";


// Plan Select

function buyPlan(price, uc){

    selectedPrice = price;
    selectedUC = uc;

    orderID = "PUC" + Math.floor(10000 + Math.random()*90000);


    document.getElementById("planText").innerHTML =
    "Plan: ₹" + price +
    "<br>UC: " + uc + " UC" +
    "<br>Order ID: " + orderID;


    document.getElementById("status").innerHTML =
    "Order Status: Payment Pending";


    window.scrollTo({
        top:document.getElementById("orderBox").offsetTop,
        behavior:"smooth"
    });

}



// Copy UPI

function copyUPI(){

    navigator.clipboard.writeText("8279207685@apl");

    alert("UPI ID Copied");

}



// Send WhatsApp Order

function sendOrder(){


let uid = document.getElementById("uid").value;



if(selectedPrice==""){

alert("Please Select UC Plan");

return;

}



if(uid==""){

alert("Please Enter BGMI UID");

return;

}




let order = {

orderID:orderID,
price:selectedPrice,
uc:selectedUC,
uid:uid,
status:"Payment Pending"

};



localStorage.setItem(
"poojaOrder",
JSON.stringify(order)
);



let message =

`Hello POOJA UC STORE

Order ID: ${orderID}

Plan: ₹${selectedPrice}

UC: ${selectedUC}

BGMI UID: ${uid}


Payment Done.
I have paid on UPI ID 8279207685@apl.


Payment Screenshot Attached.


Please verify my payment and send my UC.

Thank You.`;


let whatsapp =

"https://wa.me/918279207685?text="

+ encodeURIComponent(message);



window.open(whatsapp,"_blank");



document.getElementById("status").innerHTML =
"Order Status: Payment Pending";

}
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e)=>{

e.preventDefault();

deferredPrompt = e;

document.getElementById("installBtn").style.display="block";

});


document.getElementById("installBtn").addEventListener("click",()=>{

deferredPrompt.prompt();

deferredPrompt=null;

});