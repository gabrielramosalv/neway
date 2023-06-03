<template>
    <div class="login inset-screen flex justify-c-center align-i-center">
        <div class="login-container flex column gap-2">
            <h1 class="login-container__title">Neway</h1>
            <div class="flex column gap-1">
                <TextField type="text" placeholder="Apelido"/>
                <TextField type="password" placeholder="Senha"/>
            </div>
            <div class="flex column gap-1">
                <Button content="Entrar" class="width-full"/>
                <hr class="line">
                <Button content="Nova conta" class="width-full" border="2px solid var(--color-main-1)"
                        bg-color="transparent" text-color="var(--color-main-1)" to="/register"/>
            </div>
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
}

.line {
    border: none;
    height: 1px;
    width: 100%;
    background-color: var(--color-grey-2);
}

</style>

<script>
import Button from "@/components/base/Button.vue";
import TextField from "@/components/base/TextField.vue";

export default {
    name: "Login",
    components: {Button, TextField}
}
</script>