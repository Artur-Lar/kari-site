function getUTMParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const utmMedium = getUTMParameter("utm_medium");
const utmSource = "kavkaz70";
const linkIds = [
  "mainButtonLink",
  "mapImageLink",
  "mapTextLink",
  "vklink",
  "tglink",
  "GPlink",
  "AppStoreLink",
];

if (utmMedium) {
  linkIds.forEach((id) => {
    const linkElement = document.getElementById(id);
    if (linkElement) {
      const newHref = `${linkElement.href}?utm_source=${utmSource}&utm_medium=${utmMedium}`;
      linkElement.href = newHref;
      console.log(`Updated link href for ${id} to:`, newHref);
    }
  });
}
