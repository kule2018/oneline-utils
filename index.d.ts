export function md5(data:any, isUpper: boolean):string;
export function sortKey(object: Object):Object;
export function nonce(len?: number):string;
export function objectToUrlQuery(url: string, object: Object):string;
export function parsePathParams(filePath: string, context: any):string;
export function isEmail(value: string):boolean;
export function isPhone(value: string):boolean;
export function isTelPhone(value: string):boolean;
export function isMoiblePhone(value: string):boolean;
export function isEmpty(value: string) : boolean;
export function  idcardRandomStar(idcard: string): string;
export function  stringRandomStar(value: string, len?:number):string
export  class WayDate {
  date:Date;
  yearFormat: 'yyyy'|'yy';
  monthFormat: 'MM'|'M';
  dateFromat: 'DD'|'D';
  hourFormat: 'HH'|'H';
  minuteFormat: 'mm'|'m';
  secondFormat: 'ss'|'s';

  static format(format?:string):string;

  static add(time: number, type: 'second'|'minutes'|'hours'|'days'|'months'): WayDate ;

  add(time: number, type: 'second'|'minutes'|'hours'|'days'|'months')  : WayDate ;

  get time():number;

  new(date?: string|Date|number);

  getYear():number;

  getMonth():number;
  getDate():number;

  getHour()  :number;

  getMinute():number;

  getSecond():number;

  format(format?: string) :string;

}
 

export class WayArray extends Array {
  judge(char: '&&'|'||', key?: string): boolean;
  batchBasic(operation: "*"|"/"|"+"|"-", step: number): Array<number>;
}


//验证
export function validateTelphone(value: string):boolean;
export function validateCellPhone(value: string):boolean;
export function validateEmpty(value: string | {} | undefined | null | []):boolean;
export function validateEmail(value: string):boolean;
export function validateCarNo(value: string):boolean;
export function validateIntRegx(value: string):boolean;
export function validateUintRegx(value: string):boolean;
export function validateFloatRegx(value: string):boolean;
export function validate(object:any, rules:any) : Promise<boolean|Object>;

