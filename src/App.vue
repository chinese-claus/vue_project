<!-- 以后项目的根组件 -->
<template>
	<div id="tmp1">
		<mt-header fixed title="轻松购"></mt-header>
		<span @click="backto" v-show="isshow">&lt;</span>
		<router-view></router-view>
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-chat">
				<span class="mui-icon mui-icon-email">
				
				</span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact">
					<span class="mui-badge">{{num1}}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
	import {vm,_num} from './vm.js';
	import {localgetItem} from './localstorage.js';
	vm.$on(_num,function(data){
         var span_box=document.querySelector(".mui-badge");
         span_box.innerHTML=parseInt(span_box.innerHTML||0)+data;
     })
	export default {
	  	data(){
	  		return {
	  			num1:0,
	  			isshow:''
	  		}
	  	},
	  	methods:{
	  		backto(){
         		this.$router.go(-1);
 			}
	  	},
	  	mounted(){
		setTimeout(function(){
				var newarr=localgetItem();
			this.list=newarr;
			let sum=0;
			for(var i=0;i<newarr.length;i++){
				var arr=newarr[i];
				sum=arr.count+sum;
			}
			this.num1=sum;
		},10)
		},
	  	 watch:{
         '$route':function(newroute,oldroute){
                 if(newroute.path.toLowerCase() == '/home'){
                         this.isshow = false;
                 }else{
                         this.isshow = true;
                 }
         }
 }
	}

</script>

<style scoped>
	.mint-header {
		background-color:gray;
		opacity: 0.5;
	}
	.red{
		color: red;
	}
	.mui-icon .mui-badge {
		display:inline-block;
		background-color:red;
		opacity:0.7;
		text-align:center;
		border-radius:36px 28px 36px 2px;
	}
	#tmp1>span {
	display:inline-block;
	height:30px;
	font-size:30px;
	position:fixed;
	top:10px;
	left:5px;
	bottom:0;
	z-index:222;
	color:white;
	cursor:pointer;
	}
	
</style>