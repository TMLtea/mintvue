<template>

  <div id="app">
    <div class="hd"><mt-header fixed title="我的世界"></mt-header></div>
    
    <router-view/>

    <tabbar :data="tabbarData"></tabbar>
  </div>
</template>

<script>
import tabbar from './components/BottomMenu'

export default {
  name: 'App',
  data() {
    return {
        tabbarData:[
            {title:'首页',icon:true,path:'/index'},
            {title:'集市',icon:false,path:'/market'},
            {title:'发现',icon:false,path:'/find'},
            {title:'我的',icon:false,path:'/me'},
            ]
    }
  },
  components:{
      tabbar,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.hd{
  display: block;
  height: 2.500em;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
</style>
