<template>
  <mt-cell-swipe
    title="text"
    :right="[
      {
        content: 'Delete',
        style: { background: 'red', color: '#fff' },
        handler: () => this.$messagebox('delete')
      }
    ]"></mt-cell-swipe>
</template>

<script>
export default {
  name: 'me',
  data(){
  return{
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