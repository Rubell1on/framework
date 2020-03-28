class Widget {
    constructor(options) {
        this._className = [];
        this._children = [];
        this._props = {};
        this._style = {};
        this._events = new Events({});
        this[Symbol.toStringTag] = 'widget';
        const self = Object.entries(this);
        Object.entries(options).forEach(o => {
            const key = o[0];
            const field = self.find(f => f[0].includes(key));
            if (field) {
                const value = o[1];
                const key = field[0];
                this[key] = value;
            }
        });
    }
    get className() {
        return this._className.join('.');
    }
    get spacedClassName() {
        return this._className.join(' ');
    }
    render(parent) {
        if (parent instanceof Widget) {
            this._object = parent._object.append(this._html).find(`.${this.className}`).last();
            this._parent = parent;
        }
        else {
            this._object = parent.append(this._html).find(`.${this.className}`).last();
        }
        if (Object.keys(this._events).length) {
            if (this && this._events && this._events._click)
                this._object.click(() => this._events._click(this));
        }
        // if (Object.keys(this._style).length) {
        //     this._object.css(this._style);
        // }
        return this;
    }
    get parent() { return this._parent; }
    set parent(parent) { this._parent = parent; }
    destroy() {
        if (!$.isEmptyObject(this._object))
            this._object.remove();
    }
    getType() {
        return this.toString();
    }
    isTypeOf(type) {
        return this.getType().includes(type);
    }
    isClassOf(className) {
        return this.className.includes(className) ? true : false;
    }
}
class Events {
    constructor(events) {
        this._click = undefined;
        const self = Object.entries(this);
        Object.entries(events).forEach(e => {
            const key = e[0];
            const field = self.find(f => f[0].includes(key));
            if (field) {
                const func = e[1];
                this[field[0]] = func;
            }
        });
    }
}
class Options {
    constructor(options) {
        this.class = [];
        this.style = {};
        this.events = new Events({});
        this.props = {};
        this.children = [];
        const self = Object.entries(this);
        Object.entries(options).forEach(o => {
            const key = o[0];
            const field = self.find(f => f[0].includes(key));
            if (field) {
                const option = o[1];
                this[field[0]] = option;
            }
        });
    }
}
