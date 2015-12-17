var $ = require('jquery');
var Template = require('template');
var app = module.exports = function(opt) {
	var list = {
		init : function(){
			this.listTemplate = __inline('./newslist.tpl');
			this.addEvent();
		},
		addEvent : function(){
			var _this = this;
			$(opt.dom).click(function(){
				console.log(_this.listTemplate);
			});
		}
	};
	list.init();
	$(opt.dom).click(function(){
		$("#mask").css('height', document.body.scrollHeight).show();
	})
	$("#mask").click(function(){
		$(this).hide();
	})
};