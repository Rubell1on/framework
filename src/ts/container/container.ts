class Container extends Widget {
    constructor(options: IOptions) {
        super(options);
        this[Symbol.toStringTag] = 'container';
        this._html = `<div class="container ${this.spacedClassName}"></div>`;
    }

    render(parent: JQuery): Widget {
        super.render(parent);
        this._renderChildren(this);

        return this;
    }

    private _renderChildren(parent: Widget | Wrapper) {
        if (this && this._children && this._children.length) {
            this._children.forEach(child => {
                const temp = child instanceof Wrapper ? child.widget : child;
                temp.render(parent);
            })
        }
    }
}