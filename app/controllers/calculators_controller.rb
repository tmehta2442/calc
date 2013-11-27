class CalculatorsController < ApplicationController

	def new
		
	end

	def plus
		inputs = params[:inputs]
		input1 = inputs[0].to_i
		input2 = inputs[1].to_i
		result = input1 + input2
		render :json => {result: result}
	end

	def minus
		inputs = params[:inputs]
		input1 = inputs[0].to_i
		input2 = inputs[1].to_i
		result = input1 - input2
		render :json => {result: result}
	end

	def multiply
		inputs = params[:inputs]
		input1 = inputs[0].to_i
		input2 = inputs[1].to_i
		result = input1 * input2
		render :json => {result: result}
	end

	def divide
		inputs = params[:inputs]
		input1 = inputs[0].to_f
		input2 = inputs[1].to_f
		result = input1 / input2
		render :json => {result: result}
	end

end
