<template>
    <div class="login inset-screen flex justify-c-center align-i-center">
        <div class="login-container flex column gap-2">
            <h1 class="login-container__title">Neway</h1>
            <div class="flex column gap-1">
                <TextField type="text" placeholder="Apelido" v-bind:formatter="User.nicknameFormatter"
                           v-model="nickname"/>
                <TextField type="password" placeholder="Senha" v-model="password"/>
            </div>
            <div class="flex column gap-1">
                <Button content="Entrar" class="width-full" @click="login"/>
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
import {User} from "@/services/user/User";
import {Message, MessageType} from "@/global/model/Message";
import router from "@/router";
import {Paths} from "@/router/routes";
import {$system} from "@/global/system";

export default {
    name: "Login",
    computed: {
        User() {
            return User
        }
    },
    components: {Button, TextField},
    data() {
        return {
            nickname: "",
            password: ""
        }
    },
    methods: {
        login() {
            if (this.nickname.length === 0) {
                this.$emit("message", new Message("O apelido não pode ser vazio", MessageType.ERROR));
                return;
            }
            if (this.password.length === 0) {
                this.$emit("message", new Message("A senha não pode ser vazia", MessageType.ERROR));
                return;
            }
            let user = $system.services.user.getByNickname(this.nickname);
            if (user == null) {
                this.$emit("message", new Message("Não existe usuário com o apelido associado", MessageType.ERROR));
            } else if (user.password !== this.password) {
                this.$emit("message", new Message("Senha incorreta", MessageType.ERROR));
            } else {
                $system.setUser(user);
                router.push(Paths.TIMELINE);
            }
        }
    }
}
</script>