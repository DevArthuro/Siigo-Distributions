<template>

      <div class="col-lg-4 col-ms-12">
          <p class="h4 text-center">Configuración del Mapa</p>
          <hr>
          <p class="h5 text-start">Configuración de ubicaciones</p>
          <form class="form" @submit.prevent=""> <!--form to register new location-->
            <div class="form-floating mt-2">
              <input type="text" class="form-control" placeholder="">
              <label for="" class="form-label">Nombre de la ubicación</label>
            </div>
            <div class="form-floating mt-2">
              <input type="text" class="form-control" placeholder="">
              <label for="" class="form-label">Coordenada X</label>
            </div>
            <div class="form-floating mt-2">
              <input type="text" class="form-control" placeholder="">
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
            <div class="text-end mt-2 mb-3 pe-3">
              <input type="submit" value="Publicar nueva conexión" class="btn btn-success">
            </div>
          </form>
        </div>

</template>

<script setup>

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

</script>