
let serial = 0;
//for first cart
document.getElementById('first-cart').addEventListener('click', function(){
    serial += 1;

    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;

    const totalPrice = parseInt(productPrice) * parseInt(productQuantity);

    displayData(productName,productPrice,productQuantity,totalPrice);

    document.getElementById('first-cart').setAttribute("disabled", true);
});

document.getElementById('second-card').addEventListener('click', function(e){
    serial += 1;
    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = 
    e.target.parentNode.parentNode.children[3].children[0].innerText;

    const sumTotal = parseInt(pPrice) + parseInt(pQuantity);

    displayData(pName,pPrice,pQuantity,sumTotal);
    document.getElementById('second-card').setAttribute("disabled", true);
})

document.getElementById('third-cart').addEventListener('click', function(){
    serial += 1;
    const productName = document.getElementById('third-name').innerText;
    const productPrice = document.getElementById('third-price').innerText;
    const productQuantity = document.getElementById('third-quantity').innerText;

    const totalPrice = parseInt(productPrice) - parseInt(productQuantity);

    displayData(productName,productPrice,productQuantity,totalPrice);
    document.getElementById('third-cart').setAttribute("disabled", true);
});


document.getElementById('last-cart').addEventListener('click', function(){
    serial += 1;
    const productName = document.getElementById("last-title").innerText;
    const productPrice = document.getElementById("first-input").value;
    const productQuantity = document.getElementById("second-input").value;
    
    if(productPrice == "" || productQuantity == ""){
        return alert("Please enter any valid number");
    }

    const total = parseInt(productPrice) / parseInt(productQuantity);

    displayData(productName, productPrice,productQuantity,total);
    document.getElementById('last-cart').setAttribute("disabled", true);
})




function displayData(nameOfP,priceOfP,quantityOfP,resultP){
    const container = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfP}</td>
    <td>${priceOfP}</td>
    <td>${quantityOfP}</td>
    <td>${resultP}</td>
    `;
    container.appendChild(tr);
}