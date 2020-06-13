import PseudoClasses from './PseudoClasses'
import Logger from './Logger'
import Utils from './Utils'

let instanceId = Symbol('instanceId')
let instanceSecurityKey = Symbol('instanceSecurityKey')

export default class BrowserStyles {
    constructor (securityKey) {
        if (securityKey !== instanceSecurityKey) throw new Error('Use .getInstance() instead of new!')

        this.styleSheetsList = Array.prototype.filter.call(document.styleSheets, styleSheet => styleSheet.href === null || styleSheet.href.substring(0, location.origin.length) === location.origin)
    }

    static getInstance () {
        if (!this[instanceId]) {
            this[instanceId] = new this(instanceSecurityKey)
        }
        return this[instanceId]
    }

    _modifyCssRule (cssRule) {
        PseudoClasses.getInstance().list.forEach(pseudoClass => {
            if (cssRule.selectorText.includes(pseudoClass.selector)) {
                const selectors = cssRule.selectorText.split(',').map(selector => selector.trim())
                const targetSelectors = selectors.filter(selector => selector.includes(pseudoClass.selector))
                    .map(selector => selector.replace(pseudoClass.selectorRegExp, pseudoClass.substitute))
                cssRule.selectorText = selectors.concat(targetSelectors).join(', ')
            }
        })
    }

    modify () {
        const that = this
        this.styleSheetsList.forEach(function modifyStyleSheet (styleSheet) {
            [].forEach.call(styleSheet.cssRules, item => {
                if (item instanceof CSSStyleRule) {
                    that._modifyCssRule(item)
                } else if (item instanceof CSSMediaRule) {
                    modifyStyleSheet(item)
                }
            })
        })
    }

    getPropertiesFromStylesheets (selector) {
        let styles = {}

        const styleRuleMatchSelector = (styleRule) => {
            return styleRule.selectorText === selector ||
                styleRule.selectorText.split(',').map(item => item.trim()).includes(selector) ||
                this.constructor._selectorsAsArraysAreEqual(styleRule.selectorText, selector)
        }

        const parseStylesheet = (styleSheet) => {
            Array.from(styleSheet.cssRules)
                .filter(styleRule => styleRule.constructor === CSSStyleRule)
                .filter(styleRule => styleRuleMatchSelector(styleRule))
                .forEach(styleRule => { styles = styleRule.style })

            Array.from(styleSheet.cssRules)
                .filter(styleRule => styleRule.constructor === CSSMediaRule)
                .forEach(parseStylesheet)
        }

        this.styleSheetsList.forEach(parseStylesheet)

        if (Utils.isEmptyObject(styles)) Logger.getInstance().log(`SELECTOR STYLE NOT FOUND: ${selector}`)
        return styles
    }

    static _selectorsAsArraysAreEqual (s1, s2) {
        s1 = s1.split(',').map(item => item.trim())
        s2 = s2.split(',').map(item => item.trim())
        return s1.every(item => s2.includes(item))
    }

    getPropertiesFromElement (selectorObj) {
        const target = this._getTargetElement(selectorObj)
        const resStyle = {}
        if (target) {
            let i = 0
            while (target.style[i]) {
                const camelizedProperty = Utils.toCamelCase(target.style[i])
                resStyle[camelizedProperty] = target.style[camelizedProperty]
                ++i
            }
        }
        return resStyle
    }

    getComputedElementProperties (selectorObj) {
        const target = this._getTargetElement(selectorObj)
        if (target) {
            return window.getComputedStyle(target, selectorObj.pseudoElement)
        }
        return {}
    }

    _getTargetElement (selectorObj) {
        const pseudoClasses = PseudoClasses.getInstance()

        pseudoClasses.list.forEach(pseudoClass => {
            if (selectorObj.selector.includes(pseudoClass.selector)) {
                const startPosition = selectorObj.selector.indexOf(pseudoClass.selector)
                const targetElementSelector = selectorObj.selector.substring(0, startPosition)
                document.querySelector(targetElementSelector).classList.add(pseudoClass.substituteName)
            }
        })

        return document.querySelector(pseudoClasses.replacePseudoClassesToSubstitutes(selectorObj.selector))
    }
}
