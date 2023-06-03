<template>
    <div class="register inset-screen flex justify-c-center align-i-center">
        <div class="register-container flex column gap-2">
            <h1 class="register-container__title">Neway</h1>
            <div class="flex column gap-1">
                <TextField type="text" placeholder="Primeiro nome"/>
                <TextField type="text" placeholder="Último nome"/>
                <TextField type="text" placeholder="Apelido"/>
                <TextField type="password" placeholder="Senha"/>
                <TextField type="password" placeholder="Repetir senha"/>
            </div>
            <div class="flex column gap-1">
                <Button content="Cadastrar" class="width-full"/>
                <hr class="line">
                <Button content="Voltar" class="width-full" border="2px solid var(--color-main-1)"
                        bg-color="transparent" text-color="var(--color-main-1)" to="/login"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

.register {
    padding: var(--ratio-2);
}

.register-container {
    max-width: 400px;
    width: 100%;
    background-color: white;
    padding: var(--ratio-2);
    border-radius: var(--rounded-2);
    box-shadow: 0 3px 10px 2px var(--color-grey-2);
}

.register-container__title {
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
    name: "Register",
    components: {TextField, Button}
}
</script>