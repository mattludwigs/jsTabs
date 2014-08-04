function Tabinit() {
  'use strict';

  function Tab() {

  }

  Tab.prototype = {

    init: function () {
      this.setCurrentTab();
    },

    getCurrentHash: function () {

      return window.location.hash;

    }


  }

  new Tab().init();
};
