Vue.component("navigation",{
	
	props:['leftPath','leftImage','title','rightPath','rightImage'],
	
	template:'<div class="navigation"> \
				<div class="nav-left"> \
					<a v-bind:href="leftPath"><img v-bind:src="leftImage"/></a> \
				</div> \
				<div class="nav-title"> \
					{{title}} \
				</div> \
				<div class="nav-right"> \
					<a v-bind:href="rightPath"><img v-bind:src="rightImage"/></a> \
				</div> \
			</div>'
	
})


