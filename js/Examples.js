$(document).ready(function(){
	var options = {
			color: "dark-orange",
			selector: ".customCheckBox",
			onCheck: onCheck,
			onUnCheck: onUnCheck,
			onChange: onChange1
	};
	customUI.createCustomCheckBoxes(options);
	
});

function onCheck(name, value){
	//alert("checked "+name+" "+value);
}
function onUnCheck(name, value){
	//alert("unchecked "+name+" "+value);
}
function onChange1(){
	var str = "<ul>";
	var checked = customUI.getChecked(".customCheckBox");
	checked.each(function(idx, element){
		var check = $(element);
		str += "<li>" + check.val() + "</li>";
	});
	str += "</ul>";
	$("#results1").html(str);
}
function onChange2(){
	var str = "<ul>";
	var checked = customUI.getChecked(".customCheckBox1");
	checked.each(function(idx, element){
		var check = $(element);
		str += "<li>" + check.val() + "</li>";
	});
	str += "</ul>";
	$("#results2").html(str);
}

function createCheckBoxes(){
	var values = ["One", "Two", "Three", "Four"];
	var str = "";
	for(var index in values){
		str += "<tr>";
		str += "<td>" + values[index] + "</td>";
		str += "<td><input type=\"checkbox\" class=\"customCheckBox1\" name=\"customCheckbox1\" value=\""+ values[index] +"\" /></td>";
		str += "</tr>";
	}
	$("#checkBoxesTable2").append(str);
	var options = {
			color: "red",
			selector: ".customCheckBox1",
			onCheck: onCheck,
			onUnCheck: onUnCheck,
			onChange: onChange2
	};
	
	customUI.createCustomCheckBoxes(options);
}