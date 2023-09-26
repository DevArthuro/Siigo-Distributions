<template>
    <navbar/>
    <div class="container">
        <div class="row d-flex justify-content-between mt-3 mb-3">
            <div  v-for="data in dataCards" :key="data.id" class="col-4">
                <CardMap :sendProp="data"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import navbar from '../components/Navbar.vue'
import CardMap from '../components/CardMap.vue'

const dataCards = [
    {
        id: 0,
        slug: 'distribución-andina-463726',
        image: 'https://cdn.euroinnova.edu.es/img/subidasEditor/el%20texto%20del%20p%C3%A1rrafo%20(63)-1633820686.webp',
        name: 'Distribución andina',
        description: 'whatever description'
    },
    {
        id: 1,
        slug: 'distribución-andina-463726',
        image: 'https://cdn.euroinnova.edu.es/img/subidasEditor/el%20texto%20del%20p%C3%A1rrafo%20(63)-1633820686.webp',
        name: 'Distribución atlantico',
        description: 'whatever description'
    },
    {
        id: 2,
        slug: 'distribución-andina-463726',
        image: 'https://cdn.euroinnova.edu.es/img/subidasEditor/el%20texto%20del%20p%C3%A1rrafo%20(63)-1633820686.webp',
        name: 'Distribución Medellin',
        description: 'whatever description'
    },
    {
        id: 3,
        slug: 'distribución-andina-463726',
        image: 'https://cdn.euroinnova.edu.es/img/subidasEditor/el%20texto%20del%20p%C3%A1rrafo%20(63)-1633820686.webp',
        name: 'Distribución Pasto',
        description: 'whatever description'
    },
    {
        id: 0,
        slug: 'distribución-andina-463726',
        image: 'https://cdn.euroinnova.edu.es/img/subidasEditor/el%20texto%20del%20p%C3%A1rrafo%20(63)-1633820686.webp',
        name: 'Distribución andina',
        description: 'whatever description'
    },
    
]

</script>