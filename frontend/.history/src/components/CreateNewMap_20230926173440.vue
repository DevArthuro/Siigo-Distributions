<template>
    <div class="container justify-content-center w-5">
        <h1>Cargue el archivo JSON</h1>
        <form @submit.prevent="" class="form">
            <div class="form-floating">
                <input type="file" name="file-json" id="file-json" class="form-control">
                <label for="file-json">Subir archivo json</label>
            </div>
            <input type="submit" value="Subir mapa" class="btn btn-warning">
        </form>
    </div>
</template>

<script>
</script>