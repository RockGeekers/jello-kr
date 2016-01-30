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
		loop : false,
		callback : function(){}
	},opt || {});

	this.init();
}
Tween.prototype.init = function(){
	var self = this, opt = self.options || {};

	self._queueProps = [];
	self._initProps = [];
	self._queueAnimate = [];
	self._currentProps = [];
	self._target = opt.dom ;
	this.core();
};
Tween.prototype.addAnimation = function(argument){
	 // body...  
};
Tween.prototype.addProps = function(props){
	var self = this, opt = self.options || {},
		props = props ? props : opt.props || {},
		oldprop;

	for(var p in props){
		if(self._initProps[p] === undefined){
			oldprop = self._target[p];
			if(p in Tween.cssPropMap){
				oldprop = self.getStyleProp(p,value); //当前属性值 
			}
			self._initProps = self._currentProps = (oldValue === undefined) ? null : oldprop;
		} else {
			oldprop = self.currentProps[p]; 
		}
		self.queueProps[p] = props[p];
	}
	return self.queueProps;
};
Tween.prototype.setProperties = function(props){
	document.getElementById("animation").style.opacity=args;
};
Tween.prototype.getStyleProp = function(prop,value){
	var map = Tween.cssPropMap,
		self = this,
		_target = self._target,
		style,unit;
	if((unit = map[prop]) == null || !(style = _target.style)) { return value;}
	var propv = _target.currentStyle ? _target.currentStyle[prop] ? getComputedStyle(_target,null)[prop] ;
	if(!propv) return 0;
	var i = propv.length - unit.length;
	return parseInt(propv.substr(0,i));
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
};

Tween.cssPropMap = {top:"px",left:"px",bottom:"px",right:"px",width:"px",height:"px",opacity:""}