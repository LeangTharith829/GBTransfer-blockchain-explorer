<template>
    <div class="profile-page">
        <section class="section section-skew">
            <div class="container" style="padding-top:80px">
                <h4>Transaction : {{$route.params.id}}</h4>
                <br/>
                <div>
                    <table class="table table-bordered" v-if="data.type=='transfer'">
                        <tr>
                            <th>Transaction ID</th>
                            <td>{{data.transactionId}}</td>
                        </tr>
                        <tr>
                            <th>From</th>
                            <td>{{beautyAddress(data.from)}}</td>
                        </tr>
                        <tr>
                            <th>To</th>
                            <td>{{beautyAddress(data.to)}}</td>
                        </tr>
                        <tr>
                            <th>Send Amount</th>
                            <td>{{data.send_amount}}</td>
                        </tr>
                        <tr>
                            <th>Receive Amount</th>
                            <td>{{data.receive_amount}}</td>
                        </tr>
                        <tr>
                            <th>Timestamp</th>
                            <td>{{formatTime(data.timestamp)}}</td>
                        </tr>
                    </table>
                    <table class="table table-bordered" v-if="data.type=='deposit'">
                        <tr>
                            <th>Transaction ID</th>
                            <td>{{data.transactionId}}</td>
                        </tr>
                        <tr>
                            <th>To Address</th>
                            <td>{{beautyAddress(data.to_address)}}</td>
                        </tr>
                        <tr>
                            <th>Deposit Amount</th>
                            <td>{{data.deposit_amount}}</td>
                        </tr>
                        <tr>
                            <th>Timestamp</th>
                            <td>{{formatTime(data.timestamp)}}</td>
                        </tr>
                    </table>
                    <table class="table table-bordered" v-if="data.type=='withdraw'">
                        <tr>
                            <th>Transaction ID</th>
                            <td>{{data.transactionId}}</td>
                        </tr>
                        <tr>
                            <th>From Address</th>
                            <td>{{beautyAddress(data.from_address)}}</td>
                        </tr>
                        <tr>
                            <th>Withdraw Amount</th>
                            <td>{{data.withdraw_amount}}</td>
                        </tr>
                        <tr>
                            <th>Timestamp</th>
                            <td>{{formatTime(data.timestamp)}}</td>
                        </tr>
                    </table>
                    <table class="table table-bordered" v-if="data.type=='lockbalance'">
                        <tr>
                            <th>Transaction ID</th>
                            <td>{{data.transactionId}}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>{{beautyAddress(data.address)}}</td>
                        </tr>
                        <tr>
                            <th>Lock Amount</th>
                            <td>{{data.lock_amount}}</td>
                        </tr>
                        <tr>
                            <th>Timestamp</th>
                            <td>{{formatTime(data.timestamp)}}</td>
                        </tr>
                    </table>
                    <table class="table table-bordered" v-if="data.type=='unlockbalance'">
                        <tr>
                            <th>Transaction ID</th>
                            <td>{{data.transactionId}}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>{{beautyAddress(data.address)}}</td>
                        </tr>
                        <tr>
                            <th>Unlock Amount</th>
                            <td>{{data.unlock_amount}}</td>
                        </tr>
                        <tr>
                            <th>Timestamp</th>
                            <td>{{formatTime(data.timestamp)}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import moment from 'moment'

export default {
   data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      data: 'blockchain/transaction',
      fetching: 'blockchain/fetchingTransaction',
    })
  },
  mounted() {
    console.log('$route.params.id', this.$route.params.id)
    this.fetch(this.$route.params.id)
  },
  watch: {  
    $route(to, from) {
      console.log('$route.params.id', this.$route.params.id)
      this.fetch(this.$route.params.id);
    }
  },
  methods: {
    ...mapActions({
      fetch: 'blockchain/fetchTransaction'
    }),
    formatTime(str) {
        return moment(str).format('YYYY-MM-DD HH:mm:ss')
    },
    beautyAddress(str) {
        return str.replace("resource:org.greenbay.Address#", "")
    }
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
