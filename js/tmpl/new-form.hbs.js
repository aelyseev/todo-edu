<div class="td-type-block pure-form">
	<textarea class="pure-input-1-2 {{newTask}}" placeholder="Work or fun"></textarea>
	<div class="pure-radio td-type-selector">
		<input class="{{typeSelector}}" type="radio" name="period" value="today" checked="checked"> Today
		<input class="{{typeSelector}}" type="radio" name="period" value="week"> Week
		<input class="{{typeSelector}}" type="radio" name="period" value="anyday"> Anywhere
	</div>
	<button disabled="disabled" style="margin-top: 12px" class="pure-button pure-button-primary {{button}}">Add todo</button>
</div>