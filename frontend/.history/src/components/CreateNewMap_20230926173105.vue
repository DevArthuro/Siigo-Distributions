<template>
    <div class="container">
        <h1>Cargue el archivo JSON</h1>
        <form @submit.prevent="" class="form">
            <div class="form-floating">
                <input type="file" name="file-json" id="file-json" class="form-control">
                <label for="file-json">Subir archivo json</label>
            </div>
        </form>
    </div>
</template>