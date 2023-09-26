<template>
    <div class="card" style="width: 18rem;">
        <img :src="data.image" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ sendProp.name }}</h5>
          <p class="card-text">{{ sendProp.description }}</p>
          <a href="#" class="btn btn-primary">Ver mapa</a>
        </div>
      </div>
</template>

<script setup>

const props = defineProps({
    sendProp: {
        default: {
            name: 'Nombre del mapa',
            description: 'Descripción del mapa'
        }
    }
})

</script>