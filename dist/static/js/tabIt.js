function tabIt(tabBox, connBox, eventName, callBack) {
  var eventName = eventName || 'click'
  var tabBoxType = Object.prototype.toString.call(tabBox)
  var connBoxType = Object.prototype.toString.call(connBox)
  this.tabBox = tabBox
  this.connBox = connBox
  this.activeIndex = 0
  // 判断是否是dom节点
  
  if (tabBoxType == '[object HTMLDivElement]') {
    this.tabBox = tabBox.children
  }
  
  if (connBoxType == '[object HTMLDivElement]') {
    this.connBox = connBox.children
  }
  // console.log(this.connBox)
  // 默认选中第一项
  this.showIndex(0, callBack)
  for (var index = 0; index < this.tabBox.length; index++) {
    var element = this.tabBox[index];
    var _this = this
    element.setAttribute('tabind', index)
    element.addEventListener(eventName, function() {
      var activeIndex = parseInt(this.getAttribute('tabind'))
      // console.log(this, _this)
      _this.showIndex(activeIndex, callBack)
    })
  }
}

tabIt.prototype.showIndex = function (activeIndex, callBack) {
  console.log(activeIndex)
  var activeTab = null
  var activeConn = null
  for (var index = 0; index < this.connBox.length; index++) {
    var element = this.connBox[index];
    if (activeIndex == index) {
      element.style.display = 'block'
      activeConn = element
    } else {
      element.style.display = 'none'
    }
  }
  for (var index = 0; index < this.tabBox.length; index++) {
    var element = this.tabBox[index];
    if (activeIndex == index) {
      element.classList.add('active')
      activeTab = element
    } else {
      element.classList.remove('active')
    }
  }
  setTimeout(() => {
    if (callBack) callBack({
      activeIndex: activeIndex,
      activeTab: activeTab,
      activeConn: activeConn
    })
  }, 0);
}

tabIt.prototype.next = function () {

}