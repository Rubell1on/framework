class Paragraph extends Widget {
    constructor(options) {
        super(options);
        this[Symbol.toStringTag] = 'paragraph';
        this._html = `<p class="paragraph ${this.spacedClassName}">${this._props && this._props.text ? this._props.text : ''}</p>`;
    }
    render(parent) {
        super.render(parent);
        return this;
    }
}
