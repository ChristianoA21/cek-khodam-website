document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("search-form");
  const input = document.getElementById("search-input");
  const resultsDiv = document.getElementById("results");
  const loadingDiv = document.getElementById("loading");
  const container = document.getElementById("container");

  const words = ["Mencari khodam anda....."];

  let masterTL = gsap.timeline({ repeat: 1 });

  const randomData = [
    "Manusia Harimau",
    "Tokek Bangsawan",
    "Rice Cooker",
    "Kosong :(",
    "Anomali Bekasi",
    "Casis Pompei",
    "Kabel Hdmi",
    "Kangkung",
    "Bayam Tumis",
    "Obat Nyamuk",
    "Rusdi Barber Ngawi",
    "Arip Kopling",
    "Ambatron",
    "Profesor Ironi dari Ngawi",
    "Ketoprak Tambun",
  ];

  const images = {
    "Manusia Harimau": "assets/manusia-harimau.png",
    "Tokek Bangsawan": "assets/tokek-bangsawan.png",
    "Rice Cooker": "assets/rice-cooker.jpg",
    "Anomali Bekasi": "assets/anomali-bekasi.jpg",
    "Casis Pompei": "assets/casis-pompei.jpg",
    "Kabel Hdmi": "assets/kabel-hdmi.jpg",
    Kangkung: "assets/kangkung.jpg",
    "Bayam Tumis": "assets/bayam-tumis.jpg",
    "Obat Nyamuk": "assets/obat-nyamuk.jpg",
    "Rusdi Barber Ngawi": "assets/rusdi-ngawi.jpg",
    "Arip Kopling": "assets/arip-kopling.jpg",
    Ambatron: "assets/ambatron.jpg",
    "Profesor Ironi dari Ngawi": "assets/profesor-ironi.jpg",
    "Ketoprak Tambun": "assets/ketoprak-tambun.jpg",
  };

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = input.value.trim();

    if (query) {
      showLoading();
      setTimeout(() => {
        displayResults(query);
        container.style.display = "none";
        resultsDiv.style.display = "block";
        hideLoading();
      }, 5000);
    }
  });

  function showLoading() {
    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.5 });
      tl.to(loadingDiv, { duration: 1, delay: 0.5, text: word });
      masterTL.add(tl);
    });
    loadingDiv.style.display = "block";
    resultsDiv.style.display = "none";
    container.style.display = "none";
  }

  function hideLoading() {
    loadingDiv.style.display = "none";
    resultsDiv.style.display = "block";
  }

  function displayResults(query) {
    const randomItem =
      randomData[Math.floor(Math.random() * randomData.length)];
    const imageUrl = images[randomItem];
    resultsDiv.innerHTML = `<h5>Khodam kamu ${query} adalah </h5><h1>${randomItem}</h1><img src="${imageUrl}" alt="${randomItem}" width="300"/><br/><br/><a href="" id="btn">Coba nama lain</a>`;
  }
});

var button = 0;
function nightmode() {
  if (button == 0) {
    document.getElementById("mode-1").style.display = "none";
    document.getElementById("mode-2").style.display = "block";
    button = 1;
    document.getElementById("circle").style.width = "400vh";
    document.getElementById("circle").style.height = "400vh";
    document.getElementById("circle").style.left = "0";
    document.getElementById("circle").style.borderRadius = "0%";
    document.getElementById("search-container").style.backgroundColor =
      "#2C3035";
    document.getElementById("search-container").style.color = "#FFFF";
    document.getElementById("btn").style.backgroundColor = "#FF5861";
    document.getElementById("loading").style.color = "#ffff";
    document.getElementById("footer").style.color = "#ffff";
    document.getElementById("footer-link").style.color = "#ffff";
    document.getElementById("results").style.backgroundColor = "#2C3035";
    document.getElementById("results").style.color = "#FFFF";
  } else {
    document.getElementById("mode-1").style.display = "block";
    document.getElementById("mode-2").style.display = "none";
    button = 0;
    document.getElementById("circle").style.width = "0vh";
    document.getElementById("circle").style.height = "0vh";
    document.getElementById("circle").style.borderRadius = "50%";
    document.getElementById("search-container").style.backgroundColor = "#FFFF";
    document.getElementById("search-container").style.color = "#000";
    document.getElementById("btn").style.backgroundColor = "#007bff";
    document.getElementById("loading").style.color = "#007bff";
    document.getElementById("footer").style.color = "#000";
    document.getElementById("footer-link").style.color = "#000";
    document.getElementById("results").style.backgroundColor = "#FFFF";
    document.getElementById("results").style.color = "#000";
  }
}
