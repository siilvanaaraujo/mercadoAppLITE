const API_URL = "http://127.0.0.1:5000";

// Função para buscar produtos
async function fetchProducts() {
  const response = await fetch(`${API_URL}/products`);
  const products = await response.json();

  const productList = document.getElementById("products");
  productList.innerHTML = ""; // Limpa a lista antes de renderizar

  products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - R$ ${product.price.toFixed(2)}`;
    productList.appendChild(li);
  });
}

// Função para cadastrar um novo produto
async function addProduct(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);

  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, price }),
  });

  if (response.ok) {
    alert("Produto cadastrado com sucesso!");
    document.getElementById("product-form").reset();
    fetchProducts(); // Atualiza a lista de produtos
  } else {
    alert("Erro ao cadastrar produto!");
  }
}

// Adiciona eventos
document.getElementById("product-form").addEventListener("submit", addProduct);

// Carrega os produtos ao iniciar
fetchProducts();
