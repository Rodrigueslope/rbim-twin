const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=-10.9472&longitude=-37.0731&current=temperature_2m,relative_humidity_2m";

async function atualizarDashboard() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    const temp = data.current.temperature_2m;
    const hum = data.current.relative_humidity_2m;

    document.getElementById("temp-value").innerText = `${temp} °C`;
    document.getElementById("hum-value").innerText = `${hum} %`;

    const alerta = document.getElementById("alerta-overlay");
    if (temp > 25) {
      alerta.classList.add("blink");
    } else {
      alerta.classList.remove("blink");
    }
  } catch (err) {
    console.error("Erro ao buscar dados:", err);
  }
}

atualizarDashboard();
setInterval(atualizarDashboard, 30000);
