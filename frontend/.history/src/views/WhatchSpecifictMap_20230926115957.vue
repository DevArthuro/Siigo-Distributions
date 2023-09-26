<template>
    <navbar/>s
    <h1>{{ param.params.slug }}</h1>
</template>

<script setup>
    import navbar from '../components/Navbar.vue'

    import { useRoute } from 'vue-router'

    const param = useRoute()
</script>