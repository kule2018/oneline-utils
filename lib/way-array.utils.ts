export class WayArray extends Array {
  judge(char: '&&'|'||', key?: string): boolean{
    let judge = true;
     for(let i = 0; i < this.length; i++) {
       if(char == "&&") judge = judge && (key?this[i][key]: this[i]);
       if(char == "||") judge = judge || (key?this[i][key]: this[i]);
     }
    return judge;
  }
}