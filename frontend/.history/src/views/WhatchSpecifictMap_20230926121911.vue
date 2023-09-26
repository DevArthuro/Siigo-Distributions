<template>
    <navbar/>
    <div class="container mt-4">
        <div id="sigma-container">

        </div>
    </div>
</template>

<script setup>
    import navbar from '../components/Navbar.vue'


    import { useRoute } from 'vue-router'

    
import Graph from "graphology";
import Sigma from "sigma";

const container = document.getElementById("sigma-container");

const graph = new Graph();

graph.addNode("John", { x: 0, y: 10, size: 5, label: "John", color: "blue" });
graph.addNode("Mary", { x: 10, y: 0, size: 3, label: "Mary", color: "red" });
graph.addNode("Juan", { x: 20, y: 5, size: 2, label: "Mary", color: "red" });

graph.addEdge("John", "Mary");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const renderer = new Sigma(container, graph);


</script>