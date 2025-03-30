import React, { useState } from "react";

function ProductForm() {
  const [formData, setFormData] = useState({ name: "", price: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Produto</h2>
      <input
        type="text"
        name="name"
        placeholder="Nome do Produto"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Preço"
        value={formData.price}
        onChange={handleChange}
      />
      <button type="submit">Cadastrar Produto</button>
    </form>
  );
}

export default ProductForm;
