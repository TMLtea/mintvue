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
import axios from 'axios'

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
    let postData = this.$qs.stringify({
            itemId: 7214297708692480,        // 参数 firstName
            star: 5,    // 参数 lastName
            remark: "服务良好，不错下次再来"
    });
  console.log(postData)
    axios.post('http://localhost:8180/fcm-app/component/addOrderComments', postData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    
    }
  }
}
</script>

<style scoped>

</style>