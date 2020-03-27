class Header extends Container {
    constructor(options: IOptions) {
        super(options);
    }

    render(parent: any): Widget {
        this._html = `<div class="header ${this.spacedClassName}"></div>`
        super.render(parent);

        return this;
    }
}