import StyleNode from './StyleNode'
export default class MediaNode extends StyleNode {
    constructor (fromWidth, toWidth) {
        super('')
        this.rule = Number.parseInt(fromWidth) > Number.parseInt(toWidth) ? 'max-width' : 'min-width'
        this.selector = [`@media (${this.rule}: ${fromWidth}px)`]
    }
    setWidth (width) {
        this.selector = [`@media (${this.rule}: ${width}px)`]
    }
}
