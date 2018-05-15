Vue.component("tabbar",{
	
	props:['index'],
	
	template:'<div class="tabbar"> \
				<ul> \
					<li id="main"  v-bind:class="{active:index==0}"><a href="index.html"> \
						<span class="tab-item-img"></span> \
						<span class="tab-item-title" id="">首页</span> \
					</a></li> \
					<li id="read"  v-bind:class="{active:index==1}"><a href="read.html"> \
						<span class="tab-item-img"></span> \
						<span class="tab-item-title" id="">阅读</span> \
					</a></li> \
					<li id="music" v-bind:class="{active:index==2}"><a href="music.html"> \
						<span class="tab-item-img"></span> \
						<span class="tab-item-title" id="">音乐</span> \
					</a></li> \
					<li id="movie" v-bind:class="{active:index==3}"><a href="movie.html"> \
						<span class="tab-item-img"></span> \
						<span class="tab-item-title" id="">影视</span> \
					</a></li> \
				</ul> \
			</div>'
})