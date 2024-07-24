function getUTMParameterLink(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const utmMediumValue = getUTMParameterLink("utm_medium");
const utmSourceValue = "kavkaz70";
const linkIds = [
  "mainButtonLink",
  "mapImageLink",
  "mapTextLink",
  "vklink",
  "tglink",
  "GPlink",
  "AppStoreLink",
];

if (utmMediumValue) {
  linkIds.forEach((id) => {
    const linkElement = document.getElementById(id);
    if (linkElement) {
      const newHref = `${linkElement.href}?utm_source=${utmSource}&utm_medium=${utmMedium}`;
      linkElement.href = newHref;
      console.log(`Updated link href for ${id} to:`, newHref);
    }
  });
}
