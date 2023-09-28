<template>
    <navbar/>
    <div v-if="data.data[position]">Ya respondio</div>
    
</template>

<script setup>
import navbar from '../components/Navbar.vue'
import {computed, onMounted, onUpdated, reactive, ref } from 'vue'
import Graph from "graphology";
import Sigma from "sigma";
import { useDataGraph } from '../stores/useGraphSpeccifictMap'
import tableToManageMap from '../components/TableToManageMap.vue'

const dataStore = useDataGraph()


const currentInfo = ref()

const counter = ref(0);

// Modifica la función decrease para que llame a showMapComputed
const increase = () => {
  
  if (counter.value < data.value.length-1)
  {
    
    counter.value++
  }

}

const decrease = () => {
  
  if (counter.value > 0)
  {
    
    counter.value--;
  }

}


const codeUpdateMap = () => {
  currentInfo.value = data.value[counter.value];
  const container = document.getElementById("sigma-container");
  const graph = new Graph();

  container.innerHTML = '';
  // Agrega nodos
  for (let item of currentInfo.value.locations)
  {
    graph.addNode(item.id, { x: item.position_x, y: item.position_y, size: 5, label: item.label, color: "blue" });
  }
  
  // Agrega ejes
  for (let item of currentInfo.value.connections)
  {
    graph.addEdge(item.first_location, item.second_location, {color: "black"});
  }

  // Initialize Sigma.js after the container is available
  const renderer = new Sigma(graph, container);
}

onUpdated(()=>{
  
  codeUpdateMap();
})

onMounted(() => {
  const data = ref(dataStore.getMap())

  currentInfo.value = data.value[counter.value]
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