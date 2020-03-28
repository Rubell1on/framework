abstract class Widget {
    protected _className: string[] = [];
    protected _object: JQuery;
    protected _parent: Widget;
    protected _children: Widget[] = [];
    protected _html: string;
    protected _props: any = {};
    protected _style: Object = {};
    protected _events: IEvents = new Events({});

    constructor(options: IOptions) {
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
        })
    }

    get className(): string {
        return this._className.join('.');
    }

    get spacedClassName(): string {
        return this._className.join(' ');
    }

    render(parent: any): Widget {
        if (parent instanceof Widget) {
            this._object = parent._object.append(this._html).find(`.${this.className}`).last();
            this._parent = parent;
        } else {
            this._object = parent.append(this._html).find(`.${this.className}`).last();
        } 

        

        if (Object.keys(this._events).length) {
            if (this && this._events && this._events._click) this._object.click(() => this._events._click(this));
        }
        // if (Object.keys(this._style).length) {
        //     this._object.css(this._style);
        // }

        return this;
    }

    get parent() { return this._parent}
    
    set parent(parent: Widget) { this._parent = parent }   

    destroy(): void {
        if (!$.isEmptyObject(this._object))
            this._object.remove();
    }

    getType(): string {
        return this.toString();
    }

    isTypeOf(type: string): boolean {
        return this.getType().includes(type);
    }

    isClassOf(className: string): boolean {
        return this.className.includes(className) ? true : false;
    }
}

interface IEvents {
    _click: Function;
}

class Events implements IEvents {
    _click: Function = undefined;

    constructor(events: Object) {
        const self = Object.entries(this);
        Object.entries(events).forEach(e => {
            const key = e[0];
            const field = self.find(f => f[0].includes(key));
            if (field) {
                const func = e[1];
                this[field[0]] = func;
            }
        })
    }
}

interface IOptions {
    class: string[];
    style: Object;
    events: IEvents;
    props: Object;
    children: Object;
}

class Options implements IOptions {
    class: string[] = [];
    style: Object = {};
    events: IEvents = new Events({});
    props: Object = {};
    children: Object = [];

    constructor(options) {
        const self = Object.entries(this);
        Object.entries(options).forEach(o => {
            const key = o[0];
            const field = self.find(f => f[0].includes(key));
            if (field) {
                const option = o[1];
                this[field[0]] = option;
            }
        })
    }
}