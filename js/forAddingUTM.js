function getUTMParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const utmMediumLink = getUTMParameter("utm_medium");
const utmSourceLink = "kavkaz70"; // Статическое значение utm_source

const linkIds = [
  "mainButtonLink",
  "mapImageLink",
  "mapTextLink",
  "vklink",
  "tglink",
  "GPlink",
  "AppStoreLink",
];

function addUTMParametersToURL(url, utmSource, utmMedium) {
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search);
  params.set("utm_source", utmSource);
  params.set("utm_medium", utmMedium);
  urlObj.search = params.toString();
  return urlObj.toString();
}

if (utmMediumLink) {
  linkIds.forEach((id) => {
    const linkElement = document.getElementById(id);
    if (linkElement) {
      const newHref = addUTMParametersToURL(
        linkElement.href,
        utmSourceLink,
        utmMediumLink
      );
      linkElement.href = newHref;
      console.log(`Original link href for ${id}:`, originalHref);
      console.log(`Updated link href for ${id} to:`, newHref);
    }
  });
}
