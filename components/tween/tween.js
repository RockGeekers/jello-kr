function $(selector){
	if(window === this){
		new $(properties); 
	}
	var result = [];
    if (typeof properties === 'string') {
        result = document.querySelectorAll(properties);
    }
    if (result.length > 0) {
        for (var i = 0; i < result.length; i++) {
            this[i] = result[i];
        }
        this.length = result.length;
    }
    if(properties instanceof($)){
    	return properties;
    }
    return this;
}
function Tween(opt){
	this.options = $.extend({
		dom : null,
		props : {},
		duration : 1000,
		easing : 'lining',
		callback : function(){}
	},opt || {});

	this.init();
}
Tween.prototype.init = function(){
	var _this = this;
	this.core();
};
Tween.prototype.addAnimation = function(argument){
	 // body...  
};
Tween.prototype.setProperties = function(args){
	document.getElementById("animation").style.opacity=args;
};
Tween.prototype.run = function(argument){
	 // body...  
};
Tween.prototype.start = function(argument){
	 // body...  
};
Tween.prototype.stop = function(argument){
	 // body...  
};
Tween.prototype.core = function(){
	var _this = this;
	for (var i = 0; i < 10; i++) {
		setTimeout(function(pos){
			return function(){
                _this.setProperties(pos);
            }
		}((i/10)), i * 50);
	};
}