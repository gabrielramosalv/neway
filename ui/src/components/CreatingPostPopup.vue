<template>
    <Popup title="Criar publicação">
        <template v-slot:content>
            <div class="flex column gap-1 align-i-end">
                <div class="flex column align-i-center gap-1 width-full">
                    <label class="create-post__input-image flex align-i-center justify-c-center"
                           for="post-image" v-show="image">
                        <img ref="image" class="create-post__image"/>
                        <span ref="imageMessage" class="t-w-bold t-c-aside">Carregue uma foto</span>
                        <input type="file" accept="image/*" id="post-image" @input="loadImage"
                               @cancel="$event.preventDefault()"/>
                    </label>
                    <TextField type="textarea" class="create-post__text" placeholder="Escreva sua legenda aqui..."/>
                </div>
                <div class="flex justify-c-between align-i-center width-full">
                    <div class="flex gap-1 align-i-center">
                        <Checkbox v-model="image"/>
                        <span>Anexar foto</span>
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
    position: relative;
}

.create-post__image {
    height: 100%;
    object-fit: contain;
    position: relative;
}

.create-post__remove-image {
    width: 30px;
    aspect-ratio: 1/1;
    background-color: var(--color-red-1);
    border-radius: var(--rounded-total);
    position: absolute;
    right: var(--ratio-1);
    bottom: var(--ratio-1);
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
    watch: {
        image(newValue) {
            if (!newValue) {
                this.$refs.imageMessage.removeAttribute("style");
                this.$refs.image.style.display = "none";
                this.$refs.image.src = "";
            }
        }
    },
    methods: {
        loadImage(event) {
            let files = event.srcElement.files;
            if (files.length > 0) {
                this.$refs.imageMessage.style.display = "none";
                let fr = new FileReader();
                fr.onload = () => {
                    this.$refs.image.style.removeProperty("display");
                    this.$refs.image.src = fr.result;
                }
                fr.readAsDataURL(files[0]);
            } else {
                this.$refs.imageMessage.removeAttribute("style");
                this.$refs.image.style.display = "none";
                this.$refs.image.src = "";
            }
        }
    }
}
</script>