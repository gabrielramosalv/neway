<template>
    <popup :header="false" ref="profilePopup">
        <template v-slot:content>
            <div class="popup flex gap-1" >
                <img class="popup__image" src="@/assets/img/wallpaper.jpg">
                <div class="popup__interactions">
                    <div class="popup__interactions__user flex align-i-center gap-1_2">
                        <div class="popup__card__photo"></div>
                        <h3 class="popup-card__name">joao:</h3>
                        <span> texto de teste</span>
                        <button @click="$refs.profilePopup.close()" class="popup__close"/>
                    </div>
                </div>
            </div>
        </template>
    </popup>
</template>


<style scoped>

.popup__image{
    height: auto;
    width: 800px;
}

.popup__interactions{
    height: auto;
    width: 400px;
}

.popup__interactions__user{
    border-bottom: 2px solid var(--color-grey-2);
}

.popup__card__photo{
    border-radius: var(--rounded-2);
    padding: var(--ratio-1);
    width: 40px;
    cursor: pointer;
    user-select: none;
    transition: transform 0.3s;
}

.popup-card__name {
    font-size: 1em;
    font-weight: 600;
}

.popup__card__photo {
    height: v-bind(ratio);
    aspect-ratio: 1/1;
    border-radius: var(--rounded-total);
    background: url("@/assets/img/joao.jpg") center no-repeat;
    background-size: 100%;
}

.popup__close {
    height: 35px;
    aspect-ratio: 1/1;
    border-radius: var(--rounded-total);
    border: none;
    cursor: pointer;
    background-color: transparent;
    margin-left: auto;
}

.popup__close:hover {
    background-color: var(--color-grey-1);
}

</style>
<script>
import Popup from "@/components/base/Popup.vue";

export default {
    name: "ProfilePopup",
    components: {Popup},
    props: {
        image: {
            type: String,
            default: ""
        },
        legend:{
            type: String,
            default: ""
        }
    },
    data() {
        return {
            parentElement: null
        }
    },
}
</script>