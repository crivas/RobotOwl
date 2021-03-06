Crivas.$window;
Crivas.windowWidth;
Crivas.windowHeight;

Crivas.small = 700;
Crivas.medium = 850;
Crivas.large = 1050;

Crivas.init = function () {

	Crivas.$window = $(window);
	Crivas.$window.on('resize', Crivas.onWindowResize);
	Crivas.onWindowResize();

	var scope = $('body').get(0);

	ko.bindingHandlers.subMenu = {
		
		update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

			var value = valueAccessor(),
				allBindings = allBindingsAccessor(),
				name = viewModel.name,
				subMenuOn = viewModel.subMenu,
				subMenuSelector = viewModel.subMenuSelector,
				$subMenu,
				$clonedMenu;

			if (subMenuOn) {
				$(element).addClass('has-sub-menu');
				$clonedMenu = $(subMenuSelector).clone();
				$clonedMenu.addClass('small-menu');
				$subMenu = $('.has-sub-menu');
				$subMenu.append($clonedMenu);
			}

		}
	};

	ko.applyBindings(Crivas.SiteViewModel(), scope);

};

Crivas.windowLoaded = function () {
	TweenLite.to($('body'), 2, { autoAlpha: 1, ease: Expo.easeOut });
};

Crivas.onWindowResize = function () {
	Crivas.windowWidth = Crivas.$window.width();
	Crivas.windowHeight = Crivas.$window.height();
};

$(document).ready(Crivas.init);
$(window).load(Crivas.windowLoaded);





