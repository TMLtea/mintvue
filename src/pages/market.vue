<template>
  <mt-cell title="标题文字" value="集市"></mt-cell>
</template>

<script>
export default {
  name: 'market',
  data(){
  return{
  	form:{
  		email:'',
  		password:''
  	}
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

<style scoped>

</style>