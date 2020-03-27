class Paragraph extends Widget {
    constructor(options: IOptions) {
        super(options);
        this[Symbol.toStringTag] = 'paragraph';
    }

    render(parent: JQuery): Widget {
        this._html = `<p class="paragraph ${this.spacedClassName}">${this._props && this._props.text ? this._props.text : ''}</p>`;
        super.render(parent);
        
        return this;
    }
}