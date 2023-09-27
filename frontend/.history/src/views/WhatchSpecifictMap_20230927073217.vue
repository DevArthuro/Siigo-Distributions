<template>
    <navbar/>
    <div class="container  mt-4">
      <div class="row">
        <div class="col-4">
          <p class="h4 text-center">Configuración del Mapa</p>
          <hr>
          <p class="h5 text-start">Configuración de coordenadas</p>
          <div class="floating">
            <input type="text" class="form-control">
            <label for="" class="form-label">Coordenada X</label>
          </div>
        </div>
        <div class=" col-7 ms-3">
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
  codeUpdateMap()
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