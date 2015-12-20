var $ = require('jquery');
var Template = require('template');
var app = module.exports = function(opt){
	var detail = {
		init : function(){
			this.commentTemplate = __inline('./detail.tpl');
			this.addEvent();
		},
		addEvent : function(){
			var _this = this;
			var getlogin = setInterval(function(){
				if(loginInfo){
					clearInterval(getlogin);
					if(loginInfo.isUserLogin){
						$('#J_userInfo').find('.avatar').css('backGroundImage',loginInfo.image);
						$('.require-login').show();
						$('.J_requirelogin').hide();
					}else{
						$('.require-login').hide();
						$('.J_requirelogin').show();
					}
					_this.getList(opt.commentUrl,{
						author_id : loginInfo.id
					},'get',function(data){
						if(data.code == 0){
							if(data.data.length){
								var result = Template.parse(_this.commentTemplate,{data:data});
								$('#J_comments').html(result);
							}
						}
					});
				}
			},100);
			$('#J_comments').delegate('.pull-right','click',function(){

			});
		},
		getList : function(url,opt,type,callback){
			var _this = this;
			$.ajax({
			   	type: type,
			   	url: url,
			   	data: opt,
			   	success: callback
			}).complete(function(){
				console.log('success');
			});
		} 
	};
	detail.init();
}

