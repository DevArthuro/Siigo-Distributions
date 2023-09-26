<template>
    <navbar/>
    <div class="container mt-4">
        <div id="map-sigma">

        </div>
    </div>
</template>

<script setup>
    import navbar from '../components/Navbar.vue'

    import { useRoute } from 'vue-router'

    const param = useRoute()
</script>