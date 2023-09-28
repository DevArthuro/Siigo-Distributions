<template>
    <navbar/>
    <div v-if="dataStore.data.length > 0" >
      <div class="container  mt-4">
        <div class="row">
          <tableToManageMap :data="data" :position="counter" @reload="reload"/>
          <div class=" col-lg-7 ms-lg-3 col-ms-12">
              <div id="sigma-container" class="sigma-container" style="height: 75vh; padding: 0; margin: 0 magin-top: 10px;"></div>
              <div class="d-flex justify-content-between mt-4">
                <button class="h4 btn btn-warning m-auto" @click="decrease">Anterior</button>
                <button class="h4 btn btn-warning m-auto" @click="increase">Siguiente</button>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="container justify-content-center aling-items-center">
        <div class="loader">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
          <div class="bar4"></div>
          <div class="bar5"></div>
          <div class="bar6"></div>
          <div class="bar7"></div>
          <div class="bar8"></div>
          <div class="bar9"></div>
          <div class="bar10"></div>
          <div class="bar11"></div>
          <div class="bar12"></div>
      </div>
      </div>
    </div>

</template>

<script setup>
import navbar from '../components/Navbar.vue'
import {computed, onMounted, onUpdated, reactive, ref, beforeMount } from 'vue'
import Graph from "graphology";
import Sigma from "sigma";
import { useDataGraph } from '../stores/useGraphSpeccifictMap'
import tableToManageMap from '../components/TableToManageMap.vue'

const dataStore = useDataGraph()

const response = ref('')

const currentInfo = ref('')

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

const reload = () => {
  codeUpdateMap()
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
    graph.addEdge(item.first_location, item.second_location, {id: item.id, color: "black"});
  }

  // Initialize Sigma.js after the container is available
  const renderer = new Sigma(graph, container);
}

onUpdated(()=>{
  
  codeUpdateMap();
})

onMounted(() => {
  
  currentInfo.value = dataStore.data[counter.value]
  codeUpdateMap()
});

beforeMount(() => {
  const data = dataStore.getMaps()
  response.value = data
})

</script>../../frontend/node_modules/vue-router../../frontend/node_modules/sigma

<style scoped>
.sigma-container{
  background-image: url('/mapa.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;
}

.loader {
  position: relative;
  width: 54px;
  height: 54px;
  border-radius: 10px;
}

.loader div {
  width: 8%;
  height: 24%;
  background: rgb(128, 128, 128);
  position: absolute;
  left: 50%;
  top: 30%;
  opacity: 0;
  border-radius: 50px;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  animation: fade458 1s linear infinite;
}

@keyframes fade458 {
  from {
    opacity: 1;
  }

  to {
    opacity: 0.25;
  }
}

.loader .bar1 {
  transform: rotate(0deg) translate(0, -130%);
  animation-delay: 0s;
}

.loader .bar2 {
  transform: rotate(30deg) translate(0, -130%);
  animation-delay: -1.1s;
}

.loader .bar3 {
  transform: rotate(60deg) translate(0, -130%);
  animation-delay: -1s;
}

.loader .bar4 {
  transform: rotate(90deg) translate(0, -130%);
  animation-delay: -0.9s;
}

.loader .bar5 {
  transform: rotate(120deg) translate(0, -130%);
  animation-delay: -0.8s;
}

.loader .bar6 {
  transform: rotate(150deg) translate(0, -130%);
  animation-delay: -0.7s;
}

.loader .bar7 {
  transform: rotate(180deg) translate(0, -130%);
  animation-delay: -0.6s;
}

.loader .bar8 {
  transform: rotate(210deg) translate(0, -130%);
  animation-delay: -0.5s;
}

.loader .bar9 {
  transform: rotate(240deg) translate(0, -130%);
  animation-delay: -0.4s;
}

.loader .bar10 {
  transform: rotate(270deg) translate(0, -130%);
  animation-delay: -0.3s;
}

.loader .bar11 {
  transform: rotate(300deg) translate(0, -130%);
  animation-delay: -0.2s;
}

.loader .bar12 {
  transform: rotate(330deg) translate(0, -130%);
  animation-delay: -0.1s;
}

</style>