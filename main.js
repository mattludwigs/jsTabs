(function () {

	function TabContianer(options) {
		this.options = options;
		this.currentElement = null;
		this.contents = document.getElementsByClassName(this.options.content);
		this.elementMap = this._createElementMap();
	}

	TabContianer.prototype = {

		// getTabContianer: function () {
		// 	return document.getElementById(this.options.contianer);
		// },

		show: function (id) {
			this.elementMap[id].classList.remove('hide');
			if (this.currentElement) {
				this.currentElement.classList.add('hide');
			}
			this.currentElement = this.elementMap[id];
		},

		_createElementMap: function () {
			var map = {},
			length = this.contents.length,
			key,
			value,
			i;

			for (i = 0; i < length; i++) {
				key = this.contents[i].id;
				value = this.contents[i];

				map[key] = value;
			}

			return map;
		}
		//
		// clickOnChildern: function () {
		// 	var childern = this.filterChildern(),
		// 			i;
		//
		//
		// 	// for (i = 0; i < childern.length; i++) {
		// 	// 	childern[i].addEventListener('click', this.findActive.bind(this, childern[i]));
		// 	// }
		//
		// },
		//
		// filterChildern: function () {
		// 	var childs = this.getTabContianer().childNodes,
		// 			filtered = [],
		// 			i;
		//
		// 	for (i = 0; i < childs.length; i++) {
		// 		if (childs[i].nodeName === 'LI') {
		// 			filtered.push(childs[i]);
		// 		}
		// 	}
		//
		// 	return filtered;
		// },

		// findActive: function (elem) {
		// 	var child = elem,
		// 			node = child.childNodes,
		// 			active,
		// 			i;
		//
		// 	for (i = 0; i < node.length; i++) {
		// 		if (node[i].classList.contains('active')) {
		// 			active = node[i];
		// 		}
		// 	}
		//
		// 	this.displayContent(active);
		//
		// 	return active;
		// },

		// displayContent: function (activeTab) {
		// 	var tabId = activeTab.href.replace('http://localhost:9778/', ''),
		// 			i;
		//
		// 	for (i = 0; i < this.content.length; i++) {
		// 		if (this.content[i].getAttribute('id') === tabId.replace('#', '')) {
		// 			this.content[i].classList.remove('hide');
		// 		} else {
		// 			this.hideContent(this.content[i]);
		// 		}
		// 	}
		// },
		//
		// hideContent: function (nonActive) {
		// 	nonActive.classList.add('hide');
		// },
		//
		// setDefaultContianer: function () {
		// 	var hash = window.location.hash,
		// 			i;
		//
		// 	for (i = 0; i < this.content.length; i++) {
		// 		if (this.content[i].getAttribute('id') === hash.replace('#', '')) {
		// 			this.content[i].classList.remove('hide');
		// 		}
		// 	}
		//
		// }
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
			console.log(this.currentElement, elem);
			if (elem.href !== this.currentElement) {
				this.romoveActive();
				elem.classList.add('active');
				this.currentElement = this.pathReplace(elem.href, this.options.path, '');
				this.cbOnActive(this.currentElement);
			}
		},

		setActiveCallBack: function (cb) {
			this.cbOnActive = cb;
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

			this.cbOnActive(hash);

		},

		pathReplace: function (elem, path, replaceWith) {
			return elem.replace(path, replaceWith);
		}
	}

	function main() {

		window.addEventListener('load', function () {
			var tabContianer = new TabContianer({
				contianer: 'tabs',
				content: 'tab-content'
			});

			var tab = new Tab({
				tabElem: 'a',
				path: 'http://localhost:9778/'
			});

			tab.setActiveCallBack(function (hash) {
				tabContianer.show(hash.substr(1));
			})
			tab.init();
			// tabContianer.init();
		});

	}

	main();

})(); // end function
