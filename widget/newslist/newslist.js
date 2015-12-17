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
				var infoId = $(this).prev().attr('data'),
					url = opt.newsUrl;
				_this.getList(url,{
					offset : infoId,
					d : 'next'
				},function(data){
					Template.parse(_this.listTemplate,{list:data.data});
				});
			});
			$('.J_newsListNavBar').length && $('.J_newsListNavBar').click(function(){
				var infoId = $(opt.dom).prev().attr('data'),
					url = opt.newsUrl + $(this).attr('data');
				_this.getList(url,{
					offset : infoId,
					d : 'next'
				},function(data){
					Template.parse(_this.listTemplate,{list:data.data});
				});
			})
		},
		getList : function(url,opt,callback){
			var infoId = 
			$.ajax({
			   	type: "get",
			   	url: url,
			   	data: opt,
			   	success: callback
			}).complete(function(){
				console.log('xx')
			});
		} 
	};
	list.init();
};