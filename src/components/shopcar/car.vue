<template>
	<div id="tmp1">
		<div class="shopcar">
			<div class="_soncar clear" v-for="item in list">
				<div class="clear title">
					<h4>{{item.title}}</h4>
					<span><a href="javascript:;">编辑</a><a href="javascript:;">完成</a></span>
				</div>
				<div>
				<h4>删除</h4>
				<div>
					<mt-switch v-model="value" @change="turn"></mt-switch>
				</div>
				<div class="clear _shop_car_right">
				<img :src="item.thumb_path">
					<choosequan></choosequan>
					<ul>
						<li>热卖中</li>
						<li>￥:{{item.sell_price}}</li>
						<li><s>￥:{{item.market_price}}</s></li>
						<li>x:{{item.count}}</li>
					</ul>
				</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script scoped>
import Vue from 'vue';
import { Switch } from 'mint-ui';
import choosequan from '../choosequan.vue';
import {localgetItem} from '../../localstorage.js'
	export default{
		data(){
			return {
				value:true,
				list:[],
				id:''
			}
		},
		methods:{  
   			 turn:function(){  
        		console.log(this.value)  
   		 	},
   		 	getcardata:function(){
   		 		var url=this.$domain.apidomain +'/api/goods/getshopcarlist/'+this.id;
   		 		this.$http.get(url).then(function(res){
				const argu=res.body.message;
				this.list=argu;
				console.log(this.list);
			})
   		 	}  
  		}, 
		mounted(){
			var newarr=localgetItem();
			this.list=newarr;
			for(var i=0;i<newarr.length;i++){
				var arr=newarr[i];
				this.id=this.id+arr.id+',';
			}
			this.id=this.id.substring(0,this.id.length-1);
			this.getcardata();
			var btnlist=document.querySelectorAll(".title .mint-switch");
			console.log(btnlist);
		},
		components:{
			choosequan
		}
		
	}
</script>

<style scoped>
        @media screen and (device-width: 320px){
             html {
                font-size: 16px;
            }
        }
        @media screen and (device-width: 360px){
            html {
                font-size: 18px;
            }
        }
        @media screen and (device-width: 375px){
            html {
                font-size: 18.75px;
            }
        }
        @media screen and (device-width: 414px){
            html {
                font-size: 20.7px;
            }
        }
	
	* {
		list-style:none;
		box-sizing:border-box;
		margin:0;
		padding:0;
	}
	.clear:after, .clear:after {
  		content: '';
  		display: block;
  		height: 0;
  		clear: both;
	}
	.title {
		border-bottom:0.0625rem solid #8080855c;
		margin-bottom:0.625rem;

	}
	.clear>h4 {
		display:inline-block;
		font-size:0.6875rem;
		color:#0000ff8a;
		font-weight:normal;
	}
	._soncar {
	border-bottom:0.0625rem solid #8080855c;
	padding:0.1875rem 0;
	position:relative;
	}
	._soncar>div:first-child{
		padding:0 0.625rem;

	}
	._soncar div span {
		padding:0.1875rem 0.125rem;
		float:right;
		border-left:0.0625rem solid #8080855c;
	}
	._soncar div span a {
		color:#b1becc;
		font-size:0.875rem;
		border:0.0625rem solid gray;
		cursor:pointer;
	}
	._soncar div span a:hover {
		background-color:blue;
	}
	 ._soncar>div:last-child ul{
	 	float:right;
	 	color:#8080855c;
	 	font-size:0.875rem;
	 	margin-right:0.625rem;
	 }
	 ._soncar>div:last-child ul>li:last-child {
	 	padding-left:0.25rem;
	 }
	 ._soncar>div:last-child ul>li:first-child {
	 	color:red;
	 }
	 ._shop_car_right {
	 	float:right;
	 }
._soncar>.mint-switch {
	display:inline-block;
	position:absolute;
	top:3.75rem;
	left:0.625rem;
}
#tmp1>.shopcar #tmp3{
	position:absolute;
	top:4.375rem;
}
.shopcar>._soncar>._shop_car_right {
	
	padding:0.625rem 0;
}
#tmp3{
    display: inline-block;
    position: relative;
    top: 1.6875rem;
    left: 10rem;
}
._shop_car_right img {
	  display:inline-block;
	  width:3.75rem;
	  height:3.75rem;
	  position:absolute;
	  top:2.125rem;
	  left:4.8125rem;
	  	  }
</style>

