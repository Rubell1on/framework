class DOM {
    constructor() {
        this._parent = $('body');
    }
    render(chilren) {
        chilren.render(this._parent);
        return this;
    }
}
