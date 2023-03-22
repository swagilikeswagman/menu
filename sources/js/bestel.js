let products = {
    pizza_contadina: {count: 0, price: 0},
    pizza_margherita: {count: 0, price: 0},
    bananen: {count: 0, price: 0}
  };
  function koopProduct(product, prijs) {
    products[product].count++;
    products[product].price = products[product].count * prijs;
    document.getElementById(`totaal_${product}`).value = products[product].count;
    document.getElementById(`totaalPrijs_${product}`).value = products[product].price.toFixed(2);
  }

  function verwijderProduct(product, prijs) {
    if (products[product].count > 0) {
      products[product].count--;
      products[product].price = products[product].count * prijs;
      document.getElementById(`totaal_${product}`).value = products[product].count;
      document.getElementById(`totaalPrijs_${product}`).value = products[product].price.toFixed(2);
    }
  }

  function berekenPrijs() {
    let totaalPrijs = Object.values(products).reduce((acc, curr) => acc + curr.price, 0);
    document.getElementById('totaalPrijs').value = totaalPrijs.toFixed(2);
}
