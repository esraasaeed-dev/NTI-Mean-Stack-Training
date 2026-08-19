var productName = document.getElementById("productName");
var productDesc = document.getElementById("productDesc");
var productColor = document.getElementById("productColor");
var outOfStock = document.getElementById("outOfStock");

var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");

var searchInput = document.getElementById("searchInput");
var productsBody = document.getElementById("productsBody");
var noProducts = document.getElementById("noProducts");

var products = [];
var currentIndex = -1;

var data = localStorage.getItem("products");

if (data != null) {
    products = JSON.parse(data);
}

displayProducts(products);

addBtn.addEventListener("click", function () {

    if (productName.value == "" ||
        productDesc.value == "" ||
        productColor.value == "") {

        alert("Please enter all data");
        return;
    }

    var product = {
        name: productName.value,
        desc: productDesc.value,
        color: productColor.value,
        outOfStock: outOfStock.checked
    };

    products.push(product);

    saveData();
    displayProducts(products);
    clearForm();
});

function displayProducts(arr) {

    productsBody.innerHTML = "";

    if (arr.length == 0) {
        noProducts.classList.remove("hide");
    } else {
        noProducts.classList.add("hide");
    }

    arr.forEach(function (product) {

        var index = products.indexOf(product);

        var tr = document.createElement("tr");

        tr.innerHTML =
            "<td>" + product.name + "</td>" +
            "<td>" + product.desc + "</td>" +
            "<td>" + product.color + "</td>" +
            "<td class='" + (product.outOfStock ? "out" : "available") + "'>" +
            (product.outOfStock ? "Out Of Stock" : "Available") +
            "</td>" +
            "<td>" +
            "<button class='editBtn' onclick='editProduct(" + index + ")'>Edit</button>" +
            "<button class='deleteBtn' onclick='deleteProduct(" + index + ")'>Delete</button>" +
            "</td>";

        productsBody.appendChild(tr);
    });
}

function editProduct(index) {

    currentIndex = index;

    productName.value = products[index].name;
    productDesc.value = products[index].desc;
    productColor.value = products[index].color;
    outOfStock.checked = products[index].outOfStock;

    addBtn.classList.add("hide");
    updateBtn.classList.remove("hide");

    window.scrollTo(0, 0);
}

updateBtn.addEventListener("click", function () {

    products[currentIndex].name = productName.value;
    products[currentIndex].desc = productDesc.value;
    products[currentIndex].color = productColor.value;
    products[currentIndex].outOfStock = outOfStock.checked;

    saveData();
    displayProducts(products);

    addBtn.classList.remove("hide");
    updateBtn.classList.add("hide");

    clearForm();

    currentIndex = -1;
});

function deleteProduct(index) {

    products.splice(index, 1);

    saveData();
    displayProducts(products);

    if (currentIndex == index) {
        clearForm();
        addBtn.classList.remove("hide");
        updateBtn.classList.add("hide");
        currentIndex = -1;
    }
}

searchInput.addEventListener("input", function () {

    var text = searchInput.value.toLowerCase();

    var result = products.filter(function (product) {

        var availability;

        if (product.outOfStock) {
            availability = "out of stock";
        } else {
            availability = "available";
        }

        return product.name.toLowerCase().includes(text) ||
               product.color.toLowerCase().includes(text) ||
               availability.includes(text);
    });

    displayProducts(result);
});


function saveData() {
    localStorage.setItem("products", JSON.stringify(products));
}


function clearForm() {
    productName.value = "";
    productDesc.value = "";
    productColor.value = "";
    outOfStock.checked = false;
}
