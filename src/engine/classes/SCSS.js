import StyleNode from './StyleNode'
import TextNode from './TextNode'
import StyleProperty from './StyleProperty'
import MediaNode from './MediaNode'
import Logger from './Logger'
import Settings from './Settings'

export default class SCSS {
    constructor (scss) {
        this.scss = scss
        this.allCSSProperties = this.constructor.getAllCSSProperties()
    }

    static getAllCSSProperties () {
        return Object
            .keys(document.createElement('div').style)
            .map(cssProperty => cssProperty.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase())
    }

    validate () {
        if (this.scss.trim().length === 0) {
            Logger.getInstance().log('ERROR: Input is empty')
            return false
        }
        return true
    }

    prepareSCSSForParsing () {
        let dataString = this.scss
        // Доставляем закрывающие скобки если надо
        const openBraketsCount = dataString.match(/{/g).length
        const closeBraketsCount = dataString.match(/}/g).length
        if (openBraketsCount > closeBraketsCount) {
            const diff = openBraketsCount - closeBraketsCount
            dataString += `\n}`.repeat(diff)
        }
        // Удаляем комментарии, разбиваем на строки, обрезаем строки и удаляем пустые
        const commentRegExp = /\/\*[\s\S]*?\*\/|\/\/.*$/gm
        const dataArray = dataString.replace(commentRegExp, '')
            .split('\n')
            .map(str => str.trim())
            .filter(str => str !== '')
        // Убираем медиазапрос если он есть
        if (dataArray[0].includes('@media')) {
            dataArray.shift()
            dataArray.pop()
        }
        return dataArray
    }

    parse () {
        const selectorStartSymbols = ['#', '.', '&']
        const textStartSymbols = ['@', '$']
        if (!this.validate()) {
            return new StyleNode('')
        }

        const data = this.prepareSCSSForParsing()

        let currentNode

        const createStyleNode = dataItem => {
            if (dataItem.charAt(dataItem.length - 1) === ',') {
                return createStyleNode(dataItem + data.shift())
            } else {
                return new StyleNode(dataItem, currentNode)
            }
        }

        const parseDataItem = (dataItem) => {
            if (dataItem === undefined) return
            if (dataItem === '}') {
                currentNode = currentNode.parentNode
                if (currentNode.parentNode !== null) {
                    parseDataItem(data.shift())
                }
                return
            }
            if (selectorStartSymbols.includes(dataItem.charAt(0))) {
                const node = createStyleNode(dataItem)
                currentNode.appendChild(node)
                currentNode = node
                parseDataItem(data.shift())
                return
            }
            if (textStartSymbols.includes(dataItem.charAt(0))) {
                currentNode.appendProperty(new TextNode(dataItem))
                parseDataItem(data.shift())
                return
            }
            /* if(dataItem.charAt(0) === '&'){} */
            if (dataItem.includes(':') && this.allCSSProperties.includes(dataItem.split(':')[0].trim())) {
                currentNode.appendProperty(new StyleProperty(dataItem))
                parseDataItem(data.shift())
            } else {
                const node = createStyleNode(dataItem)
                currentNode.appendChild(node)
                currentNode = node
                parseDataItem(data.shift())
                // return;
            }
        }

        const settings = Settings.getInstance()

        if (settings.wrapIntoMedia) {
            currentNode = new MediaNode(settings.fromWidth)
            parseDataItem(data.shift())
            return currentNode
        } else {
            currentNode = new StyleNode('')
            parseDataItem(data.shift())
            currentNode.childNodes[0].parentNode = null
            return currentNode.childNodes[0]
        }
    }
}
