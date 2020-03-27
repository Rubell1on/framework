class HTMLTag {
    constructor(options) {
        this._wClose = true;
        Object.entries(options).forEach(e => {
            const key = e[0];
            const value = e[1];
            this[`_${key}`] = value;
        });
    }
    toString() {
        const self = Object.entries(this).reduce((acc, el) => {
            const key = el[0];
            const val = el[1];
            if (!['_tag', '_wClose', '_value'].includes(key)) {
                const newKey = key.substr(1);
                acc[newKey] = val;
            }
            return acc;
        }, {});
        const tag = this._tag;
        const value = this && this._value ? this._value : '';
        // const attrs = Object.entries(self).map(e => e[0]+`="${e[1]}"`).join(' ');
        return `<${tag}>${this._wClose ? `${value}</${tag}>` : ''}`;
    }
}
