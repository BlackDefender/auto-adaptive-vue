import Settings from './Settings'

export default class StyleProperty {
    constructor (data) {
        const dataArray = typeof data === 'string' ? data.split(':') : data
        this.name = dataArray[0].trim()
        this.value = dataArray[1].replace(';', '').trim().split(' ').map(item => item.trim()).join(' ')
        this.newValue = null
    }

    static isHEXColor (value) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value)
    }

    static isVariable (value) {
        return value.charAt(0) === '$'
    }

    static isDimensionless (value) {
        return value.length > 0 && /^\d*\.*\d*$/i.test(value)
    }

    static isValueInPercent (value) {
        return value.includes('%')
    }

    static compareValue (oldValue, newValue) {
        oldValue = oldValue.split(' ')
        newValue = newValue.split(' ')
        return oldValue.map((item, index) => {
            if (item === 'auto') return item
            if (this.isValueInPercent(item)) return item
            if ((item === '0' || item === '0px') && (newValue[index] === '0' || newValue[index] === '0px')) return item
            if (index === 2 && newValue[index] === undefined) return newValue[0]
            if (index === 3 && newValue[index] === undefined) return newValue[1]
            return newValue[index] || ''
        }).join(' ')
    }

    addNewValue (newValueObj) {
        const newValue = newValueObj.element || newValueObj.stylesheet || newValueObj.computed

        if (!this.cssLockAvailable() ||
            this.constructor.isHEXColor(newValue) ||
            this.constructor.isVariable(newValue) ||
            (this.name === 'line-height' && this.constructor.isDimensionless(this.value)) ||
            this.value === 'auto') {
            return
        }

        const compareValue = this.constructor.compareValue(this.value, newValue)
        if (this.value !== compareValue) this.newValue = compareValue
    }

    get saveOnShake () {
        return this.newValue !== null
    }

    toLockString () {
        const settings = Settings.getInstance()
        if (this.newValue) {
            return `${this.name}: ${this.constructor.makeCssLockString(this.value, this.newValue, settings.fromWidth, settings.toWidth)};`
        } else {
            return `${this.name}: ${this.value};`
        }
    }

    toUnlockString () {
        if (Settings.getInstance().unlockToStartValue) return `${this.name}: ${this.value};`
        if (this.newValue) return `${this.name}: ${this.newValue};`
        return null
    }

    static makeString (fromVal, toVal, fromWidth, toWidth) {
        if (fromVal === 'auto') return 'auto'
        fromVal = Math.round(parseFloat(fromVal))
        toVal = Math.round(parseFloat(toVal))
        if (fromVal === toVal) {
            return fromVal + ((fromVal > 0) ? 'px' : '')
        }
        return `calc(${fromVal}px + (${fromVal} - ${toVal}) * (100vw - ${fromWidth}px) / (${fromWidth} - ${toWidth}))`
    };

    static makeCssLockString (fromStr, toStr, fromWidth, toWidth) {
        const fromArray = fromStr.split(' ')
        const toArray = toStr.split(' ')
        let lock = ''
        for (let i = 0; i < fromArray.length; ++i) {
            if (toArray[i] === undefined) break
            if (i > 0) lock += ' '
            lock += this.makeString(fromArray[i], toArray[i], fromWidth, toWidth)
        }
        return lock
    };

    cssLockAvailable () {
        return [
            'border-width',
            'border-top-width',
            'border-right-width',
            'border-left-width',
            'border-bottom-width',
            'flex-basis',
            'font-size',
            'height',
            'left',
            'line-height',
            'margin',
            'margin-bottom',
            'margin-left',
            'margin-right',
            'margin-top',
            'max-height',
            'max-width',
            'min-height',
            'min-width',
            'outline-width',
            'padding',
            'padding-bottom',
            'padding-left',
            'padding-right',
            'padding-top',
            'right',
            'top',
            'width'
        ].includes(this.name)
    }
}
