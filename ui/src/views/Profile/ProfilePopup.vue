<template>
    <popup :header="true" ref="profilePopup">
        <template v-slot:content>
            <div class="popup" >
                <div class="flex column">
                    <img class="popup__image" src="@/assets/img/wallpaper.jpg">
                    <div class="popup__interactions">
                        <div class="popup__interactions__user flex align-i-center gap-1_2">
                            <div class="popup__card__photo"></div>
                            <h3 class="popup-card__name t-w-bold">joao</h3>
                            <span>Texto de teste</span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </popup>
</template>


<style scoped>

.popup__image{
    height: 500px;
    width: 900px;
}

.popup__interactions{
    margin-top: 20px;
    height: auto;
    width: 400px;
}

.popup__card__photo{
    border-radius: var(--rounded-2);
    padding: var(--ratio-1);
    width: 40px;
    user-select: none;
    transition: transform 0.3s;

}

.popup-card__name {
    font-size: 1em;
}

.popup__card__photo {
    height: v-bind(ratio);
    aspect-ratio: 1/1;
    border-radius: var(--rounded-total);
    background: url("@/assets/img/joao.jpg") center no-repeat;
    background-size: 100%;
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