<template>
    <label class="radio-button-container">
        <input type="radio" :value="value" :name="settingName" @click="onClick" :checked="{checked}">
        <span class="radio-button"></span>
        <span>{{ settingTitle }}</span>
    </label>
</template>

<script>
export default {
    name: 'RadioButton',
    props: ['setting-name', 'setting-title', 'value', 'setting-initial-value'],
    data: () => ({
        checked: false
    }),
    methods: {
        onClick () {
            this.$emit('change', this.settingName, this.value)
        }
    },
    mounted () {
        this.checked = this.value === this.settingInitialValue
    }
}
</script>

<style scoped lang="scss">
    .radio-button-container{
        display: flex;
        align-items: center;
        font-size: 13px;
        cursor: pointer;
        &:nth-child(n+2){
            margin: 3px 0 0 0;
        }
        input[type="radio"]{
            display: none;
        }
        .radio-button{
            position: relative;
            width: 14px;
            height: 14px;
            margin: 0 10px 0 0;
            border: 1px solid #999999;
            border-radius: 50%;
            &::before{
                content: '';
                position: absolute;
                top: 2px;
                left: 2px;
                width: 8px;
                height: 8px;
                background-color: #333333;
                border-radius: 50%;
                opacity: 0;
                transition: opacity .3s;
            }
        }
        input[type="radio"]:checked ~ .radio-button{
            &::before{
                opacity: 1;
            }
        }
    }
</style>
