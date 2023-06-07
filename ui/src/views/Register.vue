<template>
    <div class="register inset-screen flex justify-c-center align-i-center">
        <div class="register-container flex column gap-2">
            <h1 class="register-container__title">Neway</h1>
            <div class="flex column gap-1">
                <TextField type="text" placeholder="Primeiro nome" v-model="firstName"
                           :formatter="User.nameFormatter"/>
                <TextField type="text" placeholder="Apelido" v-model="nickname"
                           :formatter="User.nicknameFormatter" maxlength="15"/>
                <TextField type="password" placeholder="Senha" v-model="password"/>
                <TextField type="password" placeholder="Repetir senha" v-model="repeatPassword"/>
            </div>
            <div class="flex column gap-1">
                <Button content="Cadastrar" class="width-full" @click="register"/>
                <hr class="line">
                <Button content="Voltar" class="width-full" border="1px solid var(--color-main-1)"
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
import {Message, MessageType} from "@/global/model/Message";
import router from "@/router";
import {Paths} from "@/router/routes";
import {User} from "@/services/user/User";
import {$system} from "@/global/system";
import {Events} from "@/global/Events";

export default {
    name: "Register",
    computed: {
        User() {
            return User
        }
    },
    components: {TextField, Button},
    data() {
        return {
            firstName: "",
            nickname: "",
            password: "",
            repeatPassword: ""
        }
    },
    methods: {
        register() {
            if (this.password !== this.repeatPassword) {
                this.$emit(Events.MESSAGE, new Message("As senhas não coincidem", MessageType.ERROR));
                return;
            }
            let user = new User(this.nickname, this.firstName, this.password);
            user.validate();
            if ($system.services.user.getByNickname(user.nickname) != null) {
                this.$emit(Events.MESSAGE, new Message("Apelido já cadastrado", MessageType.ERROR));
                return;
            }
            $system.services.user.save(user);
            this.$emit(Events.MESSAGE, new Message("Usuário registrado com sucesso", MessageType.SUCCESS));
            router.push(Paths.LOGIN);
        }
    }
}
</script>