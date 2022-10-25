class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }
  
  start(printTimeCallback) {
   this.intervalId = setInterval(()=> {this.currentTime++; if (printTimeCallback) printTimeCallback()}, 1000)
  }

  getMinutes() {
    let date = new Date ();
   return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime % 60 
  }

  computeTwoDigitNumber(value) {
   if (JSON.stringify(value).length !== 2){
      return "0"+value
    }
      return JSON.stringify(value)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
   this.currentTime = 0
  }

  split() {
   return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
