export const emailRegx =  /^.+(\w+)@(\w+)(.+)(\.\w{2,})$/; // 验证码
export const emptyRegx = /^ *$/; //空字符
export const numberRegx = /^[\-\+]?\d+(\.\d+)?$/; //数字正则,包含正负数, 小数点
export const uintRegx = /^[\+]?\d+$/; //整型
export const intRegx = /^[\+\-]?\d+$/; //有符号的整型
export const floatRegx = /^[\+\-]?\d+(\.\d+)+$/; //小数点
export const cellPhoneRegx = /^1[3456789]\d{9}$/; //手机号码
export const telPhoneRegx = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;//电话号码
export const idcardRegx = /^((\d{15})|(^\d{17}[0-9]|X))$/; //身份证号码
export const hrefRegx = /https?:\/\/.+$/; //链接地址
export const chinaTextRegx = /^[\u4e00-\u9fa5]+$/; //中文字符
export const ip4Regx = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/; //ipv4地址
export const carNumberRegx = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/; //车牌正则

