

const form_products = document.getElementById('proizvodi');


function showProducts() {
    for (let i=0; i<products.length; i++) {
        console.log(products[i]);
    }
}


function calculatePriceInner() {
    var value = 0;
    for (let i=0; i<products.length; i++) {
        value += products[i].cijena;
    }
    return value 
}


function calculatePrice() {
    var element = document.getElementById("ukupna-cijena");
    element.innerText="";
    element.innerText = calculatePriceInner()
}


function addingProductsToTable() {
    var table = document.getElementById("tabela-proizvodi");
    
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);


    var newcell = row.insertCell(0);
    newcell.innerHTML = products[products.length-1].naziv;


    var newcell2    = row.insertCell(1);
    newcell2.innerHTML = products[products.length-1].cijena;
    if (products[products.length-1].cijena <= 50) {
        newcell2.className = "below_or_equal_fifty";
    } else {
        newcell2.className = "above_fifty";
    }
}
document.getElementById("ukupna-cijena").style.color="green";


form_products.addEventListener('submit', (event) => {
    event.preventDefault();
    
    products.push({
        "naziv":  form_products.elements['naziv-proizvoda'].value,
        "cijena": Number(form_products.elements['cijena'].value)});
    showProducts();
    addingProductsToTable()
    calculatePrice()
});
