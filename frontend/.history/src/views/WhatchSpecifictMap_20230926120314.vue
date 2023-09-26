<template>
    <navbar/>
    <div class="container mt-4">
        <div id="map-sigma">

        </div>
    </div>
</template>

<script setup>
    import navbar from '../components/Navbar.vue'

    // Libraries for use the graphs
    import Graph from "graphology";
    import Sigma from "sigma";

    import { useRoute } from 'vue-router'

    const param = useRoute()

    // Use the librarie sigma 
    const map = document.getElementById('map-sigma')
    
</script>