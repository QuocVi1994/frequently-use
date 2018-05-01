<template>
	<div id="tmpl">
		
		<div class="row">
			<mt-switch class="switch"></mt-switch>
			<img class="img" src="">
			<div class="inforight">
				<h4></h4>
				<div class="bottom">
					<ul>
						<li>￥6666</li>
						<li>
							<v-numbox></v-numbox>
						</li>
						<li><a href="javascript:void(0)">删除</a></li>
					</ul>
				</div>
			</div>
		</div>

		<div id="total">
			<div class="desc">
				<ul>
					<li>总计（不含运费）</li>
					<li>已勾选商品10件,总价:￥1000元</li>
				</ul>
			</div>
			<div id="button">
				<mt-button  type="danger" size="small">去结算</mt-button>
			</div>
		</div>
		
	</div>
</template>

<script>
	
	export default {
		
		data() {
			return {
				
			};
		},
		
		created() {
			
		},
		
		methods: {
			
		}
		
	};
</script>

<style scoped>
	.row{
		border-bottom: 1px solid rgba(0,0,0,0.3);
		height: 102px;
		display: flex;
		padding: 5px;
	}

	.switch{
		flex:0 0 52px;
	}

	.img{
		margin-left: 5px;
		height: 75px;
		width: 75px;
		flex: 0 0 85px;
	}

	.inforight{
		margin-left: 5px;
		flex:1;
	}
	
	.inforight ul{
		padding-left: 0px;
	}
	
	.inforight li{
		list-style: none;
		display: inline-block;
	}

	.inforight h4{
		color: #0094ff;
		font-size: 14px;
	}

	.bottom li:first-child{
		color:red;
		margin-right: 5px;
	}

	.bottom li:last-child{
		margin-left: 5px;
	}
	
	#total{
		height: 100px;
		background-color: rgba(0,0,0,0.1);
		display: flex;
		padding: 5px;;
	}

	#total ul {
	 padding-left: 0px;
	}
	
	#total li{
		list-style: none;
		font-size: 14px;
	}

	#button{
		flex:0 0 60px;
		margin: 30px 0 0 0 ;
	}

	.desc{

		flex:1;
	}
</style>