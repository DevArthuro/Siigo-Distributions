<template>
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ data.name }}</h5>
          <p class="card-text">{{ data.description }}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
</template>

<script setup>

const props = defineProps({
    data: {
        default: {
            name: 'Nombre del mapa',
            description: 'Descripción del mapa'
        }
    }
})

</script>