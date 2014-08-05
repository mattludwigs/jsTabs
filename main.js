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
			this.setCurrent();
			this.setClick();
			// this.setActive();
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

				});
			}
		},


		setActive: function (elem) {
			var element = elem;

			// console.log(element)
			//
			// this.setCurrent();
			//
			// console.log(this.currentElement);
			//
			// if (this.currentElement) {
			// 	this.currentElement.classList.remove('active');
			// }
			//
			// console.log(this);
			// element.classList.add('active');
			//
			// this.currentElement = element;
		},

		setCurrent: function () {
			var hash = window.location.hash !== '' ? window.location.hash : '#tab1';
					tabList = this.getTabList();
			this.currentElement = hash;

			console.log(hash);
			console.log(tabList[0].href.replace('http://localhost:9778/', ''));

			if (window.location.hash === '') {
				window.location.hash = hash;
			}

			for (var i = 0; i < tabList.length; i++) {
				if (hash === tabList[i].href.replace('http://localhost:9778/', '')) {
					tabList[i].classList.add('active');
				}
			}

		}



	}


	function main() {

		window.addEventListener('load', function () {

			var tabContianer = new TabContianer({
				tabContianer: 'tabs'
			});

			var tab = new Tab({
				tabElem: 'a'
			});


			tab.init();
		});

	}


	main();


})(); // end function
