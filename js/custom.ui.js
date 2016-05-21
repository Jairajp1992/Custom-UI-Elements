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
			product.parent().attr("id", "custom-ui"+product.val().replace(" ",""));
			product.parent().addClass("custom-ui-checkbox icon-"+options.color+" custom-ui-unchecked");
		}
	});
	
	$(options.selector).css("width", "0px");
	
	$(".custom-ui-checkbox").click(function(){
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
		options.onChange();
	});
};
customUI.getChecked = function(selector){
	return $(".custom-ui-checked").children(selector);
};