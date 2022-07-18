<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <main>
        <div class="link-container">
            <RouterLink to="/pokoQ&A" class="link-box">寶可問答</RouterLink>
            <RouterLink to="/fieldwork" class="link-box">田野調查</RouterLink>
            <RouterLink to="/guild" class="link-box">公會備戰</RouterLink>
            <RouterLink to="/reincarnation" class="link-box"
                >轉生模擬</RouterLink
            >
            <RouterLink to="/star" class="link-box">星級計算</RouterLink>
        </div>
    </main>
</template>
<style scoped>
.link-container {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}
.link-box {
    display: flex;
    width: 150px;
    height: 150px;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
    font-size: 1.5rem;
    color: black;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}
</style>
>
