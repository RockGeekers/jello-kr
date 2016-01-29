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

	},opt || {});

	this.init();
}

Tween.prototype.addAnimation = function(argument){
	 // body...  
};
Tween.prototype.setProperties = function(argument){
	 // body...  
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
