const tg = window.Telegram.WebApp;
tg.expand(); // Толық экран

const user = tg.initDataUnsafe?.user;
const userId = user?.id;

document.getElementById("balanceValue").textContent = "0 TON";

// 👉 Ставка
document.getElementById("placeBet").onclick = async () => {
  const bet = parseFloat(document.getElementById("betAmount").value);
  if (!bet || bet <= 0) return alert("Ставка дұрыс емес");

  // Әзірше жай лог
  document.getElementById("status").textContent = `Ставка қойдың: ${bet} TON`;

  // Кэшаутты қосу
  document.getElementById("cashout").disabled = false;
};

// 👉 Кэшаут
document.getElementById("cashout").onclick = async () => {
  document.getElementById("status").textContent = `Кэшаут жасалды! 🚀`;

  // Кэшаутты блоктау
  document.getElementById("cashout").disabled = true;
};
