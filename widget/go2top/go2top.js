/* build Date:2014-08-21 12:14:39 PM author:huangjia */
var $ = require('common:jquery');

! function(a, b, c) {
		function d() {
			var a = 0 !== h.length ? h.height() : null,
				b = 0 !== i.length ? i.offset().top + i.height() : null,
				c = a || b;
			return c && c > 50 ? c : 250
		}
		var e = a("#J_backTop .j_small-rcode"),
			f = a("#J_backTop .j_back-top"),
			g = a("#J_backTop .j_hf-app-content"),
			h = a("#header"),
			i = a("#lpDetailNav");
		e.mouseover(function() {
			g.show()
		}).mouseout(function() {
			g.hide()
		}), f.click(function() {
			c.body.scrollTop ? c.body.scrollTop = 0 : c.documentElement.scrollTop = 0
		}), a(b).scroll(function() {
			var a = c.body.scrollTop || c.documentElement.scrollTop,
				b = d();
			a > b ? f.removeClass("hide") : f.addClass("hide")
		})
}($ || jQuery, window, document);