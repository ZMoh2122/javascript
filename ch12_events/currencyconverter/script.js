// Example conversion rates (static for demo)
const rates = {
  eur: 0.92, // 1 USD = 0.92 EUR
  gbp: 0.79, // 1 USD = 0.79 GBP
  kes: 129.5, // 1 USD = 129.50 KES
  inr: 84.1, // 1 USD = 84.10 INR
};

function convertCurrency() {
  const amount = document.getElementById("usdAmount").value;
  const currency = document.getElementById("currencySelect").value;
  const resultElement = document.getElementById("result");

  if (amount === "" || isNaN(amount)) {
    resultElement.textContent = "Please enter a valid USD amount.";
    return;
  }

  const converted = (amount * rates[currency]).toFixed(2);
  resultElement.textContent = `${amount} USD = ${converted} ${currency.toUpperCase()}`;
}
