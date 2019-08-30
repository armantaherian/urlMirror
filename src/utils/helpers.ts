/**
 * There is a thing in this file which causes white-screen after
 * the page was loaded completely, so I removed it manually. :)
 */
export function removeBullshitScripts(data: string): string {
  // return data.replace(/\/images/g, "https://www.google.com/images/");
  try {
    return data.replace(
      /(https:\/\/cdn-client\.medium\.com\/lite\/static\/js\/vendors~main\..+?\.chunk\.js(?="><\/script>))/g,
      ""
    );
  } catch (error) {
    return data || "";
  }
}

export function removeNoscript(data: string): string {
  try {
    return data.replace(/<noscript>/g, "").replace(/<\/noscript>/g, "");
  } catch (error) {
    return data || "";
  }
}
