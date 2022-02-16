document.getElementById("phone-increase").addEventListener("click", function(){
    productCalculation("phone", true);
});
document.getElementById("phone-decrease").addEventListener("click", function(){
    productCalculation("phone", false);
});
function productCalculation(productName, isIncreasing){
    const productQuantity = document.getElementById(productName+"-quantity");
    let productCount = parseInt(productQuantity.value);
    if(isIncreasing){
        productCount++;
    }
    else{
        if(productCount >= 0){
            productCount--;
        }
    }
    productQuantity.value = productCount;
    const productTotal = document.getElementById(productName+"-total");
    const price = 100;
    productTotal.innerText = productQuantity.value*price;
    finalCalculation();
}

function finalCalculation(){
    const phoneTotal = document.getElementById("phone-total").innerText;
    const phoneTotalNumber = parseInt(phoneTotal);
    const subtotal = document.getElementById("subtotal");
    subtotal.innerText = phoneTotalNumber;
    const tax = document.getElementById("tax");
    tax.innerText = parseInt(subtotal.innerText)*0.2;
    const total = document.getElementById("total");
    total.innerText = parseFloat(tax.innerText)+ parseFloat(subtotal.innerText);
} 