<template>
    <h1>{{ param.params.slug }}</h1>
</template>

<script setup>
    import { useRoute } from 'vue-router'

    const param = useRoute()
</script>