class SundayCache{
  constructor(){
    this.list={}
  }
  set(key,value){
    this.list[key]=value
  }
  get(key){
    return this.list[key]
  }
  clear() {
    this.list = {}
  }
}

window.SundayCache=SundayCache