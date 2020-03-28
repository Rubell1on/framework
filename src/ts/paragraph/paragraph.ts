class Paragraph extends Widget {
    constructor(options: IOptions) {
        super(options);
        this[Symbol.toStringTag] = 'paragraph';
        this._html = `<p class="paragraph ${this.spacedClassName}">${this._props && this._props.text ? this._props.text : ''}</p>`;
    }

    render(parent: JQuery): Widget {
        super.render(parent);
        
        return this;
    }
}