<template>
    <div class="card" style="width: 18rem;">
        <img :src="props.sendProp.image" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ props.sendProp.name }}</h5>
          <p class="card-text">{{ props.sendProp.description }}</p>
          <router-link :to="sendNextViewWhatSpecificMap" class="btn btn-primary">Ver mapa</router-link>
        </div>
      </div>
</template>

<script setup>

const props = defineProps({
    sendProp: {
        default: {
            slug: 'whatever',
            image: '...',
            name: 'Nombre del mapa',
            description: 'Descripción del mapa'
        }
    }
})

const sendNextViewWhatSpecificMap = {
    name: 'whatch-specifict-map',
    params: {slug: props.sendProp.slug}
}

</script>