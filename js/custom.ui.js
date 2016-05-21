var customUI = new Object();

customUI.customCheckBoxesColor = [
	"icon-black", 
	"icon-green", 
	"icon-dark-green",
	"icon-orange",
	"icon-dark-orange",
	"icon-red"
];

customUI.createCustomCheckBoxes = function(options){
	var checkBoxes = $(options.selector);
	
	checkBoxes.each(function(idx, check) {
		var product = $(check).first();
		if(!product.parent().hasClass("custom-ui-checkbox")){
			product.wrap("<div>");
			product.parent().addClass("custom-ui-checkbox icon-"+options.color+" custom-ui-unchecked");
			product.parent().bind("click", function(){
				if($(this).hasClass("custom-ui-unchecked")){
					$(this).removeClass("custom-ui-unchecked");
					$(this).addClass("custom-ui-checked");
					$(this).find(options.selector).attr('checked', true);
					options.onCheck($(this).find(options.selector).attr("name"), $(this).find(options.selector).val());
				}
				else{
					$(this).addClass("custom-ui-unchecked");
					$(this).removeClass("custom-ui-checked");
					$(this).find(options.selector).attr('checked', false);
					options.onUnCheck($(this).find(options.selector).attr("name"), $(this).find(options.selector).val());
				}
				$(this).find(options.selector).trigger("change");
			});
		}
	});
	
	$(options.selector).css("width", "0px");
	
};
customUI.getChecked = function(selector){
	return $(".custom-ui-checked").children(selector);
};
customUI.unCheckAll = function(selector){
	var checks = $(".custom-ui-checked").children(selector);
	checks.trigger("click");
};
customUI.checkAll = function(selector){
	var checks = $(".custom-ui-unchecked").children(selector);
	checks.trigger("click");
};