$(document).ready(function(){
	var options = {
			color: "dark-orange",
			selector: ".customCheckBox",
			onCheck: onCheck,
			onUnCheck: onUnCheck
	};
	customUI.createCustomCheckBoxes(options);
	$(".customCheckBox").on("change",onChange1);
	
});

function onCheck(name, value){
	
}
function onUnCheck(name, value){
	$("#customCheckBoxBtn").val("Check All");
}
function onCheck1(name, value){
	//alert("checked "+name+" "+value);
}
function onUnCheck1(name, value){
	$("#customCheckBox1Btn").val("Check All");
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
			onCheck: onCheck1,
			onUnCheck: onUnCheck1
	};
	
	customUI.createCustomCheckBoxes(options);
	$(".customCheckBox1").on("change",onChange2);
}

function clickAll1(button){
	if($(button).val() == "Check All"){
		customUI.checkAll(".customCheckBox");
		$(button).val("Uncheck All");
	}
	else{
		customUI.unCheckAll(".customCheckBox");
		$(button).val("Check All");
	}
}

function clickAll2(button){
	if($(button).val() == "Check All"){
		customUI.checkAll(".customCheckBox1");
		$(button).val("Uncheck All");
	}
	else{
		customUI.unCheckAll(".customCheckBox1");
		$(button).val("Check All");
	}
}