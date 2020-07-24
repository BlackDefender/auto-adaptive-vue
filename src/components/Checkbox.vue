<template>
    <label class="checkbox-container">
        <input type="checkbox" :checked="value" @input="$emit('input', $event.target.checked)">
        <span class="checkbox" :class="{checked: value}"></span>
        {{this.title}}
    </label>
</template>

<script>
export default {
    name: 'Checkbox',
    props: {
        title: {
            type: String,
            required: true
        },
        value: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
    .checkbox-container {
        display: flex;
        align-items: center;
        font-size: 13px;
        cursor: pointer;
        &:nth-child(n+2){
            margin: 3px 0 0 0;
        }
        input[type="checkbox"] {
            display: none;
        }
        .checkbox {
            position: relative;
            width: 14px;
            height: 14px;
            margin: 0 10px 0 0;
            border: 1px solid #999999;

            &::before {
                content: '';
                position: absolute;
                top: 2px;
                left: 2px;
                width: 7px;
                height: 4px;
                border-left: 1px solid #000000;
                border-bottom: 1px solid #000000;
                opacity: 0;
                transform: rotate(-45deg);
                transition: opacity .3s;
            }

            &.checked{
                &::before {
                    opacity: 1;
                }
            }
        }
    }
</style>
