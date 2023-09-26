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

const param = useRoute()

onMounted(() => {
  const container = document.getElementById("sigma-container");
  const graph = new Graph();

  // Agrega nodos
  graph.addNode("John", { x: 0, y: 10, size: 5, label: "John", color: "blue" });
  graph.addNode("Mary", { x: 10, y: 0, size: 3, label: "Mary", color: "red" });
  graph.addNode("Juan", { x: 20, y: 5, size: 2, label: "Mary", color: "red" });

  // Agrega ejes
  graph.addEdge("John", "Mary");
  graph.addEdge("John", "Juan");
  graph.addEdge("Mary", "Juan");

  // Initialize Sigma.js after the container is available
  const renderer = new Sigma(graph, container);
});
</script>../../frontend/node_modules/vue-router../../frontend/node_modules/sigma