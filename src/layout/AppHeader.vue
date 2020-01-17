<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand style="background: #0e0e0e;">
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/light.png" alt="logo">
            </router-link>
            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center ml-lg-7">
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Transactions</span>
                    </a>
                    <router-link to="/deposites" class="dropdown-item">Deposites</router-link>
                    <router-link to="/transfers" class="dropdown-item">Transfers</router-link>
                    <router-link to="/lockbalances" class="dropdown-item">Lock balances</router-link>
                    <router-link to="/unlockbalances" class="dropdown-item">Unlock balances</router-link>
                    <router-link to="/withdraws" class="dropdown-item">Withdraws</router-link>
                </base-dropdown>
                
                <!-- <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">Components</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-spaceship"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Getting started</h6>
                                <p class="description d-none d-md-inline-block mb-0">Get started with Bootstrap, the
                                    world's most popular framework for building responsive sites.</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-ui-04"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">Components</h5>
                                <p class="description d-none d-md-inline-block mb-0">Learn how to use Argon
                                    compiling Scss, change brand colors and more.</p>
                            </div>
                        </a>
                    </div>
                </!-->
                <!-- <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Examples</span>
                    </a>
                    <router-link to="/landing" class="dropdown-item">Landing</router-link>
                    <router-link to="/profile" class="dropdown-item">Profile</router-link>
                    <router-link to="/login" class="dropdown-item">Login</router-link>
                    <router-link to="/register" class="dropdown-item">Register</router-link>
                </base-dropdown> -->
            </ul>
            <base-input :placeholder="placeholderValue" v-model="searchValue" v-on:keyup="searchResult" addon-right-icon="" class="mb-0">
            </base-input>
            
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/BlueBarricade" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/BlueBarricade"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/BlueBarricade" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/BlueBarricade/bluebarricade-blockchain-explorer"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Github">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import BaseInput from "@/components/BaseInput";
import CloseButton from "@/components/CloseButton";
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    components: {
        BaseNav,
        CloseButton,
        BaseDropdown,
        BaseInput
    },
    data() {
        return {
            searchValue: '',
            placeholderValue: 'Transaction ID or Address'
        }
    },
    computed: {
        ...mapGetters({
        transaction: 'blockchain/transaction',
        fetching: 'blockchain/fetchingTransaction',   
        address: 'blockchain/address',
        fetchingAddress: 'blockchain/fetchingAddress',  
        })
    },
    mounted() {
        // this.fetchTransaction();
    },
    methods: {
    ...mapActions({
      fetchTransaction: 'blockchain/fetchTransaction',
      fetchAddress: 'blockchain/fetchAddress'
    }),
    searchResult: function(e) {
        const url_transaction = '#/transactions/' + this.searchValue;
        const url_address = '#/address/' + this.searchValue;
        if (e.keyCode === 13) {
            if (this.searchValue != '') {  
               // window.location = url_transaction;
                this.fetchTransaction(this.searchValue).then(()=>{
                    if (this.transaction != null && this.transaction != ''){
                            window.location = url_transaction;
                    }else{
                        this.fetchAddress(this.searchValue).then(()=>{
                            console.log('this is address', this.address);
                            if (this.address != null && this.address != ''){
                                window.location = url_address;
                            }else{
                                this.searchValue = '';
                                this.placeholderValue = 'No items match your search';
                            }
                        });
                      
                    }
                });    
            }
        } 
    },
  },
}
</script>
<style>
</style>
