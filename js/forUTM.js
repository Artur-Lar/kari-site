function getUTMParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const utmMedium = getUTMParameter("utm_medium");

const dynamicImage = document.getElementById("dynamic-image");

if (utmMedium) {
  const validValues = ["26", "kmv", "08", "05", "95", "06", "09", "15", "07"];
  if (validValues.includes(utmMedium)) {
    dynamicImage.src = `${utmMedium}.jpg`;
  } else {
    dynamicImage.src = "default.jpg";
  }
} else {
  dynamicImage.src = "default.jpg";
}
