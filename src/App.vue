<template>
    <div id="auto-adaptive-app" :class="{active: isActive}">
        <div class="window-header">
            <div class="window-title">
                Auto-adaptive
            </div>
            <div id="window-close" class="window-close" @click="toggleActive"></div>
        </div>
        <div class="window-body">

            <div class="text-input-container base-selector-container">
                <span class="input-title">Base selector: </span>
                <input type="text" class="text-input" v-model="settings.baseSelector" @focus="$event.target.select()">
            </div>

            <div class="text-input-container">
                <span class="input-title">From: </span>
                <input type="number" class="text-input" v-model="settings.fromWidth" @focus="$event.target.select()">
                <div class="dimension">px</div>
            </div>
            <div class="text-input-container input-container-width-checkbox">
                <span class="input-title">To: </span>
                <input type="number" class="text-input" v-model="settings.toWidth" @focus="$event.target.select()" v-bind:disabled="toWidthByWindowWidth">
                <div class="dimension">px</div>
                <Checkbox title="Use window width" v-model="toWidthByWindowWidth"></Checkbox>
            </div>
            <div class="input-title">Input SCSS:</div>
            <CodeContainer v-model="input"></CodeContainer>
            <div class="input-title">Output:</div>
            <CodeContainer v-model="output"></CodeContainer>

            <div class="settings-container">
                <div class="settings-section">
                    <Checkbox title="Copy result to clipboard" v-model="settings.copyToClipboard"></Checkbox>
                    <Checkbox title="Wrap into @media" v-model="settings.wrapIntoMedia"></Checkbox>
                    <Checkbox title="Add unlock" v-model="settings.addUnlock"></Checkbox>
                    <Checkbox title="Unlock to start value" v-model="settings.unlockToStartValue"></Checkbox>
                    <Checkbox title="Shake" v-model="settings.shake"></Checkbox>
                </div>
                <div class="settings-section">
                    <div class="indent-title">Output indent</div>
                    <RadioButton title="4 spaces" v-model="settings.indentSize" :own-value="4"></RadioButton>
                    <RadioButton title="2 spaces" v-model="settings.indentSize" :own-value="2"></RadioButton>
                </div>
            </div>

            <button class="calculate-button" type="button" @click="calculate" ref="calculateButton">
                <span class="normal-text">Calculate</span>
                <span class="done-text">Done!</span>
            </button>
            <div class="auto-adaptive-log" ref="logContainer"></div>
        </div>
    </div>
</template>

<script>
import CodeContainer from './components/CodeContainer'
import Checkbox from './components/Checkbox'
import RadioButton from './components/RadioButton'
import Logger from './engine/classes/Logger'
import makeAdaptive from './engine/makeAdaptive'
import loadSettingsFromLocalStorage from './loadSettingsFromLocalStorage'
import textToClipboard from './textToClipboard'
export default {
    name: 'app',
    data: () => ({
        isActive: false,
        settings: {
            baseSelector: '',
            indentSize: 4,
            fromWidth: 0,
            toWidth: 0,
            copyToClipboard: true,
            addUnlock: true,
            wrapIntoMedia: true,
            shake: true,
            unlockToStartValue: false
        },
        input: '',
        output: '',
        calculateButtonIsBlocked: false,
        toWidthByWindowWidth: false
    }),
    components: {
        CodeContainer,
        Checkbox,
        RadioButton
    },
    watch: {
        toWidthByWindowWidth: function (newVal) {
            if (newVal) {
                this.settings.toWidth = window.innerWidth
            }
        }
    },
    methods: {
        toggleActive () {
            this.isActive = !this.isActive
        },
        defaultSettings () {
            return Object.assign({}, this.settings)
        },
        getConfig () {
            const config = Object.assign({}, this.settings)
            if (this.settings.toWidthByWindowWidth) config.toWidth = window.innerWidth
            return config
        },
        calculate () {
            if (this.calculateButtonIsBlocked) return
            this.calculateButtonIsBlocked = true
            this.output = ''
            try {
                const result = makeAdaptive(this.input, this.getConfig())
                this.output = result.output
                if (this.settings.copyToClipboard) {
                    textToClipboard(result.output)
                }
            } catch (e) {
                Logger.getInstance().log(e.toString())
            }
            this.$refs.logContainer.innerHTML = Logger.getInstance().getLogsFormatted()
            this.$refs.calculateButton.classList.add('animated')
            setTimeout(() => {
                this.calculateButtonIsBlocked = false
                this.$refs.calculateButton.classList.remove('animated')
            }, 1000)
        }
    },
    beforeMount () {
        const settings = loadSettingsFromLocalStorage('autoAdaptiveSettings', this.defaultSettings())
        const handler = {
            set (target, prop, val) {
                target[prop] = val
                localStorage.setItem('autoAdaptiveSettings', JSON.stringify(target))
                return true
            }
        }
        this.settings = new Proxy(settings, handler)
    },
    mounted () {
        document.addEventListener('keyup', e => {
            if (e.key === 'Enter' && e.ctrlKey) this.toggleActive()
        })
        window.addEventListener('resize', () => {
            if (this.toWidthByWindowWidth) {
                this.settings.toWidth = window.innerWidth
            }
        })
    }
}
</script>

<style lang="scss">
    $gray: #999999;

    #auto-adaptive-app {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 500px;
        background-color: #ffffff;
        border: 1px solid #ccc;
        z-index: 10000000;
        max-width: 100%;
        max-height: 100%;
        font-family: Helvetica, Arial, sans-serif;

        &.active {
            display: block;
        }

        * {
            box-sizing: border-box;
            //cursor: auto;
            outline: none;
        }

        .window-header {
            display: flex;
            height: 40px;
            background-color: #f1f1f1;

            .window-title {
                padding: 0 0 0 10px;
                width: calc(100% - 40px);
                cursor: all-scroll;
                font-size: 20px;
                line-height: 40px;
            }

            .window-close {
                position: relative;
                width: 40px;
                background-color: #F56565;
                cursor: pointer;
                transition: background-color 0.3s;

                &::before,
                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    width: 30px;
                    height: 2px;
                    background-color: #fff;
                }

                &::before {
                    transform: rotate(45deg);
                }

                &::after {
                    transform: rotate(-45deg);
                }

                &:hover {
                    background-color: darken(#F56565, 10%);
                }
            }
        }

        .window-body {
            position: relative;
            padding: 15px 10px 10px;

            .base-selector-container {
                display: flex;
                align-items: center;
                margin: 0 0 15px;

                .auto-adaptive--text-input {
                    flex-grow: 1;
                    margin: 0 0 0 5px;
                }
            }

            .input-title {
                font-size: 14px;
            }

            .indent-title {
                font-size: 13px;
            }

            input,
            textarea {
                border: 1px solid $gray;
                transition: border-color 0.3s;

                &:focus {
                    border-color: #000000;
                }
            }

            .text-input-container {
                display: flex;
                align-items: center;
                margin: 0 0 10px;

                .input-title {
                    text-align: right;
                    width: 100px;
                    padding: 0 10px 0 0;
                }

                .text-input {
                    padding: 0 5px;
                    width: 70px;
                    height: 30px;
                }

                .dimension {
                    font-size: 12px;
                    padding: 0 5px;
                    color: $gray;
                }

                .checkbox-container {
                    margin: 0 0 0 15px;
                }
            }

            .base-selector-container {
                .text-input {
                    flex-grow: 1;
                }
            }

            .settings-container {
                display: flex;
                justify-content: space-between;

                .settings-section {

                }
            }

            .calculate-button {
                position: relative;
                display: block;
                width: 100%;
                height: 40px;
                margin: 10px 0 0;
                border: none;
                background-color: #2E7E3B;
                font-size: 16px;
                color: #fff;
                cursor: pointer;
                transition: background-color 0.3s;
                overflow: hidden;
                .normal-text,
                .done-text{
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    transition: transform 0.3s;
                    line-height: 40px;
                }
                .done-text{
                    transform: translate(0, 40px);
                }
                &:hover {
                    background-color: darken(#2E7E3B, 10%);
                }
                &.animated{
                    .normal-text{
                        transform: translate(0, -40px);
                    }
                    .done-text{
                        transform: translate(0, 0);
                    }
                }
            }
            .auto-adaptive-log{
                max-height: 200px;
                overflow: auto;
                .log-message{
                    padding: 5px 0;
                    font-size: 16px;
                }
            }
        }
    }

    @media (max-width: 360px) {
        #auto-adaptive-app{
            .window-body{
                .text-input-container{
                    &.input-container-width-checkbox{
                        flex-wrap: wrap;
                        .checkbox-container{
                            width: 100%;
                            margin: 10px 0 0 100px;
                        }
                    }
                }
            }
        }
    }
</style>
