import {emailRegx, emptyRegx, telPhoneRegx, cellPhoneRegx, chinaTextRegx, carNumberRegx, intRegx, uintRegx, floatRegx} from './regx.utils';

function result(judge, msg) {
	if(!judge) return {success: false, msg: msg};
	return {success: true, msg: ''};
}

export function validateSame(value: any[], msg: string = "两次数据不一致") {
	return result(value[0] == value[1], msg);
}

export function validateEmail(value: string, errorMsg: string) {
   return result(emailRegx.test(value), errorMsg);
}
 
export function validateEmpty(value: string | {} | undefined | null | [], errorMsg: string) {
  const judge =  typeof value == 'string' ? (<RegExp>emptyRegx).test(value as string) : ([undefined, {}, [], null].indexOf(value) > -1);
  return result(!judge, errorMsg);
}

export function validateTelPhone(value: string, errorMsg: string) {
 return result(telPhoneRegx.test(value), errorMsg);
}

export function validateCellPhone(value: string, errorMsg: string) {
   return result(cellPhoneRegx.test(value), errorMsg);
}

export function validateCarNo(value: string, errorMsg: string) {
  return result(carNumberRegx.test(value), errorMsg);
}

export function validateInt(value: string, errorMsg: string) {
  return result(intRegx.test(value), errorMsg);
}

export function validateUint(value: string, errorMsg: string) {
  return result(uintRegx.test(value), errorMsg);
}

export function validateFloat(value: string, errorMsg: string) {
  return result(floatRegx.test(value), errorMsg);
}

const validateMap = {
  email: validateEmail,
  empty: validateEmpty,
  cellPhone: validateTelPhone,
  int: validateInt,
  uint: validateUint,
  telPhone: validateTelPhone,
  float: validateFloat,
  carNo: validateCarNo,
  same: validateSame
}

/**
 * 
 * 
 * rules : {
 *  username: [{func: 'empty', msg: '手机号码/邮箱不能为空'}],
 *	password: [{func: 'empty', msg: '密码不能少于6位字符'}],
 *	repassword: [{func: 'same',  msg: '两次密码不一致', binder: 'password'}],
 *	verifyCode: [{func: 'empty', msg: '验证码不能为空'}],
 * }
 * 
 * @param object {name: "heloo", password: "", repassword: "", verifyCode: ""}
 * @param rules  
 */
export function validate(object:any, rules:any) : Promise<boolean|Object> {
	
	const types = ["string", "number", "boolean", "undefined"];
	let result = {success: true, msg: ''}
	if(types.indexOf(typeof object) > -1) {
		result = validateMap[rules.func](object, rules.msg)
	} else {
		  
		const keys = Object.keys(rules);
		for (var i = 0; i <  keys.length; i++) {
			const key = keys[i];
			let isOk = true;
			
			if(object.hasOwnProperty(key)) {
				let value = object[key];
				const ruleItems = rules[key];
				for (var j = 0; j < ruleItems.length; j++) {
					const ruleItem = ruleItems[j];
					
					if(ruleItem.binder) {
						value = [value, object[ruleItem.binder]]
					}
					
					const vr = validateMap[ruleItem.func](value, ruleItem.msg);
					if(!vr.success) {
					  result = vr;
					  isOk = false;
					  break
					}
				}
				
			}
			
			if(!isOk) break;
		}
	}
	
	return new Promise((resolve, inject) => { 
		if(result.success) {
			resolve(true);
		} else { 
			inject(result);
		}
	})
}