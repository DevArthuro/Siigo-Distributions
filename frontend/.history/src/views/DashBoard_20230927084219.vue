<template>
    <navbar/>
    <div class="container mt-5">
        <div class="row">
            <CardCreateMap/>
            <CardWatchMap/>
        </div>
    </div>
</template>

<script setup>

import navbar from '../components/Navbar.vue'
import CardCreateMap from '../components/CardToCreateMap.vue'
import CardWatchMap from '../components/CardToShowMaps.vue'
</script>