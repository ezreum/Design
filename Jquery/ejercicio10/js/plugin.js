(function($){
	$.fn.tipTool = function() {
        $("<div class='tip text-success'></div>").appendTo("body");
	$(this).on("mousemove",function(e){		
		$(".tip").text($(this).data("tip"));
		$(".tip").css({
			"top": e.pageY+5,
			"left": e.pageX+5,
			"display": "block"	
		});
	});
	$(this).on("mouseleave", function(){
		$(".tip").css("display","none");
	})


	}
})(jQuery);