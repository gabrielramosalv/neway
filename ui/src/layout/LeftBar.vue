<template>
    <nav class="side-bar left-bar flex">
        <div class="left-bar__logo flex gap-1">
            <img src="@/assets/img/logo.svg" alt="logo"/>
            <span>Neway</span>
        </div>
    </nav>
</template>

<style scoped>
@import "common.css";

.left-bar__logo {
    font-size: 1.5em;
    color: var(--color-grey-2);
}

.left-bar {
    left: var(--ratio-1);
}

</style>

<script>

export default {
    name: "LeftBar"
}
</script>