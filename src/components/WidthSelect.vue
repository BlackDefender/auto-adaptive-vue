<template>
    <ul class="width-select" :class="{active: isActive}">
        <li v-for="viewport in viewports" :key="viewport" @click="onItemClick(viewport)">{{ viewport }}</li>
    </ul>
</template>

<script>
export default {
    name: 'WidthSelect',
    props: {
        isActive: Boolean
    },
    data: () => ({
        viewports: [2560, 1920, 1366, 1024, 768, 320]
    }),
    methods: {
        onItemClick (viewport) {
            this.$emit('input', viewport)
            this.isActive = false
        }
    }
}
</script>

<style scoped lang="scss">
.width-select{
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid gray;
    list-style: none;
    font-size: 15px;
    padding: 0;
    margin: 0;
    z-index: 1;
    background-color: #ffffff;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease,
                visibility 0.5s ease;
    &.active{
        opacity: 1;
        visibility: visible;
    }
    li{
        padding: 5px;
        cursor: pointer;
        text-align: right;
        &:hover{
            background: #dadada;
        }
    }
}
</style>
