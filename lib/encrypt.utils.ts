import * as  crypto from 'crypto';
/**
 * md5加密: 采用的是node自带加密库
 * @param data 要加密的数据
 * @param isUpper 是否大写. 默认小写
 */
export function md5(data:any, isUpper: boolean = false):string {
 
  const result =  crypto
    .createHash("md5")
    .update(data)
    .digest("hex");

    return isUpper?result.toUpperCase(): result;
   
}

/**
 * 为对象做键排序
 * @param object 
 * @return 排序后的对象
 */
export function sortKey(object: Object):Object {
  const sortObject:any = {};
  Object.keys(object).sort().forEach(key => {
    sortObject[key] = object[key];
  })

  return sortObject;
}

export function nonce(len: number = 16): string {
  return  (
    Math.random()
      .toString(len)
      .substr(2) + Date.now()
  );
}
export function stringRandomStar(value: string, len:number = 2):string {
  let star = "";
  for(let i =0; i<len; i++) {
    star += "*";
  }
  const regx = new RegExp('.{' +len+ '}(.*)')
  return value.replace(regx, star + '$1');
}
export function  idcardRandomStar(idcard: string): string {
	// 15位身份证举例：130503 670401 001的含义; 13为河北，05为邢台，03为桥西区，出 生日期为1967年4月1日，顺序号为001。
	if(idcard.length == 15){
		return idcard.replace(/(\d{6})\d{3}(\d{3})\d{3}/, "$1***$2***");
	} else {
		return idcard.replace(/(\d{5})\d{3}(\d{6})\d{3}/, "$1***$2***");
	}
}
 