(function () {

  function Tabs() {

  }

  Tabs.prototype = {

    init: function () {
      this.tabs = this.getTabList();
      this.addClickEvent();
    },

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
     var tabs = this.getTabList(),
          i;

      for (i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', this.setActive.bind(this, tabs[i]), false)
      }

    },

    setActive: function (elem) {

     var element = elem.childNodes[0],
          hash = this.getHash();

     if (this.currentEelement) {
       this.currentEelement.classList.remove('active');
     }

      console.log(this);
      element.classList.add('active');

      this.currentEelement = element;
    },

    getHash: function () {
      return window.location.hash;
    },

    // setCurrent: function () {

    //   var hash =


    // }

  };
  
  return new Tabs().init();
})();

