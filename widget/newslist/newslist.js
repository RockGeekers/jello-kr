var $ = require('jquery');
var app = module.exports = function(opt) {
	$(opt.dom).click(function(){
		$("#mask").css('height', document.body.scrollHeight).show();
	})
	$("#mask").click(function(){
		$(this).hide();
	})
};