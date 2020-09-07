<template>
    <div>
        <h1>Login de usuário</h1>
        <hr>

        <div class="columns is-centered">
            <div class="column is-half">
                <div v-if="error != undefined">
                    <div class="notification is-danger">
                        <p>{{ error }}</p>
                    </div>
                </div>

                <p>E-mail</p>
                <input type="email" placeholder="Digite seu e-mail" class="input" v-model="email">
                <p>Senha</p>
                <input type="password" placeholder="********" class="input" v-model="password">
                <hr>
                <button class="button is-info">Entrar</button>
            
            </div>
        </div>

    </div>
</template>

<script>
// import axios from 'axios';

export default {
    data() {
        return {
            password: '',
            email: '',
            error: undefined 
        }
    },
    // methods: {
    //     login() {
    //         axios.post('http://localhost:8086/login', {
    //             email: this.email,
    //             password: this.password,
    //         }).then(res => {
    //             localStorage.setItem('token', res.data.token)
    //             this.$router.push({ name: 'Users' });
    //         }).catch( err => {
    //             var msgError = err.response.data.err;
    //             this.error = msgError;
    //         });
    //     }
    // }
}
</script>

<style scoped>

</style>