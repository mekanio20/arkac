<template>
    <div class="iframe-container">
        <iframe :src="link" width="100%" height="100%" allowfullscreen="true"></iframe>
    </div>
</template>

<script>
export default {
    data() {
        return {
            link: "https://yakyn.biz/360/arkac-sowda-dync-alys-merkezi-916/index.htm"
        }
    },
    created() {
        if (this.$route.query.url) {
            this.link = this.$route.query.url
        }
    }
}
</script>

<style scoped>
.iframe-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}
</style>