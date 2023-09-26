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

  import getNodeProgramImage from "sigma/rendering/webgl/programs/node.image";
  import NodeProgramBorder from "./node.border";

  import ForceSupervisor from "graphology-layout-force/worker";

  const param = useRoute()


  onMounted(() => {

    const container = document.getElementById("sigma-container") as HTMLElement;

    const graph = new Graph();

    const RED = "#FA4F40";
    const BLUE = "#727EE0";
    const GREEN = "#5DB346";

    graph.addNode("John", { size: 15, label: "John", type: "image", image: "./user.svg", color: RED });
    graph.addNode("Mary", { size: 15, label: "Mary", type: "image", image: "./user.svg", color: RED });
    graph.addNode("Suzan", { size: 15, label: "Suzan", type: "image", image: "./user.svg", color: RED });
    graph.addNode("Nantes", { size: 15, label: "Nantes", type: "image", image: "./city.svg", color: BLUE });
    graph.addNode("New-York", { size: 15, label: "New-York", type: "image", image: "./city.svg", color: BLUE });
    graph.addNode("Sushis", { size: 7, label: "Sushis", type: "border", color: GREEN });
    graph.addNode("Falafels", { size: 7, label: "Falafels", type: "border", color: GREEN });
    graph.addNode("Kouign Amann", { size: 7, label: "Kouign Amann", type: "border", color: GREEN });

    graph.addEdge("John", "Mary", { type: "line", label: "works with", size: 5 });
    graph.addEdge("Mary", "Suzan", { type: "line", label: "works with", size: 5 });
    graph.addEdge("Mary", "Nantes", { type: "arrow", label: "lives in", size: 5 });
    graph.addEdge("John", "New-York", { type: "arrow", label: "lives in", size: 5 });
    graph.addEdge("Suzan", "New-York", { type: "arrow", label: "lives in", size: 5 });
    graph.addEdge("John", "Falafels", { type: "arrow", label: "eats", size: 5 });
    graph.addEdge("Mary", "Sushis", { type: "arrow", label: "eats", size: 5 });
    graph.addEdge("Suzan", "Kouign Amann", { type: "arrow", label: "eats", size: 5 });

    graph.nodes().forEach((node, i) => {
      const angle = (i * 2 * Math.PI) / graph.order;
      graph.setNodeAttribute(node, "x", 100 * Math.cos(angle));
      graph.setNodeAttribute(node, "y", 100 * Math.sin(angle));
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const renderer = new Sigma(graph, container, {
      // We don't have to declare edgeProgramClasses here, because we only use the default ones ("line" and "arrow")
      nodeProgramClasses: {
        image: getNodeProgramImage(),
        border: NodeProgramBorder,
      },
      renderEdgeLabels: true,
    });

    // Create the spring layout and start it
    const layout = new ForceSupervisor(graph);
    layout.start();
  });
</script>../../frontend/node_modules/vue-router../../frontend/node_modules/sigma