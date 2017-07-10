this.$http(hr).then(json => {
this.lawArr = json.lawyers
this.allNum = json.totalCount / 20
if (this.allNum <= 1) {
  this.thisSwit = false
}
this.scrollSwite = true
setTimeout(() => {
  this.loadSwite = false
}, 1000)
return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(this.$http(hr))
  }, 5000)
})
}).then((inner) => {
return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(inner)
  }, 5000)
})
}).then(inner => {
console.log(inner)
})