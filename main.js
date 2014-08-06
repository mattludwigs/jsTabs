(function () {

	function TabContianer(options) {
		this.options = options;
	}

	TabContianer.prototype = {

		init: function () {
			this.clickOnChildern();
		},

		getTabContianer: function () {
			return document.getElementById(this.options.contianer);
		},

		// getContentContianer: function( )

		clickOnChildern: function () {
			var childern = this.filterChildern(),
					i;
			console.log(childern);

			for (i = 0; i < childern.length; i++) {
				childern[i].addEventListener('click', function () {

				console.log(this.findActive());

				}.bind(this, null));
			}
			
		},

		filterChildern: function () {
			var childs = this.getTabContianer().childNodes,
					filtered = [],
					i;

			for (i = 0; i < childs.length; i++) {
				if (childs[i].nodeName === 'LI') {
					filtered.push(childs[i]);
				} 
			}

			return filtered;
		},

		findActive: function () {
			var childern = this.filterChildern(),
					active,
					i;

			for (i = 0; i < childern.length; i++) {
				// TODO: make this work right!!
				if (childern[i].classList.contains('active')) {
					active = 'bob';
				} else {
					active = 'ted'
				}
			}

			return active;
		}

}


	// Tab object for individual tab
	function Tab(options) {
		this.options = options;
	}

	Tab.prototype = {

		init: function () {
			this.loadSetCurrent();
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
				tabs[i].addEventListener('click', this.setActive.bind(this, tabs[i]));
			}
		},


		setActive: function (elem) {
			if (elem.href !== this.currentElement) {
				this.romoveActive();
				elem.classList.add('active');
				this.currentElement = this.pathReplace(elem.href, this.options.path, '');
				console.log(this.currentElement);
			}
		},

		romoveActive: function () {
			var href,
					i;

			for (i = 0; i < this.getTabList().length; i++) {
				href = this.pathReplace(this.getTabList()[i].href, this.options.path, '');
				if (href === this.currentElement) {
					this.getTabList()[i].classList.remove('active');
				}
			}
		},

		loadSetCurrent: function () {
			var hash = window.location.hash !== '' ? window.location.hash : '#tab1';
					tabList = this.getTabList();
			this.currentElement = hash;

			if (window.location.hash === '') {
				window.location.hash = hash;
			}

			for (var i = 0; i < tabList.length; i++) {
				if (hash === this.pathReplace(tabList[i].href, this.options.path, '')) {
					tabList[i].classList.add('active');
				}
			}

		},

		pathReplace: function (elem, path, replaceWith) {
			return elem.replace(path, replaceWith);
		}
	}


	function main() {

		window.addEventListener('load', function () {

			var tabContianer = new TabContianer({
				contianer: 'tabs'
			});

			var tab = new Tab({
				tabElem: 'a',
				path: 'http://localhost:9778/'
			});

			tab.init();
			tabContianer.init();
		});

	}


	main();


})(); // end function
