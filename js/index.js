$(function(){
	var search_bg=$('.search_bg');
	$(window).on('scroll',function(){
		var _this_top=$(window).scrollTop();
		var this_opacity=_this_top/200;
		if (this_opacity>=0.85) this_opacity=0.85;
		//console.log(_this_top);
		search_bg.css('opacity',this_opacity);
	});
/*	$('.search_inp').on('focus',function(){
		$('header').css({
			'position':'absolute',
			'top':$(window).scrollTop()+'px'
		})
	}).on('focusout',function(){
		$('header').css({
			'position':'fixed',
			'top':0
		})
	})*/
});