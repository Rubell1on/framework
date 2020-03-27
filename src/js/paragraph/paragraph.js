class Paragraph extends Widget {
    constructor(options) {
        super(options);
        this[Symbol.toStringTag] = 'paragraph';
    }
    render(parent) {
        this._html = `<p class="paragraph ${this.spacedClassName}">${this._props && this._props.text ? this._props.text : ''}</p>`;
        super.render(parent);
        return this;
    }
}
