<template>
    <div class="profile-page">
        <section class="section section-skew">
            <div class="container" style="padding-top:80px">
                <h3>Address : {{$route.params.id}}</h3>
                <br/>
                <div>
                    <table class="table table-bordered">
                        <tr>
                            <th>Address</th>
                            <td>{{data.address}}</td>
                        </tr>
                        <tr>
                            <th>Currency</th>
                            <td>{{data.currency}}</td>
                        </tr>
                        <tr>
                            <th>Available Balance</th>
                            <td>{{data.available_balance}}</td>
                        </tr>
                        <tr>
                            <th>Lock Balance</th>
                            <td>{{data.lock_balance}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
   data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      data: 'blockchain/address',
      fetching: 'blockchain/fetchingAddress',
    })
  },
  mounted() {
      console.log('$route.params.id', this.$route.params.id)
    this.fetch(this.$route.params.id);
  },
  watch: {  
    $route(to, from) {
      console.log('$route.params.id', this.$route.params.id)
      this.fetch(this.$route.params.id);
    }
  },
  methods: {
    ...mapActions({
      fetch: 'blockchain/fetchAddress'
    })
  }
};
</script>
<style lang="scss" scoped>
.table-compact {
    th, td {
        padding:10px;
    }
}
</style>
