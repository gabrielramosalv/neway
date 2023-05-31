<template>
    <Popup title="Criar publicação">
        <template v-slot:content>
            <div class="flex column gap-1 align-i-end">
                <div class="flex column align-i-center gap-1 width-full">
                    <label class="create-post__input-image flex align-i-center justify-c-center"
                           for="post-image"
                           v-show="image">
                        <img ref="image" class="create-post__image"/>
                        <input type="file" accept="image/*" id="post-image" @change="loadImage"/>
                    </label>
                    <TextField type="textarea" class="create-post__text" placeholder="Escreva sua legenda aqui..."/>
                </div>
                <div class="flex justify-c-between align-i-center width-full">
                    <div class="flex gap-1 align-i-center">
                        <Checkbox v-model="image"/>
                        <span>Foto</span>
                    </div>
                    <Button content="Postar"/>
                </div>
            </div>
        </template>
    </Popup>
</template>

<style scoped>

.create-post__input-image > input {
    display: none;
}

.create-post__input-image {
    width: 400px;
    aspect-ratio: 1/1;
    border: 2px solid var(--color-grey-2);
    border-radius: var(--rounded-2);
    cursor: pointer;
    overflow: hidden;
}

.create-post__image {
    height: 100%;
    object-fit: contain;
}

.create-post__text {
    min-width: 400px;
}

</style>

<script>
import Popup from "@/components/Popup.vue";
import Button from "@/components/Button.vue";
import Checkbox from "@/components/Checkbox.vue";
import TextField from "@/components/TextField.vue";

export default {
    name: "CreatingPostPopup",
    components: {TextField, Checkbox, Button, Popup},
    data() {
        return {
            image: true
        }
    },
    methods: {
        loadImage(event) {
            let files = event.srcElement.files;
            let fr = new FileReader();
            fr.onload = () => {
                if (files.length > 0) {
                    this.$refs.image.style.removeProperty("display");
                    this.$refs.image.src = fr.result;
                } else {
                    this.$refs.image.src = "";
                    this.$refs.image.style.display = "none";
                }
            }
            if (files.length > 0) {
                fr.readAsDataURL(files[0]);
            }
        }
    }
}
</script>