<template>
  <mt-cell title="标题文字" value="发现"></mt-cell>
</template>

<script>
export default {
  name: 'find',
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