<template lang='pug'>
.sidebar
  .sidebar__shadowBottom(:class="(showSidebar) ? '' : 'sidebar__shadowBottom--hidden'")
  .sidebar__item.sidebar__item--logo(@click="getOpenPage('generalsettings')")
    // Icon.sidebar__logo(id="logo")
    h1.sidebar__title ATLANT EXCHANGE
  SidebarPortfolio(v-if="section == 'wallet'")
  SidebarQuotes(v-if="section == 'charts'")
  SidebarAlerts(v-if="section == 'alert'")
</template>

<script>
import {mapMutations, mapState, mapGetters} from 'vuex';
import SidebarPortfolio from './SidebarPortfolio';
import SidebarAlerts from './SidebarAlerts';
import SidebarQuotes from './SidebarQuotes';

export default {
  data() {
    return {
      selected: '',
      selectedCur: 'btc',
      percChng: 2.73,
      accounts: [
        {
          address: 'demowallet',
          isActive: true,
        },
        // {
        //   address: '14rMGBspAtEv4oNdbKsKYAT7tbSgUstzBt',
        //   isActive: true,
        // },
        // {
        //   address: '14rMGBspAtEv4oNdbKsKYAT7tbSgUstzBu',
        //   isActive: false,
        // },
        // {
        //   address: '14rMGBspAtEv4oNdbKsKYAT7tbSgUstzBv',
        //   isActive: false,
        // },
      ],
    };
  },
  computed: {
    ...mapState('misc', [
      'showSidebar',

    ]),
    ...mapGetters('misc', [
      'toggleSidebar',
      'sidebarTitle',
      'section',
    ]),
  },
  methods: {
    ...mapMutations('page', {
      openPage: 'open',
    }),
//    ...mapActions('trade', {
//      getTraderWallet: 'getTraderWallet',
//    }),
    getOpenPage() {
      this.openPage({
        name: '',
      });
    },
    setActive(account) {
      for (let i = 0; i < this.accounts.length; i++) {
        this.accounts[i].isActive = false;
      }
      account.isActive = true;
    },
    openCur(cur) {
      this.selectedCur = cur;
    },
  },
  created() {
//    this.getTraderWallet();
  },
  components: {
    SidebarPortfolio,
    SidebarAlerts,
    SidebarQuotes,
  },
};

</script>

<style lang="scss">
@import 'variables';

.sidebar {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-image: linear-gradient(to top, #01253A 0%, #03354F 100%);
  position: relative;
  border-right: 1px solid #00334C;
  &:not(:first-child) {
    position: relative;
  }
  &__shadowBottom {
    position: fixed;
    z-index: 0;
    bottom: 0;
    width: 328px;
    height: 307px;
    background: $background__shadow__gradient__to__top;left: 0;
    left: 0;
    transition: left .1s linear;
    &--hidden {
      left: -328px;
      transition: left .1s linear;
    }
  }
  &__icon {
    $size: 14px;
    height: $size;
    width: $size;
    fill: #fff;
    &:hover{
      pointer: cursor;
    }
  }
  &__item {
    padding: 32px 18px 32px 25px;
    border-bottom: 1px solid #032537;
    font-size: 12px;
    position: relative;
    &--logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      font-weight: bold;
      color: red;
      cursor: pointer;
      padding-top: 30px;
      padding-bottom: 20px;
      height: 50px;
    }
    &--header {
      font-weight: 700;
    }
    &--copyright {
      font-size: 8px;
    }
    &--bottom {
      flex: 1 1 auto;
    }
  }
  &__headerLine {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    &:first-of-type {
      margin-bottom: 21px;
      align-items: flex-end;
    }
  }
  &__balance {
    color: #31edd7;
    font-size: 22px;
    font-weight: 500;
  }
  &__headerDropdown {
    width: 50px;
    font-size: 12px;
  }
  &__change {
    display: flex;
    align-items: center;
  }
  &__chngIcon {
    width: 11px;
    height: 9px;
    margin-right: 3px;
    fill: $color_green;
    &--neg {
      fill: $color_red;
      transform: rotate(180deg);
    }
  }
  &__changeAmt {
    font-size: 14px;
    color: $color_green;
    &--neg {
      color: $color_red;
    }
  }
  &__headerText {
    font-size: 10px;
    text-transform: lowercase;
    font-weight: 400;
  }
  &__demo {
    margin-top: 5px;
  }
  &__logo {
    height: 30px;
    width: 80px;
    fill: #fff;
  }
  &__title {
    color: #ffffff;
    font-size: 10px;
    line-height: 20px;
    height: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-right: 50px;
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
  &__contact {
    position: absolute;
    bottom: 25px;
  }
}
</style>
