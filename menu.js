document.addEventListener("DOMContentLoaded", function () {
    let role = localStorage.getItem("role");
    let menuContainer = document.getElementById("menu");

    if (!menuContainer) return; // Cegah error jika elemen "menu" tidak ditemukan

    let menuHTML = "";

    if (role === "admin") {
        menuHTML = `
            <li class="nav-item"><a class="nav-link" href="index.html">Dashboard</a></li>
            <li class="nav-item"><a class="nav-link" href="pesanan.html">Pesanan</a></li>
            <li class="nav-item"><a class="nav-link" href="login.html" onclick="logout()">Logout</a></li>
        `;
    } else {
        menuHTML = `
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="product.html">Produk</a></li>
            <li class="nav-item"><a class="nav-link" href="keranjang.html">Keranjang</a></li>
            <li class="nav-item"><a class="nav-link" href="sosialmedia.html">Sosial Media</a></li>
            <li class="nav-item"><a class="nav-link" href="login.html" onclick="logout()">Logout</a></li>
        `;
    }

    menuContainer.innerHTML = menuHTML;
});

function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    alert("Anda telah logout.");
    window.location.href = "login.html";
}
