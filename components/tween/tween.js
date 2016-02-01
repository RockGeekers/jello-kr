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
	self._queueAnimate = [];
	self._tweens = [];
	self._target = opt.dom ;
	self._during = opt.duration;
};
Tween.prototype.addAnimation = function(opt){
	 var self = this,
	 if(opt.d){
	 	self._during = self._during + opt.d;
	 }
	 self._queueAnimate.push(opt);
	 self.addProps(opt.targetprop); 
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
	pname.indexOf('-') !== -1 && pname.replace(/(\w+)\-(\w+)/,function(result,_1,_2){
		if(result){
			pname = _1 + _2.replace(/(\w)/,function(v){return v.toUpperCase()});
		}
	});
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

Tween.prototype.start = function(){
	var self = this,
		opt = self.options,
		props = opt.props;
	//currentprop, targetprop, duration, 

	self.addAnimation({curP : (self._currentProps === undefined ? null : self._currentProps), targetprop : self.getStyleProp(props), d : self._during});
	return self;
};

Tween.prototype.stop = function(){
	var self = this;
	clearTimeout(self._timeid);
	self._currentProps = undefined;
	self._initProps = undefined;
	self._queueAnimate.length = 0;
};

Tween.prototype.compelete = function(callback){
	if (callback ) {};
};

Tween.prototype.wait = function(time){
	var self = this;
	self.addAnimation({curP : self._currentProps, targetprop : self._currentProps , d : time}); 
};

Tween.prototype.pause = function(){
	var self = this,
		_process = self._process,
		_currentProps = self._currentProps,
		_queueProps = self._currentProps;
		
	clearTimeout(self._timeid);
	for(prop in _queueProps){
		_currentProps[prop] = (_queueProps[prop] - _currentProps[prop]) * _prop + _currentProps[prop];
	}
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
		self._process = i / during ;
		if( i < during) self._timeid = setTimeout(_run, 50);
	};
	_run();
};

Tween.cssPropMap = {top:"px",left:"px",bottom:"px",right:"px",width:"px",height:"px",opacity:""}