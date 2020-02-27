(function($){
	$.fn.preparadorInput = function( prepuesto, clase1, clase2 ) {
		this.on("mouseover", function() {
			$(this).attr("placeholder", prepuesto);
			$(this).addClass(clase1);
			$(this).addClass(clase2);
		})
		this.on("mouseout", function() {
			$(this).val("");
			$(this).removeClass(clase1);
			$(this).removeClass(clase2);
		})

	}
})(jQuery);