$(function(){
	var $currentInput = $("input[name='input[num1]']");
	var $operation = $("input[name='input[operation]']");
	var	$displayField = $("#display");

	var inputs = [];
	var currentInput = "";
	var action = "";


	$(".numbers").on("click", "button", function(event){
		var val1 = $currentInput.val();

		$currentInput.val(val1 + $(this).data("num"))
		currentInput += $(this).data("num");

		$displayField.val(currentInput);
	});

	$(".operations").on("click", "button", function(event){
		
		var operation_value = $operation.val();

		if(operation_value == ""){

			action = $(this).data("operation");
			$operation.val($(this).data("operation"));
			$currentInput = $("input[name='input[num2]']")
			
			inputs.push(currentInput);
			currentInput = "";

		} else {
			alert("Ooops! You've already entered an operation!")
		}
		console.log(currentInput)
		console.log(inputs)
		console.log(action)
	});


	$("#input").on("submit", function(event){
		console.log(event)
		event.preventDefault();


		console.log(inputs)
		inputs.push(currentInput)
		console.log(inputs)



	});














});
