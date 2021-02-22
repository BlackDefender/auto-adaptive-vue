import StyleNode from './StyleNode'
import Logger from './Logger'
import LineByLineParser from '@/engine/classes/LineByLineParser'
import Settings from '@/engine/classes/Settings'
import ASTParser from '@/engine/classes/ASTParser'

export default class SCSS {
    constructor (scss) {
        this.scss = scss
    }

    validate () {
        if (this.scss.trim().length === 0) {
            Logger.getInstance().log('ERROR: Input is empty')
            return false
        }
        return true
    }

    parse () {
        if (!this.validate()) {
            return new StyleNode('')
        }
        const settings = Settings.getInstance()
        let parser
        if (settings.parser === 'ast') {
            parser = new ASTParser(this.scss)
        } else {
            parser = new LineByLineParser(this.scss)
        }
        return parser.parse()
    }
}
