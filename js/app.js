finalCalculation();
document.getElementById("phone-increase").addEventListener("click", function(){
    productCalculation("phone", true , 999);
});
document.getElementById("phone-decrease").addEventListener("click", function(){
    productCalculation("phone", false , 999);
});
document.getElementById("macbook-decrease").addEventListener("click", function(){
    productCalculation("macbook", false, 1299);
});
document.getElementById("macbook-increase").addEventListener("click", function(){
    productCalculation("macbook", true, 1299);
});
document.getElementById("flower-decrease").addEventListener("click", function(){
    productCalculation("flower", false ,49);
});
document.getElementById("flower-increase").addEventListener("click", function(){
    productCalculation("flower", true, 49);
});

function productCalculation(productName, isIncreasing ,price){
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
    productTotal.innerText = productQuantity.value*price;
    finalCalculation();
}

function finalCalculation(){
    const phoneTotal = document.getElementById("phone-total").innerText;
    const phoneTotalNumber = parseInt(phoneTotal);
    const macbookTotal = document.getElementById("macbook-total").innerText;
    const macbookTotalNumber = parseInt(macbookTotal);
    const flowerTotal = document.getElementById("flower-total").innerText;
    const flowerTotalNumber = parseInt(flowerTotal);
    const subtotal = document.getElementById("subtotal");
    subtotal.innerText = phoneTotalNumber + macbookTotalNumber + flowerTotalNumber;
    const tax = document.getElementById("tax");
    tax.innerText = parseInt(parseInt(subtotal.innerText)*0.2);
    const total = document.getElementById("total");
    total.innerText = parseFloat(tax.innerText) + parseFloat(subtotal.innerText);
}