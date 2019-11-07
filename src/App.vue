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
                <input type="text" class="text-input" :value="settings.baseSelector" @input="onSettingChange('baseSelector', $event.target.value)" @focus="$event.target.select()">
            </div>

            <div class="text-input-container">
                <span class="input-title">From: </span>
                <input type="number" class="text-input" :value="settings.fromWidth" @input="onSettingChange('fromWidth', $event.target.value)" @focus="$event.target.select()">
                <div class="dimension">px</div>
            </div>
            <div class="text-input-container">
                <span class="input-title">To: </span>
                <!-- <input type="number" class="text-input" :value="settings.toWidth" @input="onSettingChange('toWidth', $event.target.value)" @focus="$event.target.select()" v-bind:disabled="toWidthByWindowWidth">-->
                <input type="number" class="text-input" v-model="settings.toWidth" @focus="$event.target.select()" v-bind:disabled="toWidthByWindowWidth">
                <div class="dimension">px</div>
                <Checkbox setting-title="Use window width" setting-name="toWidthByWindowWidth" :setting-initial-value="toWidthByWindowWidth" @change="onWhichWidthUseSettingChange"></Checkbox>
            </div>
            <div class="input-title">Input SCSS:</div>
            <CodeContainer v-model="input"></CodeContainer>
            <div class="input-title">Output:</div>
            <CodeContainer v-model="output"></CodeContainer>

            <div class="settings-container">
                <div class="settings-section">
                    <Checkbox setting-title="Copy result to clipboard" setting-name="copyToClipboard" :setting-initial-value="settings.copyToClipboard" @change="onSettingChange"></Checkbox>
                    <Checkbox setting-title="Wrap into @media" setting-name="wrapIntoMedia" :setting-initial-value="settings.wrapIntoMedia" @change="onSettingChange"></Checkbox>
                    <Checkbox setting-title="Add unlock" setting-name="addUnlock" :setting-initial-value="settings.addUnlock" @change="onSettingChange"></Checkbox>
                    <Checkbox setting-title="Unlock to start value" setting-name="unlockToStartValue" :setting-initial-value="settings.unlockToStartValue" @change="onSettingChange"></Checkbox>
                    <Checkbox setting-title="Shake" setting-name="shake" :setting-initial-value="settings.shake" @change="onSettingChange"></Checkbox>
                </div>
                <div class="settings-section">
                    <div class="indent-title">Output indent</div>
                    <RadioButton setting-name="indentSize" setting-title="4 spaces" :setting-initial-value="settings.indentSize" :value="4" @change="onSettingChange"></RadioButton>
                    <RadioButton setting-name="indentSize" setting-title="2 spaces" :setting-initial-value="settings.indentSize" :value="2" @change="onSettingChange"></RadioButton>
                </div>
            </div>

            <button class="calculate-button" type="button" @click="calculate">Calculate</button>
            <div id="auto-adaptive-log"></div>

            <div class="loading" :class="{active: loading}">
                <SpinnerIcon></SpinnerIcon>
            </div>
        </div>
    </div>
</template>

<script>
import SpinnerIcon from './assets/spinner.svg'
import CodeContainer from './components/CodeContainer'
import Checkbox from './components/Checkbox'
import RadioButton from './components/RadioButton'

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
        loading: false,
        toWidthByWindowWidth: false
    }),
    components: {
        SpinnerIcon,
        CodeContainer,
        Checkbox,
        RadioButton
    },
    methods: {
        onWhichWidthUseSettingChange (settingName, settingValue) {
            this.toWidthByWindowWidth = !this.toWidthByWindowWidth
            if (this.toWidthByWindowWidth) {
                this.settings.toWidth = window.innerWidth
            }
        },
        toggleActive () {
            this.isActive = !this.isActive
        },
        onSettingChange (settingName, settingValue) {
            this.settings[settingName] = settingValue
            this.saveSettings()
        },
        saveSettings () {
            localStorage.setItem('autoAdaptiveSettings', JSON.stringify(this.settings))
        },
        loadSettings () {
            const settings = loadSettingsFromLocalStorage('autoAdaptiveSettings', this.defaultSettings())
            Object.keys(settings).forEach(propertyName => { this.settings[propertyName] = settings[propertyName] })
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
            this.loading = true
            this.output = ''
            const result = makeAdaptive(this.input, this.getConfig())
            this.output = result.output
            if (this.settings.copyToClipboard) {
                textToClipboard(result.output)
            }
            this.loading = false
        }
    },
    beforeMount () {
        this.loadSettings()
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

    @keyframes auto-adaptive-loading-spinner {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

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
                //justify-content: space-between;
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

                &:hover {
                    background-color: darken(#2E7E3B, 10%);
                }
            }

            .loading{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(222,222,222,0.31);
                opacity: 0;
                visibility: hidden;
                transition-property: opacity, visibility;
                transition-duration: 0.3s;
                svg{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 50px;
                    height: 50px;
                    margin: -25px 0 0 -25px;
                    color: #000000;
                    animation: auto-adaptive-loading-spinner 1s steps(8, start) infinite;
                }
                &.active{
                    visibility: visible;
                    opacity: 1;
                }
            }
        }
    }
</style>