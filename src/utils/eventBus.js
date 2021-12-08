class EventBus {
  constructor() {
    this.events = {}
  }

  emit (eventName, ...arg) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].forEach(fn => {
      fn(...arg)
    })
  }

  on (eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(callback)
  }

  off (eventName, fn) {
    if (this.events[eventName]) {
      if (fn) {
        this.events[eventName] = this.events[eventName].filter(c => c !== fn)
      } else {
        this.events[eventName] = []

        delete this.events[eventName]
      }
    }
  }

  once () {}
}

export default new EventBus()
