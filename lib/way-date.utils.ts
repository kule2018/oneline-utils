export class WayDate {
  date:Date;
  yearFormat: 'yyyy'|'yy' = "yy";
  monthFormat: 'MM'|'M' = 'M';
  dateFromat: 'DD'|'D' = 'D';
  hourFormat: 'HH'|'H' = 'H';
  minuteFormat: 'mm'|'m' = 'm';
  secondFormat: 'ss'|'s' = 's';

  static fromat = function(format?:string) {
    return new WayDate().format(format);
  }

  static add(time: number, type: 'second'|'minutes'|'hours'|'days'|'months'): WayDate { 
    const date = new WayDate(); 
    return date.add(time, type);
  }

  add(time: number, type: 'second'|'minutes'|'hours'|'days'|'months') {
     if(type == 'second') {
       this.date = new Date(this.date.getTime() + time * 1000);
     }
     return this;
  }

  get time() {
    return this.date.getTime();
  }

  constructor(date?: string|Date|number) {
    if(!date) {
      this.date = new Date();
    }
    if(date instanceof Date) {
      this.date = date;
    }

    if(typeof date === "string") {
      
    }

    if(typeof date === "number") {
      
    }

  }

  getYear() {
    return this.date.getFullYear();
  }

  getMonth() {
    return this.date.getMonth() + 1;
  }

  getDate() {
    return this.date.getDate();
  }

  getHour() {
    return this.date.getHours();
  }

  getMinute() {
    return this.date.getMinutes();
  }

  getSecond() {
    return this.date.getSeconds();
  }

  format(format: string = "yyyy-MM-dd HH:mm:ss") {
    format =  format.replace('yyyy', this.getYear() + "");
    format = format.replace('MM', this.getMonth()<10?[0, this.getMonth()].join(""):this.getMonth()+"");
    format = format.replace('dd', this.getDate()<10?[0, this.getDate()].join(""):this.getDate()+"");
    format = format.replace('HH', this.getHour()<10?[0, this.getHour()].join(""):this.getHour()+"");
    format = format.replace('mm', this.getMinute()<10?[0, this.getMinute()].join(""):this.getMinute()+"");
    format = format.replace('ss', this.getSecond()<10?[0, this.getSecond()].join(""):this.getSecond()+""); 

    format = format.replace('M', this.getMonth()+"");
    format = format.replace('d', this.getDate()+"");
    format = format.replace('H', this.getHour()+"");
    format = format.replace('m', this.getMinute()+"");
    format = format.replace('s', this.getSecond()+"");
    return format;
  }

}
 

function isDate(date: string) {
  //20190122092288
  if(date.length == 12) {
    // date.split()
  }
}