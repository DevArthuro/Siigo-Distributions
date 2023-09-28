<template>
    <navbar/>
    <div v-if="dataStore.data.length > 0" >
      <div class="container  mt-4">
        <div v-if="dataStore.message != ''" class="alert alert-warning" role="alert">
          {{ dataStore.message }}
        </div>
        <div class="row">
          
          <tableToManageMap :data="dataStore.data" :position="counter" @reload="reload"/>
          <div class=" col-lg-7 ms-lg-3 col-ms-12">
              <div id="sigma-container" class="sigma-container" style="height: 75vh; padding: 0; margin: 0 magin-top: 10px;"></div>
              <div class="d-flex justify-content-between mt-4">
                <button class="h4 btn btn-warning m-auto" @click="decrease">Anterior</button>
                <button class="h4 btn btn-warning m-auto" @click="increase">Siguiente</button>
              </div>
              <div class="d-flex justify-content-between mt-4">
                <div class="form-floating container mt-2">
                  <select class="form-select" v-model="dataLocations.first_location">
                    <option value="default">---</option>
                    <option v-for="item in currentInfo.locations" :key="item.id" :value="item.id">{{ item.label }}</option>
                  </select>
                  <label for="" class="form-label ms-2">Conexión De inicio</label>
                </div>  
                <div class="form-floating container mt-2">
                  <select class="form-select" v-model="dataLocations.second_location">
                    <option value="default">---</option>
                    <option v-for="item in currentInfo.locations" :key="item.id" :value="item.id">{{ item.label }}</option>
                  </select>
                  <label for="" class="form-label ms-2">Conexión De Fin</label>
                </div>
                <div>

                  <button class="h4 btn btn-warning m-auto mt-3 mb-3" @click="calculate_dijkstra">Calcular</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Loader/>
    </div>

</template>

<script setup>
import navbar from '../components/Navbar.vue'
import Loader from '../components/Loader.vue'
import {computed, onMounted, onUpdated, reactive, ref, onBeforeMount } from 'vue'
import Graph from "graphology";
import Sigma from "sigma";
import { useDataGraph } from '../stores/useGraphSpeccifictMap'
import tableToManageMap from '../components/TableToManageMap.vue'

const dataStore = useDataGraph()

const dataLocations = ref({
  fist_location: '',
  second_location: ''
})

const response = ref('')

const currentInfo = ref('')

const counter = ref(0);

// Modifica la función decrease para que llame a showMapComputed
const increase = () => {
  
  if (counter.value < dataStore.data.length-1)
  {
    
    counter.value++
  }

}

const calculate_dijkstra = () => {
  const fist_location = dataLocations.value.fist_location
  const second_location = dataLocations.value.second_location
  const slug_map = currentInfo.value.slug
}

const decrease = () => {
  
  if (counter.value > 0)
  {
    
    counter.value--;
  }

}

const reload = () => {
  dataStore.getMaps();
  codeUpdateMap()
}


const codeUpdateMap = () => {
  
  currentInfo.value = dataStore.data[counter.value];
  const container = document.getElementById("sigma-container");
  const graph = new Graph();

  container.innerHTML = '';
  // Agrega nodos
  console.log(currentInfo.value)
  for (let item of currentInfo.value.locations)
  {
    graph.addNode(item.label, { x: item.position_x, y: item.position_y, size: 5, label: item.label, color: "blue" });
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

if (dataStore.data.length > 0)
{
  onMounted(() => {
    
    currentInfo.value = dataStore.data[counter.value]
    codeUpdateMap()
  });

}

onBeforeMount(() => {
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

</style>