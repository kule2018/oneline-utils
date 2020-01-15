export function isEmail(value: string):boolean {
 const regx = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
 return regx.test(value);
}

export function isPhone(value: string):boolean {
  return isMoiblePhone(value) || isTelPhone(value);
}

export function isMoiblePhone(value: string):boolean {
  const regx =  /^0?1[3|4|5|8|7|9][0-9]\d{8}$/;
  return regx.test(value);
}

export function isTelPhone(value: string):boolean {
  const regx = /^0[\d]{2,3}-[\d]{7,8}$/;
  return regx.test(value);
}

export function isEmpty(value: string) : boolean{
  if(value == undefined) return true;
 const regx = /^\s*$/;
 return regx.test(value);
}