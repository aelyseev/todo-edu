<div class="td-type-block" data-type="{{name}}">
	<div class="type-head">
		<span class="task-type">{{title}}</span>
		<span class="task-period">{{term}}</span>
	</div>
	{{#each tasks}}
		<div class="td-task-details">{{this.text}}</div>
	{{/each}}
</div>