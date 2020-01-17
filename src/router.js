import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Transfers from "./views/Transfers.vue";
import Withdraws from "./views/Withdraws.vue";
import Deposites from "./views/Deposites.vue";
import LockBalances from "./views/LockBalances.vue";
import UnlockBalances from "./views/UnlockBalances.vue";
import Address from "./views/Address.vue";
import Transaction from "./views/Transaction.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/components",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/transfers",
      name: "transfers",
      components: {
        header: AppHeader,
        default: Transfers,
        footer: AppFooter
      }
    },
    {
      path: "/lockbalances",
      name: "lockbalances",
      components: {
        header: AppHeader,
        default: LockBalances,
        footer: AppFooter
      }
    },
    {
      path: "/unlockbalances",
      name: "unlockbalances",
      components: {
        header: AppHeader,
        default: UnlockBalances,
        footer: AppFooter
      }
    },
    {
      path: "/deposites",
      name: "deposites",
      components: {
        header: AppHeader,
        default: Deposites,
        footer: AppFooter
      }
    },
    {
      path: "/withdraws",
      name: "withdraws",
      components: {
        header: AppHeader,
        default: Withdraws,
        footer: AppFooter
      }
    },
    {
      path: "/address/:id",
      name: "address",
      components: {
        header: AppHeader,
        default: Address,
        footer: AppFooter
      }
    },
    {
      path: "/transactions/:id",
      name: "transaction",
      components: {
        header: AppHeader,
        default: Transaction,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
