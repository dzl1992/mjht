<template>
    <div>
      <el-main>
        <div class="Htimg" v-for="(item, index) in items" :key="item.index" :body-style="{ padding: '0px' }">
          <img v-bind:src="item.url"/>
        </div>
      </el-main>
    </div>
    
  </template>  
    
  <script>  
    export default {  
    name: 'home',  
    data () {  
      return {
				items:[
					{url: require("../../style/img/ht1.jpg")},
					{url: require("../../style/img/ht2.jpg")},
					{url: require("../../style/img/ht3.jpg")}
				],
      }  
    },
    methods: {
     
    }
  }  
</script>  
  
<style scoped>
  .el-main {
  width: 100%;
  height: 100%;
  margin-top: 1.125rem;
  padding-top: 0;
  padding-bottom: 8.25rem;
  }
  .Htimg {
    width: 80%;
    height: 108.75rem;
    margin: 20px auto;
  }
  .Htimg > img {
    width: 100%;
    height: 100%;
  }
</style>