<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <router-link class="navbar-brand" :to="backViewDashBoard">Siigo Distributions</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Crear Nuevo Mapa</a>
              <router-link class="nav-link active" aria-current="page" :to="nextViewWatchMaps">Ver mapas creados</router-link>
            </div>
          </div>
        </div>
      </nav>
</template>

<script setup>

import {useRouter} from 'vue-router'

const router = useRouter()

const nextViewWatchMaps = {
  name: 'Watch-Maps'
}

const backViewDashBoard = {
  name: 'DashBoard'
}

</script>../../frontend/node_modules/vue-router