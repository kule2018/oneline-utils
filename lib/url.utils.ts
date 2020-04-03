export function objectToUrlQuery(url: string, object: Object): string {
  const query = [];
  Object.keys(object).forEach(key => {
    query.push([key, "=", object[key]].join(""));
  })
  if (url.indexOf("?") > -1) {
    return url + "&" + query.join("&");
  }
  return url + "?" + query.join("&");
}

/**
 * 用来解析动态的路径参数。比如路径为/root/:uid 上下文为{uid: 'user123'}. 这时候我们会得出 /root/user123;
 * @param filePath 路径
 * @param context  上下文对象
 */
export function parsePathParams(filePath: string, context: any):string {
  let i = 0;
  const splits = [];
  let start = 0;
  const last = filePath.charCodeAt(filePath.length - 1);
  function replace(chars, context) {
    if (chars.charCodeAt(0) === 58) {
      if (context[chars] === undefined) throw new Error(`not found ${chars} in context`)
      return context[chars];
    }
    return chars;
  }
  while (true) {
    if (i >= filePath.length) {

      if (last !== 47) splits.push(replace(filePath.slice(start, i), context))
      break;
    }
    const code = filePath.charCodeAt(i);


    if (code == 47) {
      //  const e = i;
      //  const s = start; 
      if (i > start) {
        let chars = replace(filePath.slice(start, i), context);
        splits.push(chars);
      }
      start = i + 1;
    }
    i++;
  }
  return splits.join("/");
}
