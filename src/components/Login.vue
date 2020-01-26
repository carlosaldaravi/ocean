<template>
    <div class="w-full max-w-xs justify-center">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" v-on:submit.prevent="login">
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="usuario">
                Usuario
            </label>
            <input v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="usuario" type="text" placeholder="Usuario">
            </div>
            <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Contraseña
            </label>
            <input v-model="password" class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********">
            <p class="text-red-500 text-xs italic">Por favor introduce tu contraseña.</p>
            </div>
            <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign In
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Contraseña olvidada?
            </a>
            </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy;2020 Ocean Platform. Todos los derechos reservados.
        </p>
    </div>
</template>

<script>
export default {
    name: "loginComponent",
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        login() {
            if (this.username != '' && this.password != '') {
                if (this.username == 'a' && this.password == 'a') {
                    this.$router.push('/alumno');
                }
                if (this.username == 'i' && this.password == 'i') {
                    this.$router.push('/instructor');
                }
                if (this.username == 'ad' && this.password == 'ad') {
                    this.$router.push('/administrador');
                }
                // this.$store.dispatch('login', {username: this.username, password: this.password})
                // .then( () => this.$router.push('/'))
                // .catch( err => console.log(err));
            } else {
                // this.loginError = "Completa usuario y contraseña";
            }
        }
    }
}
</script>