<template>

      <div class="col-lg-4 col-ms-12">
          <p class="h4 text-center">Configuración del Mapa</p>
          <hr>
          <p class="h5 text-start">Configuración de ubicaciones</p>
          <form class="form" @submit.prevent="setNewNode"> <!--form to register new location-->
            <div class="form-floating mt-2">
              <input type="text" class="form-control" placeholder="" v-model="dataNewNode.label">
              <label for="" class="form-label">Nombre de la ubicación</label>
            </div>
            <div class="form-floating mt-2">
              <input type="number" class="form-control" placeholder="" v-model="dataNewNode.position_x">
              <label for="" class="form-label">Coordenada X</label>
            </div>
            <div class="form-floating mt-2">
              <input type="number" class="form-control" placeholder="" v-model="dataNewNode.position_y">
              <label for="" class="form-label">Coordenada Y</label>
            </div>
            <div class="text-end mt-2 mb-3 pe-3">
              <input type="submit" value="Publicar nueva ubicación" class="btn btn-success ">
            </div>
          </form>
          <p class="h5 text-start">Configuración de conexiones</p>
          <form class="form" @submit.prevent=""> <!--form to select the new connection-->
            <div class="form-floating container mt-2">
              <select class="form-select">
                <option value="default">---</option>
                <option v-for="item in data.data[position].locations" :key="item.id" :value="item.id">{{ item.label }}</option>
              </select>
              <label for="" class="form-label ms-2">Conexión De inicio</label>
            </div>  
            <div class="form-floating container mt-2">
              <select class="form-select">
                <option value="default">---</option>
                <option v-for="item in data.data[position].locations" :key="item.id" :value="item.id">{{ item.label }}</option>
              </select>
              <label for="" class="form-label ms-2">Conexión De Fin</label>
            </div> 
            <div class="form-floating container mt-2">
              <input type="number" name="" id="" placeholder="" class="form-control">
              <label for="" class="form-label ms-2">Indique el peso</label>
            </div>
            <div class="text-end mt-2 mb-3 pe-3">
              <input type="submit" value="Publicar nueva conexión" class="btn btn-success">
            </div>
          </form>
        </div>

</template>

<script setup>

import { useDataGraph } from '../stores/useGraphSpeccifictMap'

import { ref } from 'vue'

const graph = useDataGraph()
const dataNewNode = ref({
  label: '',
  position_x: '',
  position_y: ''
})
const setNewNode = () => {
  const dataNoReactive = {
    label: dataNewNode.value.label,
    position_x: dataNewNode.value.position_x,
    position_y: dataNewNode.value.position_y,
  }
  graph.setNewNodo(data.position, dataNoReactive);
  emits('reload')
}

const setNewEdge = () => {
  const dataNoReactive = {

  }
}

const data = defineProps({
    data: {
        required: true,
        default: [
            {

            }
        ]
    },
    position: {
      required: true,
      default: 0
    }
})

const emits = defineEmits([
  'reload'
])

</script>