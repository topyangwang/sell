<template>
  <div>
      <v-header :seller="seller"></v-header>
      <div class="tab border-1px">
          <div class="tab-item">
            <router-link class='tab-a' to="/goods">商品</router-link>
          </div>
          <div class="tab-item">
            <router-link class='tab-a' to="/ratings">评论</router-link>
          </div>
          <div class="tab-item">
            <router-link class='tab-a' to="/seller">商家</router-link>
          </div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header/header';
const ERR_OK=0;
export default {
  name: 'app',
  components: {
    'v-header':header
  },
  data(){
    return {
      seller:{}
    }
  },
  http:{
    root:''
  },
  created(){
    this.$http.get('/api/seller').then((response)=>{
      var res=response.body;
      console.log(response)
      if(res.errno==ERR_OK){
        this.seller=res.seller;
        console.log(this.seller)
      }
    },error=>{
      console.log(error)
    })
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/minxin.styl"
  .tab
    display:flex
    width:100%
    height: 40px
    line-height:40px
    //border-bottom :1px solid rgba(7,17,27,.1)
    border-1px(rgba(7,17,27,.1))
    .tab-item
      flex:1
      text-align:center
      & > .tab-a
          display :block
          font-size :14px
          color:rgb(77,85,93)
          &.active
            color:rgb(240,20,20)







</style>
