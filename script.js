(function () {

  function Tabs() {

  }

  Tabs.prototype = {

    getTabList: function () {
      var tabArray = document.getElementById('tabs').children,
          tabs =[],
          i;

      for (i = 0; i < tabArray.length; i++) {
        if (tabArray[i].nodeName === 'LI') {
          tabs.push(tabArray[i]);
        }
      }
      return tabs;
    },


    addClickEvent: function () {
      var self = this,
          tabs = this.getTabList(),
          i;

      for (i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', self.setActive(tabs[i]), false)
      }

    },

    setActive: function (elem) {

      var element = elem.childNodes[0];
      var hash = this.getHash();

      if (hash === element.getAttribute('href')) {
        console.log(hash);
        element.setAttribute('class', 'active');
      }

    },

    getHash: function () {
      return window.location.hash;
    },


    init: function () {
      this.addClickEvent();
    }

  };
var tab = new Tabs();
tab.init();

})();