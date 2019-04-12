<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab-wrapper">
      <tab></tab>
    </div>
    <!--<div class="tab border-1px">-->
      <!--<div class="tab-item">-->
        <!--<router-link to="/goods">商品</router-link>-->
      <!--</div>-->
      <!--<div class="tab-item">-->
        <!--<router-link to="/ratings">评论</router-link>-->

      <!--</div>-->
      <!--<div class="tab-item">-->
        <!--<router-link to="/seller">商家</router-link>-->
      <!--</div>-->
    <!--</div>-->
    <!--<router-view></router-view>-->

  </div>
</template>
<script type="text/ecmascript-6">
  import VHeader from 'components/v-header/v-header.vue'
  import Tab from 'components/tab/tab'
  import { getSeller } from 'api'

  export default {
    name: 'app',
    data() {
      return {
        seller: {}
      }
    },
    computed: {

    },
    created() {
      this._getSeller()
    },
    methods: {
      _getSeller() {
        getSeller().then((seller) => {
          this.seller = seller
        })
      }
    },
    components: {
      VHeader,
      Tab
    }
  }
</script>
<style lang="stylus">
  @import "common/stylus/reset.styl"
  @import "common/stylus/mixin.styl"
  #app
    .tab-wrapper
      position: fixed
      top: 136px
      left: 0
      right: 0
      bottom: 0

</style>
