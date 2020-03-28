class Button extends Widget {
    constructor(options) {
        super(options);
        this._html = `<input type="button" class="button ${this.spacedClassName}" value="${this._props.value}">`;
    }
    render(parent) {
        super.render(parent);
        return this;
    }
}
