console.log("main.js");

function se() {
  try {
    const searchengine = localStorage.getItem("se");
    const seElement = document.getElementById("uv-search-engine");

    if (searchengine === "google") {
      seElement.value = "https://www.google.com/search?q=%s";
    } else if (searchengine === "bing") {
      seElement.value = "https://www.bing.com/search?q=%s";
    } else if (searchengine === "ddg") {
      seElement.value = "https://duckduckgo.com/?q=%s";
    } else if (searchengine === "brave") {
      seElement.value = "https://search.brave.com/search?q=%s";
    }
  } catch (err) {
    console.log("Something bad happened", err);
  }
}

se();

const texts = [
  "Welcome to Native v5!",
  "xplayz is a gay fag",
  "https://getsolara.dev/",
  "i nate higgers",
];

// adds ip to rng text
fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    const ipText = `${data.ip}`;
    texts.push(ipText);
  })
  .catch((error) => {
    console.error("Error fetching IP:", error);
  })
  .finally(() => {
    document.getElementById("rng").innerHTML = getRandomText();
  });

function getRandomText() {
  return texts[Math.floor(Math.random() * texts.length)];
}
