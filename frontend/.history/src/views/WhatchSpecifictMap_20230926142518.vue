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


  onMounted(() => {
    const container = document.getElementById("sigma-container");
    const graph = new Graph();
    const sotreGraph = useDataGraph()
    const data = sotreGraph.getMap()
    
    graph.addNode(data.locations[0].label, { x: data.connections, y: 10, size: 5, label: "John", color: "blue" });
    graph.addNode(data.locations[1].label, { x: 10, y: 0, size: 3, label: "Mary", color: "red" });
    graph.addNode(data.locations[2].label, { x: 20, y: 5, size: 2, label: "Mary", color: "red" });
  
    graph.addEdge("John", "Mary");
  
    // Initialize Sigma.js after the container is available
    const renderer = new Sigma(graph, container);
  });
</script>