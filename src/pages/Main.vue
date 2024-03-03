<template>
    <Header></Header>
    <main>
        <RouterView />
    </main>
    <Footer></Footer>
</template>

<script setup lang="ts">
import Header from '../components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue';

</script>

<style scoped></style>