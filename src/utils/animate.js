/**
 * 金蛋的运动动画
 */
class Animate {
  constructor (el, target) {
    this._eid = 0
    this.el = el
    this.target = target
    this.posiA = el.$el.getBoundingClientRect()
    this.posiB = target.$el.getBoundingClientRect()
  }
  createEl () {
    this._eid ++
    var elem = document.createElement('span')
    var body = document.getElementsByTagName('body')[0]
    var styles = {
      position: 'absolute',
      padding: '3px 6px',
      border: '1px solid #eee',
      borderRadius: '8px',
      backgroundColor: '#ffcc00',
      color: '#fff'
    }
    elem.classList = `b-egg-popup ${this._eid % 2 === 0 ? 'js-animate__translate' : 'js-animate__lf'}`
    elem.innerText = '+10'
    Object.keys(styles).forEach(s => {
      elem.style[s] = styles[s]
    })
    body.append(elem)
    this.moveTo.call(this, elem)
  }
  moveTo (elem) {
    let { top, left } = this.posiB
    let { top: aTop, left: aLeft } = this.posiA
    if (aTop >= top + 10) {
      elem.tid = setInterval(() => {
        aTop = aTop - 10
        elem.style.top = aTop + 'px'
        if (aTop < top) {
          clearInterval(elem.tid)
          elem.style.top = top + 'px'
          this.destroy()
        }
      }, 20)
    }
  }
  destroy() {
    let popups = document.querySelectorAll('.b-egg-popup')
    let body = document.querySelector('body')
    body.removeChild([...popups].shift())
  }
}
export default Animate