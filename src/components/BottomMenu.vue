<template>
	<mt-tabbar v-model="selected" fixed="true" >
	  
	  
	    <mt-tab-item id="tab4"  v-for="(item,index) in data" >
			<img slot="icon" src="../assets/arr.png">
			
			<router-link  :key="index" :to="item.path">{{item.title}}</router-link>
		</mt-tab-item>
	  
	</mt-tabbar>
</template>

<script>

export default {
  name: 'BottomMenu',
  props:{
        data:Array
    },
  data(){
  	return { 
            datai:this.data
        }
  },
  methods: { 
    SubBtn:function(){
    console.log(this.form.email)
    this.$router.push('/index');
    }
  }
}
</script>