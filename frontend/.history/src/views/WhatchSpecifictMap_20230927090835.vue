<template>
    <navbar/>
    <div class="container  mt-4">
      
      <div class="row">
        <tableToManageMap :data="data" />
        <div class=" col-lg-7 ms-lg-3 col-ms-12">
            <div id="sigma-container" class="sigma-container" style="height: 75vh; padding: 0; margin: 0 magin-top: 10px;"></div>
            <div class="d-flex justify-content-between mt-4">
              <button class="h4 btn btn-warning m-auto">Anterior</button>
              <button class="h4 btn btn-warning m-auto">Siguiente</button>
            </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import navbar from '../components/Navbar.vue'
import {computed, onMounted, onUpdated, ref } from 'vue'
import Graph from "graphology";
import Sigma from "sigma";
import { useDataGraph } from '../stores/useGraphSpeccifictMap'
import tableToManageMap from '../components/TableToManageMap.vue'

const dataStore = useDataGraph()

const data = dataStore.getMap()

const currentInfo = ref()

const counter = ref(0);

const decrease = computed(() => {
  if (counter.value > -1)
    counter.value--;
})

const increase = computed(() => {
  counter.value++
})

const showMapComputed = computed(() => {
    currentInfo.value = data[counter.value]
})

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