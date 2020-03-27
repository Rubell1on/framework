class Button extends Widget {
    constructor(options: IOptions) {
        super(options);
    }

    render(parent: any): Widget {
        this._html = `<input type="button" class="button ${this.spacedClassName}" value="${this._props.value}">`
        super.render(parent);

        return this;
    }
}