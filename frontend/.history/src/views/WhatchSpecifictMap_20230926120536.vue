<template>
    <navbar/>
    <div class="container mt-4">
        <div id="map-sigma">

        </div>
    </div>
</template>

<script setup>
    import navbar from '../components/Navbar.vue'

    // Libraries for use the graphs
    import Graph from "graphology";
    import Sigma from "sigma";

    import { useRoute } from 'vue-router'

    const param = useRoute()

    // Use the librarie sigma 
    const map = document.getElementById('map-sigma')  as HTMLElement;
    const graph = new Graph();

    graph.addNode("John", { x: 0, y: 10, size: 5, label: "John", color: "blue" });
    graph.addNode("Mary", { x: 10, y: 0, size: 3, label: "Mary", color: "red" });
    graph.addNode("Juan", { x: 20, y: 5, size: 2, label: "Mary", color: "red" });

    graph.addEdge("John", "Mary");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const renderer = new Sigma(graph, map);

</script>