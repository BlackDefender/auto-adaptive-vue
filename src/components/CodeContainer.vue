<template>
    <div class="code-container-wrap">
        <div :class="{expanded: isExpanded}" class="code-container">
            <button type="button" class="expand-button" @click="expand">
                <ExpandIcon></ExpandIcon>
                <CompressIcon></CompressIcon>
            </button>
            <textarea v-bind:value="value" v-on="inputListeners"></textarea>
        </div>
    </div>
</template>

<script>
import ExpandIcon from '../assets/expand.svg'
import CompressIcon from '../assets/compress.svg'

export default {
    name: 'CodeContainer',
    props: ['value'],
    data: () => ({
        isExpanded: false
    }),
    components: {
        ExpandIcon,
        CompressIcon
    },
    methods: {
        expand () {
            this.isExpanded = !this.isExpanded
        }
    },
    computed: {
        inputListeners: function () {
            return Object.assign({},
                this.$listeners,
                {
                    input: event => this.$emit('input', event.target.value)
                }
            )
        }
    }
}
</script>

<style scoped lang="scss">
    .code-container-wrap{
        position: relative;
        margin: 10px 0 15px;
        height: 100px;
        background-color: #cccccc;
    }
    .code-container{
        position: relative;
        height: 100%;
        .expand-button{
            position: absolute;
            padding: 0;
            top: 3px;
            right: 12px;
            width: 20px;
            height: 20px;
            background-color: #ffffff;
            border: none;
            color: #a7a7a7;
            transition: color 0.3s;
            svg{
                display: block;
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
            .compress-icon{
                display: none;
            }
            &:hover{
                color: #000000;
            }
        }
        &.expanded{
            position: fixed;
            width: 90vw;
            height: 90vh;
            top: 5vh;
            left: 5vw;
            margin: 0;
            box-shadow: 0 0 100px 30px #676767;
            z-index: 100000;
            .compress-icon{
                display: block;
            }
            .expand-icon{
                display: none;
            }
        }
    }
    textarea {
        display: block;
        width: 100%;
        height: 100%;
        padding: 5px;
        border: 1px solid #999999;
        font-family: monospace;
        resize: none;
        &::-webkit-scrollbar {
            width: 6px;
        }
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        &::-webkit-scrollbar-thumb {
            background: #888;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }
</style>
