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
  
  graph.addNode(data.locations[0].label, { x: data.locations[0].x, y: data.locations[0].y, size: 5, label: data.locations[0].label, color: "blue" });
  graph.addNode(data.locations[1].label, {  x: data.locations[1].x, y: data.locations[1].y, size: 5, label: data.locations[1].label, color: "blue" });
  graph.addNode(data.locations[2].label, { x: 20, y: 5, size: 2, label: "Mary", color: "red" });

  // Agrega ejes
  graph.addEdge("John", "Mary");
  graph.addEdge("John", "Juan");
  graph.addEdge("Mary", "Juan");

  // Initialize Sigma.js after the container is available
  const renderer = new Sigma(graph, container);
});
</script>../../frontend/node_modules/vue-router../../frontend/node_modules/sigma