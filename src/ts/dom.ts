class DOM {
    _parent: JQuery;

    constructor() {
        this._parent = $('body');
    }

    render(chilren: Widget): DOM {
        chilren.render(this._parent);

        return this;
    }
}