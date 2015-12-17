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
				_this.getList(opt.newsUrl,{
					offset : $(this).prev().attr('data'),
					d : 'next'
				});
			});
			$('.J_newsListNavBar').length && $('.J_newsListNavBar').click(function(){
				_this.getList(opt.pageCateUrl + $(this).attr('data'),{
					offset : $(opt.dom).prev().attr('data'),
					d : 'next'
				});
			})
		},
		getList : function(url,opt){
			$.ajax({
			   	type: "get",
			   	url: url,
			   	data: opt,
			   	success: function(data){
			   		if(data.code == 0){
						var result = Template.parse(_this.listTemplate,{list:data.data,path:data.contextpath});
						$(result).insertBefore('.J_listLoadMore');
			   		}
			   	}
			}).complete(function(){
				console.log('success')
			});
		} 
	};
	list.init();
};