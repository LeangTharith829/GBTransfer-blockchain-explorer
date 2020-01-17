<template>
    <div class="profile-page">
        <section class="section section-skew">
            <div class="row">
                <div class="col-md-12" style="padding:80px 80px 20px;min-height:400px">
                   
                    <div class="row p-1">
                        <h3 class="col-md-6 mb-0">Unlock Balances ({{searchItems.length}})</h3>
                        <span class="col-md-2 text-right p-2">Filter By:</span>
                        <base-input v-model="filterValue" placeholder="Transaction ID or Address" addon-right-icon="" class="col-md-4 mb-0">
                        </base-input>
                    </div>
                    <div class="table-responsive" style="font-size: 14px;">
                        <table class="table b-table table-striped table-hover table-bordered table-compact" aria-rowcount="28">
                            <thead >
                                <tr>
                                    <th >Transaction Id</th>
                                    <th >Address</th>
                                    <th >Unlock Amount</th>
                                    <th >Timestamp</th>
                                </tr>
                            </thead>
                            <tbody v-if="searchItems.length>0">
                                <tr v-for="item in searchItems" :key="item.transactionId">
                                    <td ><a v-bind:href="'#/transactions/' + item.transactionId">{{item.transactionId}}</a></td>
                                    <td ><a v-bind:href="'#/address/' + item.address">{{item.address}}</a></td>
                                    <td >{{item.unlock_amount}}</td>
                                    <td >{{item.timestamp}}</td>
                                </tr>
                                <tr v-if="fetching">
                                    <td colspan="5">Fetching...</td>
                                </tr>
                            </tbody>
                        </table>
                        <div v-if="searchItems.length==0">
                            <h3 class="text-center"> There is no data. </h3>
                        </div>
                    </div>
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
            filterValue: '',
            searchItems: []
        }
    },
    computed: {
        ...mapGetters({
        items: 'blockchain/unlockbalances',
        fetching: 'blockchain/fetchingUnlockBalances',
        })
    },
    mounted() {
        this.fetch();
    },
    methods: {
        ...mapActions({
        fetch: 'blockchain/fetchUnLockBalances'
        })
    },
   
    watch:{
        items(value){
            console.log('this is items', value)
            this.searchItems = value
        },
        filterValue(value){
            this.searchItems = [];

            this.items.map(item=>{
                if (item.transactionId.toLowerCase().search(value.toLowerCase())>=0 || item.address.toLowerCase().search(value.toLowerCase())>=0){
                    this.searchItems.push(item);
                }
            });
        
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
