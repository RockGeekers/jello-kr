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
$.extend = function(origin,extend){
	for(var i in extend){
		origin[i] = extend[i];
	}
	return origin;
}
function Tween(opt){
	this.options = $.extend({
		dom : null,
		props : {},
		duration : 1000,
		easing : 'Lining',
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
	self._during = opt.duration;
	this.core();
};
Tween.prototype.addAnimation = function(opt){
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
Tween.prototype.setProperties = function(pname,pvalue){
	var self = this,
		_target = self._target,
		unit = Tween.cssPropMap[pname];
	_target.style[pname] = pvalue + (unit !== null ? unit : '');
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

Tween.prototype.start = function(argument){
	 // body...  
};
Tween.prototype.stop = function(){
	var self = this;
	clearTimeout(self._timeid);
};
Tween.prototype.wait = function(argument){
	var self = this;
	self.addAnimation({}); 
};
Tween.prototype.run = function(){
	var self = this,
		_currentProps = self.currentProps,
		_queueProps = self.queueProps,
		runtype = self.options.easing,
		during = self._during,
		i, prop, targetV;

	var _run = function(){
		i++;
		for(prop in _currentProps){
			targetV = Easing[runtype](i,_currentProps[prop],_queueProps[prop] - _currentProps[prop],self._during)
			self.setProperties(prop,targetV);
		}
		if( i < during) self._timeid = setTimeout(_run, 50);
	};
	_run();
};

Tween.cssPropMap = {top:"px",left:"px",bottom:"px",right:"px",width:"px",height:"px",opacity:""}