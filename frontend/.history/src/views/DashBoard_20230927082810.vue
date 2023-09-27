<template>
    <navbar/>
    <div class="container row">
        <CardCreateMap/>
        <CardWatchMap/>
    </div>
</template>

<script setup>

import navbar from '../components/Navbar.vue'
import CardCreateMap from '../components/CardToCreateMap.vue'
import CardWatchMap from '../components/CardToShowMaps.vue'
</script>