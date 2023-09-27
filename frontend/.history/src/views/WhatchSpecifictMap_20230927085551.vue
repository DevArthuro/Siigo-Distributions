<template>
    <navbar/>
    <div class="container  mt-4">
      
      <div class="row">
        <tableToManageMap :data="data" />
        <div class=" col-lg-7 ms-lg-3 col-ms-12">
            <div id="sigma-container" class="sigma-container" style="height: 80vh; padding: 0; margin: 0 magin-top: 10px;"></div>
            <div class="align-items-center">
              <button class="h4 btn btn-warning">Anterior</button>
              <button class="h4 btn btn-warning">Siguiente</button>
            </div>
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
import tableToManageMap from '../components/TableToManageMap.vue'

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