class Wrapper {
    private _widget: Widget;
    
    constructor(widget: Widget) {
        this._widget = widget;
    }

    public get widget(): Widget {
        return this._widget;
    }
}