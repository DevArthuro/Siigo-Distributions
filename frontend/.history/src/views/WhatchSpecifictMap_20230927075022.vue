<template>
    <navbar/>
    <div class="container  mt-4">
      <div class="row">
        <div class="collg-4">
          <p class="h4 text-center">Configuración del Mapa</p>
          <hr>
          <p class="h5 text-start">Configuración de ubicaciones</p>
          <form class="form" @submit.prevent=""> <!--form to register new location-->
            <div class="form-floating mt-2">
              <input type="text" class="form-control" placeholder="">
              <label for="" class="form-label">Nombre de la ubicación</label>
            </div>
            <div class="form-floating mt-2">
              <input type="text" class="form-control" placeholder="">
              <label for="" class="form-label">Coordenada X</label>
            </div>
            <div class="form-floating mt-2">
              <input type="text" class="form-control" placeholder="">
              <label for="" class="form-label">Coordenada Y</label>
            </div>
            <div class="text-end mt-2 mb-3 pe-3">
              <input type="submit" value="Publicar nueva ubicación" class="btn btn-success ">
            </div>
          </form>
          <p class="h5 text-start">Configuración de conexiones</p>
          <form class="form" @submit.prevent=""> <!--form to select the new connection-->
            <div class="form-floating container mt-2">
              <select class="form-select">
                <option value="default">---</option>
                <option v-for="item in data.locations" :key="item.id" :value="item.id">{{ item.label }}</option>
              </select>
              <label for="" class="form-label ms-2">Conexión De inicio</label>
            </div>  
            <div class="form-floating container mt-2">
              <select class="form-select">
                <option value="default">---</option>
                <option v-for="item in data.locations" :key="item.id" :value="item.id">{{ item.label }}</option>
              </select>
              <label for="" class="form-label ms-2">Conexión De Fin</label>
            </div> 
            <div class="text-end mt-2 pe-3">
              <input type="submit" value="Publicar nueva conexión" class="btn btn-success">
            </div>
          </form>
        </div>
        <div class=" col-lg-7 ms-3">
            <div id="sigma-container" class="sigma-container" style="height: 80vh; padding: 0; margin: 0"></div>
        </div>
      </div>
    </div>
</template>

<script setup>
import navbar from '../components/Navbar.vue'
import {onMounted, onUpdated } from 'vue'
import Graph from "graphology";
import Sigma from "sigma";
import { useDataGraph } from '../stores/useGraphSpeccifictMap'
import uploadToJson from '../components/CreateNewMap.vue'

const dataStore = useDataGraph()

const data = dataStore.getMap()
const codeUpdateMap = () => {
  const container = document.getElementById("sigma-container");
  const graph = new Graph();

  // Agrega nodos
  for (let item of data.locations)
  {
    graph.addNode(item.id, { x: item.x, y: item.y, size: 5, label: item.label, color: "blue" });
  }
  
  // Agrega ejes
  for (let item of data.connections)
  {
    graph.addEdge(item.start, item.end, {color: "black"});
  }

  // Initialize Sigma.js after the container is available
  const renderer = new Sigma(graph, container);
}

onUpdated(()=>{
  
})

onMounted(() => {
  codeUpdateMap()
});
</script>../../frontend/node_modules/vue-router../../frontend/node_modules/sigma

<style scoped>
.sigma-container{
  background-image: url('/mapa.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;
}
</style>