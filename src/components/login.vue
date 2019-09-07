<template>
  <div class="page-field">
  <mt-header title="long long long long title">
  <router-link to="/" slot="left">
    <mt-button icon="back">back</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
    <div class="page-part">
      <mt-field placeholder="登录邮箱" type="email" v-model="form.email"></mt-field>
      <mt-field placeholder="密码" type="password" v-model="form.password"></mt-field>
      <mt-button type="primary" size="small" icon="button" @click.native="SubBtn();">登录</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
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