class Container extends Widget {
    constructor(options) {
        super(options);
        this[Symbol.toStringTag] = 'container';
        this._html = `<div class="container ${this.spacedClassName}"></div>`;
    }
    render(parent) {
        super.render(parent);
        this._renderChildren(this);
        return this;
    }
    _renderChildren(parent) {
        if (this && this._children && this._children.length) {
            this._children.forEach(child => {
                child.render(parent);
            });
        }
    }
}
