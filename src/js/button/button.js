class Button extends Widget {
    constructor(options) {
        super(options);
    }
    render(parent) {
        this._html = `<input type="button" class="button ${this.spacedClassName}" value="${this._props.value}">`;
        super.render(parent);
        return this;
    }
}
