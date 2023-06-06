<template>
    <Popup :header="true" title="Criar publicação" ref="doPostPopup">
        <template v-slot:content>
            <div class="flex column gap-1 align-i-end">
                <div class="flex column align-i-center gap-1 width-full">
                    <label class="do-post__input-image flex all-center"
                           for="post-image" v-show="hasImage">
                        <img ref="image" class="do-post__image width-full height-full"
                             :src="loadImagePhoto" alt="post-image"/>
                        <input type="file" accept="image/*" id="post-image" @input="loadImage"
                               @cancel="$event.preventDefault()" ref="imageInput"/>
                    </label>
                    <TextField type="textarea" class="do-post__text" placeholder="Escreva o texto do seu post..."
                               v-model="text" v-bind:rows="rows"/>
                </div>
                <div class="flex justify-c-between align-i-center width-full">
                    <div class="do-post__put-image flex gap-1_2 align-i-center" @click="hasImage = !hasImage">
                        <Checkbox v-model="hasImage"/>
                        <span>Anexar foto</span>
                    </div>
                    <Button content="Postar" @click="doPost"/>
                </div>
            </div>
        </template>
    </Popup>
</template>

<style scoped>

.do-post__input-image > input {
    display: none;
}

.do-post__input-image {
    width: 400px;
    aspect-ratio: 1/1;
    border-radius: var(--rounded-2);
    cursor: pointer;
    overflow: hidden;
    position: relative;
}

.do-post__image {
    object-fit: contain;
    background-color: var(--color-grey-1);
}

.do-post__put-image {
    border: var(--trace);
    padding: var(--action-side);
    padding-right: calc(1.2 * var(--action-side));
    height: var(--action-height);
    border-radius: var(--rounded-2);
    cursor: pointer;
}

.do-post__put-image:hover {
    background-color: var(--color-grey-1_2);
}

.do-post__remove-image {
    width: 30px;
    aspect-ratio: 1/1;
    background-color: var(--color-red-1);
    border-radius: var(--rounded-total);
    position: absolute;
    right: var(--ratio-1);
    bottom: var(--ratio-1);
}

.do-post__text {
    min-width: 400px;
}

</style>

<script>
import Popup from "@/components/base/Popup.vue";
import Button from "@/components/base/Button.vue";
import Checkbox from "@/components/base/Checkbox.vue";
import TextField from "@/components/base/TextField.vue";
import {User} from "@/services/user/User";
import {Message, MessageType} from "@/global/model/Message";
import {Post} from "@/services/post/Post";
import {$system} from "@/global/system";
import {Events} from "@/global/Events";

const TEXT_ROWS_QUANTITY = 5;

export default {
    name: "DoPostPopup",
    components: {TextField, Checkbox, Button, Popup},
    props: {
        user: User
    },
    data() {
        return {
            hasImage: false,
            text: "",
            loadImagePhoto: require("@/assets/img/load-image-photo.svg"),
            rows: TEXT_ROWS_QUANTITY
        }
    },
    watch: {
        hasImage(hasImage) {
            this.rows = hasImage ? 2 : TEXT_ROWS_QUANTITY;
        }
    },
    methods: {
        doPost() {
            if (this.text.length === 0) {
                this.$emit(Events.MESSAGE, new Message("Você deve preencher uma legenda", MessageType.ERROR));
                return;
            }
            let image = this.$refs.imageInput.files[0] || null;
            let post = new Post(this.user.id, this.text);
            if (image != null) {
                let fr = new FileReader();
                fr.onload = () => {
                    post.image = fr.result;
                    $system.services.post.save(post);
                    this.$refs.doPostPopup.close();
                }
                fr.readAsDataURL(image);
            } else {
                $system.services.post.save(post);
                this.$refs.doPostPopup.close();
            }
            this.$emit("new-post");
            this.$refs.image.src = this.loadImagePhoto;
            this.text = "";
            this.$refs.imageInput.value = "";
        },
        loadImage() {
            let image = this.$refs.imageInput.files[0] || null;
            if (image != null) {
                let fr = new FileReader();
                fr.onload = () => {
                    this.$refs.image.src = fr.result;
                }
                fr.readAsDataURL(image);
            } else {
                this.$refs.image.src = this.loadImagePhoto;
            }
        }
    }
}
</script>