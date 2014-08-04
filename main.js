(function () {

	function TabContianer(options) {
		this.options = options;
	}

	TabContianer.prototype = {

		getTabContianer: function () {
			return document.getElementById(this.options.tabContianer);
		}

	}


	// Tab object for individual tab
	function Tab(options) {
		this.options = options;
	}

	Tab.prototype = {

		init: function () {
			this.setClick();
		},

		// returns Array
		getTabList: function () {
			return document.querySelectorAll(this.options.tabElem);
		},

		// Add Click event to Tab
		setClick: function () {
			var tabs = this.getTabList(),
					i;

			for (i = 0; i < tabs.length; i++) {
				tabs[i].addEventListener('click', function () {
					console.log('ckicked');
					this.setAttribute('class', 'active');
				});
			}
		}

	}


	function main() {

		window.addEventListener('load', function () {

			var tabContianer = new TabContianer({
				tabContianer: 'tabs'
			});

			var tab = new Tab({
				tabElem: 'li'
			});


			tab.init();
		});

	}


	main();


})(); // end function
