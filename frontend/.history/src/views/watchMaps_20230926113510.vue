<template>
    <navbar/>
    <div class="container row d-flex justify-content-between">
        <div  v-for="dataCards" :key="dataCards.id" class="col-4">

        </div>
    </div>
</template>

<script setup>
import navbar from '../components/Navbar.vue'
import CardMap from '../components/CardMap'

const dataCards = [
    {
        name: 'Distribución andina',
        description: 'whatever description'
    },
    {
        name: 'Distribución atlantico',
        description: 'whatever description'
    },
    {
        name: 'Distribución Medellin',
        description: 'whatever description'
    }
]

</script>