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
				var url;
				if($('.J_newsListNavBar .firstList').hasClass('active')){
					url = opt.newsUrl
				}else{
					url = opt.pageCateUrl + $('.J_newsListNavBar .active').attr('data')
				}
				_this.getList(url,{
					offset : $('#listWrap').children(':last').attr('data'),
					d : 'next'
				},function(data){
					if(data.code == 0){
						var result = Template.parse(_this.listTemplate,{data:data});
						$("#listWrap").append(result);
			   		}
				});
			});
			$('.J_newsListNavBar').length && $('.J_newsListNavBar').delegate('.tab','click',function(e){
				var url = ($(this).hasClass('firstList') ? opt.newsUrl : opt.pageCateUrl) + $(this).attr('data')
				_this.getList(url,{
					d : 'next'
				},function(data){
					if(data.code == 0){
						var result = Template.parse(_this.listTemplate,{data:data});
						$("#listWrap").html(result);
						$(e.target).addClass('active').siblings().removeClass('active');
			   		}
				});
			});
		},
		getList : function(url,opt,callback){
			var _this = this;
			$.ajax({
			   	type: "get",
			   	url: url,
			   	data: opt,
			   	success: callback
			}).complete(function(){
				console.log('success');
			});
		} 
	};
	list.init();
};