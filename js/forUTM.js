function getUTMParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const utmMedium = getUTMParameter("utm_medium");
console.log("UTM Medium:", utmMedium);

const dynamicImage = document.getElementById("dynamic-image");
console.log("Dynamic Image Element:", dynamicImage);

if (utmMedium) {
  const validValues = ["26", "kmv", "08", "05", "95", "06", "09", "15", "07"];
  if (validValues.includes(utmMedium)) {
    const newSrc = `images/${utmMedium}.jpg`;
    dynamicImage.src = newSrc;
    console.log("Image source updated to:", newSrc);
  } else {
    dynamicImage.src = "default.jpg";
    console.log("Invalid utm_medium value, set to default.jpg");
  }
} else {
  dynamicImage.src = "default.jpg";
  console.log("No utm_medium value found, set to default.jpg"); // Логирование установки по умолчанию
}
