$(function(){
		
		var $firstInput = $("input[name='input[num1]']");
		var $operation = $("input[name='input[operation]']");
		var $secondInput = $("input[name='input[num2]']")

		$(".numbers").on("click", "button", function(event){
			var val1 = $firstInput.val();
			$firstInput.val(val1 + $(this).data("num"))
		});

		$(".operations").on("click", "button", function(event){
			var operation_function = $operation.val();
			$operation.val(operation_function + $(this).data("operation"))
		});

		$(".numbers").on("click", "button", function(event) {
			console.log(this);
			var val2 = $secondInput.val();
			$secondInput.val(val2 + $(this).data("num"))
		});
});
