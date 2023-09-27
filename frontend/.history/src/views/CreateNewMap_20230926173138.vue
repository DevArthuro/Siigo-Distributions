<template>
  <div id="sigma-container"></div>
  <div class="controls">
    <button id="add-node">Agregar nodo</button>
    <button id="add-edge">Agregar eje</button>
  </div>
</template>

<script setup>
import navbar from '../components/Navbar.vue'
import {onMounted } from 'vue'
import Graph from "graphology";
import Sigma from "sigma";

const dataStore = useDataGraph()

const data = dataStore.getMap()

onMounted(() => {
  const container = document.getElementById("sigma-container");
  const graph = new Graph();

  // Agrega nodos
  for (let item of data.locations)
  {
    graph.addNode(item.id, { x: item.x, y: item.y, size: 5, label: item.label, color: "black" });
  }
  
  // Agrega ejes
  for (let item of data.connections)
  {
    graph.addEdge(item.start, item.end);
  }

  // Initialize Sigma.js after the container is available
  const renderer = new Sigma(graph, container);
});
</script>