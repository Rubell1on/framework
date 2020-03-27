class Container extends Widget {
    constructor(options: IOptions) {
        super(options);
        this[Symbol.toStringTag] = 'container';
    }

    render(parent: JQuery): Widget {
        this._html = `<div class="container ${this.spacedClassName}"></div>`;
        super.render(parent);
        this._renderChildren(this);

        return this;
    }

    _renderChildren(parent: Widget) {
        if (this && this._children && this._children.length) {
            this._children.forEach(child => {
                child.render(parent);
            })
        }
    }
}