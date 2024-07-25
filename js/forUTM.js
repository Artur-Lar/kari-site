function getUTMParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const utmMediumImage = getUTMParameter("utm_medium");

const dynamicImage = document.getElementById("dynamic-image");

if (utmMediumImage) {
  const validValues = ["26", "kmv", "08", "05", "95", "06", "09", "15", "07"];
  if (validValues.includes(utmMediumImage)) {
    const newSrc = `images/${utmMediumImage}.jpg`;
    const img = new Image();
    img.src = newSrc;
    img.onload = () => {
      dynamicImage.src = newSrc;
      dynamicImage.style.display = "block";
    };
  } else {
    dynamicImage.src = "default.jpg";
    dynamicImage.style.display = "block";
  }
} else {
  dynamicImage.src = "default.jpg";
  dynamicImage.style.display = "block";
}
