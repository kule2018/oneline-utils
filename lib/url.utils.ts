export function objectToUrlQuery(url: string, object: Object):string {
  const query = [];
  Object.keys(object).forEach(key => {
    query.push([key, "=", object[key]].join(""));
  })
  if(url.indexOf("?") > -1) {
    return url + "&" + query.join("&");
  }
  return url + "?" + query.join("&");
}