var customUI = new Object();

//Custom Checkboxes - Begin

/**
 * Array to store the css classes corresponding to icon colors supported
 */
customUI.customCheckBoxesColor = [
	"icon-black", 
	"icon-green", 
	"icon-dark-green",
	"icon-orange",
	"icon-dark-orange",
	"icon-red"
];

/**
 * Function to replace default checkboxes with custom checkboxes 
 * @param {Object} options - Contains selector, color, onCheck function, onUnCheck function
 * options.selector - jquery selector to identify the checkboxes to be replaced
 * options.color - color of the check mark
 * onCheck - Function to call when checkbox is checked. Takes 2 params { name, value }
 * onUnCheck - Function to call when checkbox is unchecked. Takes 2 params { name, value }
 */
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
	$(options.selector).addClass("hidden-checkbox");
};

/**
 * Function to get all the checked checkboxes for a selector 
 * @param {Object} selector - jquery selector to identify which checkboxes should be  returned
 */
customUI.getChecked = function(selector){
	return $(".custom-ui-checked").children(selector);
};

/**
 * Function to uncheck all checkboxes for a given selector 
 * @param {Object} selector - jquery selector to identify the checkboxes
 */
customUI.unCheckAll = function(selector){
	var checks = $(".custom-ui-checked").children(selector);
	checks.trigger("click");
};

/**
 * Function to check all checkboxes 
 * @param {Object} selector - jquery selector
 */
customUI.checkAll = function(selector){
	var checks = $(".custom-ui-unchecked").children(selector);
	checks.trigger("click");
};
