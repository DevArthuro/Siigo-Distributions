<template>
    <navbar/>
    <div class="container mt-4 border border-1 border-dark rounded">
        <div id="sigma-container" style="height: 400px;"></div>
    </div>
</template>

<script setup>
import navbar from '../components/Navbar.vue'
import {onMounted } from 'vue'
import {useRoute } from 'vue-router'
import Graph from "graphology";
import Sigma from "sigma";
import { useDataGraph } from '../stores/useGraphSpeccifictMap'

const param = useRoute()
const dataStore = useDataGraph()

const data = dataStore.getMap()

onMounted(() => {
  const container = document.getElementById("sigma-container");
  const graph = new Graph();

  // Agrega nodos
  for (let item in data.locations)
  {
    graph.addNode(item.id, { x: item.x, y: item.y, size: 5, label: item.label, color: "blue" });
    

  }
  
  // Agrega ejes
  graph.addEdge("John", "Mary");
  graph.addEdge("John", "Juan");
  graph.addEdge("Mary", "Juan");

  // Initialize Sigma.js after the container is available
  const renderer = new Sigma(graph, container);
});
</script>../../frontend/node_modules/vue-router../../frontend/node_modules/sigma