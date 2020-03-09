import StyleNode from './StyleNode'
export default class MediaNode extends StyleNode {
    constructor (maxWidth) {
        super('')
        this.selector = [`@media (max-width: ${maxWidth}px)`]
    }
    setWidth (width) {
        this.selector = [`@media (max-width: ${width}px)`]
    }
}
