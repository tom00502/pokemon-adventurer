<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Reincarnation from '@/components/Reincarnation.vue'
import routers from '@/router/config'
import { ref, onMounted } from 'vue'
import { usePokedexStore } from '@/stores/pokedex'
import { useDistributionStore } from '@/stores/distribution'
const pokedexStore = usePokedexStore()
const distributionStore = useDistributionStore()
onMounted(() => {
    console.log('mount test')
    pokedexStore.getPokedex().then(() => {})
    distributionStore.getDistributions()
    // api.getDistributed()
})
</script>

<template>
    <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
    <!--<div class="bulletin">
         <details>
            <summary>
                ★新兌換碼:Happp1Summer2Time3(水晶150,扭蛋幣1,疲勞50)★
            </summary>
            <ul>
                <li>劍蘭掉落 7/23~7/24 官方擺爛中...= =, 目前不會掉落</li>
                <li>精靈占星 7/22~7/24</li>
                <li>翻翻樂 7/22~7/24</li>
                <li>扭蛋排行-霜奶仙 7/22~7/24</li>
                <li>
                    大暑節氣福利 7/23(登入送 體力飲料 疲勞*30 神奇糖果(中)*23
                    水晶*100)
                </li>
                <li>大暑超級返利 7/23</li>
                <li>夏日特賣 7/23~7/24</li>
            </ul>
        </details>
    </div> -->
    <header>
        <nav>
            <div v-for="route in routers" :key="route.name">
                <RouterLink :to="route.path">{{ route.title }}</RouterLink>
            </div>
        </nav>
    </header>
    <div class="key">
        寵物冒險家,寵物冒險助理,寵物冒險家攻略,攻略,轉生模擬器,升星計算機,解答,笛子,召喚笛,狩獵場,公會戰,宠物冒险家,宠物冒险助理,宠物冒险家攻略,攻略,转生模拟器,升星计算机,解答,笛子,召唤笛,狩猎场,公会战,冲锋吧精灵
    </div>
    <RouterView />
</template>

<style>
@import '@/assets/base.css';
body {
    background: white;
    color: black;
}
#app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;

    font-weight: normal;
}

header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

a,
.green {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
}
.key {
    display: none;
}
@media (hover: hover) {
    a:hover {
        background-color: hsla(160, 100%, 37%, 0.2);
        border-radius: 1rem;
    }
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin: 1rem 0;
    display: flex;
    overflow: auto;
    flex-wrap: nowrap;
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
}

nav a.router-link-exact-active {
    color: white;
    background-color: hsla(160, 100%, 37%, 1);
    border-radius: 1rem;
}

nav a.router-link-exact-active:hover {
    /*background-color: transparent;*/
    /*color: var(--color-border);*/
}

nav a {
    display: inline-block;
    padding: 0.25rem 1rem;
    margin: 0 0.5rem;
}
nav div {
    margin: 0.5rem 0;
    border-left: 1px solid var(--color-border);
    flex-shrink: 0;
}

nav div:first-of-type {
    border: 0;
}
.bulletin {
    padding: 8px;
    background: #7dcbff;
    border: thick double #323cce;
    border-radius: 8px;
}
@media (min-width: 1024px) {
    body {
        /*display: flex;
        place-items: center;*/
    }

    #app {
        /*display: grid;
        grid-template-columns: 1fr;
        padding: 0 2rem;*/
    }

    header {
        display: flex;
        place-items: center;
        width: 100%;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    nav {
        text-align: left;
        /*margin-left: -1rem;*/
        font-size: 1rem;

        /*padding: 1rem 0;*/
        margin-top: 1rem;
    }
}
.loading {
    display: flex;
    justify-content: center;
}
.lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
}
.lds-dual-ring:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fcf;
    border-color: #fcf transparent #fcf transparent;
    animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
