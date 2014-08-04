function Tabinit() {
  'use strict';

  function Tab() {

  }

  Tab.prototype = {

    init: function () {

    },

    getCurrentHash: function () {

      return window.location.hash;

    },

    setCurrentTab: function () {
      this.tabElem = document.getElementById('tabs').childern;

      var hash = this.getCurrentHash();

      console.log(this.tabElem);



    }



  }

  return Tab.init();
};
