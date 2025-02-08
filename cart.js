document.addEventListener("DOMContentLoaded", function () {
    displayCart();
});

function addToCart(name, price, code) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Cek apakah produk sudah ada di dalam keranjang
    let existingProduct = cart.find(item => item.code === code);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name, price, code, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " berhasil ditambahkan ke keranjang!");
}

// Menampilkan produk di keranjang
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartTable = document.getElementById("cart-items");
    let totalHarga = document.getElementById("total-harga");

    if (!cartTable) return;

    cartTable.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        let row = `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Hapus</button></td>
            </tr>
        `;
        cartTable.innerHTML += row;
        total += item.quantity * parseInt(item.price.replace("RP.", "").replace("/25PCS", "").replace(",", ""));
    });

    totalHarga.innerText = "Total: RP. " + total.toLocaleString();
}

// Hapus item dari keranjang
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}
