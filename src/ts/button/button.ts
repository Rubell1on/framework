class Button extends Widget {
    constructor(options: IOptions) {
        super(options);
        
        this._html = `<input type="button" class="button ${this.spacedClassName}" value="${this._props.value}">`;
    }

    render(parent: any): Widget {
        super.render(parent);

        return this;
    }
}