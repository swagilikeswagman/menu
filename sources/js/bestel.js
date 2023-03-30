
// data products
let products = {
  pizza_contadina: { count: 0, price: 0 },
  pizza_margherita: { count: 0, price: 0 },
  pizza_delizioza: { count: 0, price: 0 },
  pizza_salame: { count: 0, price: 0 },
  pizza_tonno: { count: 0, price: 0 },
  pizza_rustica: { count: 0, price: 0 },
  pizza_quattro_formaggi: { count: 0, price: 0 },
  pizza_di_lusso_margherita: { count: 0, price: 0 },
  appetizer_pane_con_olio: { count: 0, price: 0 },
  appetizer_pane_con_tre_crème: { count: 0, price: 0 },
  appetizer_bruschetta_tomaat: { count: 0, price: 0 },
  appetizer_caprese: { count: 0, price: 0 },
  appetizer_carpaccio: { count: 0, price: 0 },
  appetizer_misto: { count: 0, price: 0 },
  pizza_quattro_stagioni: {count: 0, price: 0},
  pizza_con_cotto: {count: 0, price: 0},
  pizza_fiamma: {count: 0, price: 0},
  pizza_ai_funghi: {count: 0, price: 0},
  pizza_hawaii: {count: 0, price: 0},
  pizza_pollo_con_extra: {count: 0, price: 0},
  pizza_prosciutto_di_parma: {count: 0, price: 0},
  pizza_bufala_bruschetta: {count: 0, price: 0},
  pizza_pollo_pesto: {count: 0, price: 0},
  pizza_carpaccio: {count: 0, price: 0},
  pizza_döner: {count: 0, price: 0},
  pizza_bbq_chicken: {count: 0, price: 0},
  pizza_bbq_meatlovers: {count: 0, price: 0},
  pasta_bianca: {count: 0, price: 0},
  pasta_pomodore: {count: 0, price: 0},
  pasta_verdure: {count: 0, price: 0},
  pasta_pesto: { count: 0, price: 0 },
  pasta_ai_funghi: { count: 0, price: 0 },
  pasta_pomodori_secchi: { count: 0, price: 0 },
  pasta_gamberi_rosso: { count: 0, price: 0 },
  pasta_tonno: { count: 0, price: 0 },
  pasta_con_polpette: { count: 0, price: 0 },
  pasta_bolognese: { count: 0, price: 0 },
  pasta_gamberi_spinaci: { count: 0, price: 0 },
  pasta_pollo_e_limone: { count: 0, price: 0 },
  pasta_carbonara: { count: 0, price: 0 },
  pasta_del_padrone: { count: 0, price: 0 },
  pasta_pollo_e_pesto: { count: 0, price: 0 },
  pasta_siciliana: { count: 0, price: 0 },
  pasta_pollo_e_funghi: { count: 0, price: 0 },
  pasta_salmone: { count: 0, price: 0 },
  pasta_tartufo_di_pollo: { count: 0, price: 0 },
  pasta_pollo_e_siciliana: { count: 0, price: 0 },
}
// functions
function koopProduct(product, prijs) {
  products[product].count++;
  products[product].price = products[product].count * prijs;
  document.getElementById(`totaal_${product}`).value = products[product].count;
  document.getElementById(`totaalPrijs_${product}`).value =
    products[product].price.toFixed(2);
}

function verwijderProduct(product, prijs) {
  if (products[product].count > 0) {
    products[product].count--;
    products[product].price = products[product].count * prijs;
    document.getElementById(`totaal_${product}`).value =
      products[product].count;
    document.getElementById(`totaalPrijs_${product}`).value =
      products[product].price.toFixed(2);
  }
}

function toonProducten() {
  let producten = "";
  for (let product in products) {
    if (products[product].count > 0) {
      producten += `<br>${product.replace(/_/g, " ")}: ${
        products[product].count
      }`;
    }
  }
  return producten;
}

function berekenPrijs() {
  let totaalPrijs = Object.values(products).reduce(
    (acc, curr) => acc + curr.price,
    0
  );
  if (totaalPrijs >= 50) {
    totaalPrijs *= 0.85; 
  }
  document.getElementById("totaalPrijs").value = "€" + totaalPrijs.toFixed(2);
  document.getElementById(
    "lijst_producten"
  ).innerHTML = `Geselecteerde producten:\n${toonProducten()}`;
}


// expand/retract
// expand/retract

function toggleSection(sectionId, button) {
  const section = document.querySelector(`#${sectionId}`);
  section.classList.toggle("active");
  if (section.style.display === "none") {
    section.style.display = "flex";
    button.innerText = "-";
  } else {
    section.style.display = "none";
    button.innerText = "+";
  }
  section.addEventListener(
    "transitionend",
    () => {
      section.style.height = "";
    },
    { once: true }
  );
  section.style.height = `${section.scrollHeight}px`;
}
