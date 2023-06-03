<template>
    <div class="login inset-screen flex justify-c-center align-i-center">
        <div class="login-container flex column gap-1">
            <h1 class="login-container__title">Neway</h1>
            <TextField type="text" placeholder="Apelido"/>
            <TextField type="password" placeholder="Senha"/>

            <a href="" class="login-container__forget">Esqueceu a senha?</a>

            <Button content="Entrar" class="width-full"/>

            <hr class="linha-divisoria">

            <Button content="Nova conta" class="width-full"/>
        </div>
    </div>
</template>

<style>

.login {
    padding: var(--ratio-2);
}

.login-container {
    max-width: 400px;
    width: 100%;
    background-color: white;
    padding: var(--ratio-2);
    border-radius: var(--rounded-2);
    box-shadow: 0 3px 10px 2px var(--color-grey-2);
}

.login-container__title {
    color: var(--color-main-1);
    text-align: center;
    font-size: 3em;
    margin: var(--ratio-1) 0;
}

.login-container__forget {
    text-align: center;
    text-decoration: none;
    margin: 10px 0;
    color: var(--color-text-aside-1);
}

.linha-divisoria {
    border: none;
    height: 1px;
    width: 100%;
    background-color: var(--color-grey-2);
}

</style>

<script>
import Button from "@/components/Button.vue";
import TextField from "@/components/TextField.vue";

export default {
    name: "Login",
    components: {Button, TextField}
}
</script>