class Header extends Wrapper {
    constructor() {
        const widget = new Container({
            class: ['header', 'header_orange', 'header_justify-content_space-between', 'header_align-items_center'],
            children: [
                new Button({
                    class: ['header__icon'],
                    props: { value: 'icon' },
                    events: { _click: () => console.log('Opened main page') }
                }),
                new Container({
                    class: ['header__controls'],
                    children: [
                        new Button({
                            class: ['header__login', 'button_filled', 'button_sm', 'button_margin-right_5px'],
                            props: { value: 'Логин' },
                            events: { _click: () => console.log('Opened login window') }
                        }),
                        new Button({
                            class: ['header__contacts', 'button_sm'],
                            props: { value: 'Контакты' },
                            events: { _click: () => console.log('Opened contacts window') }
                        })
                    ]
                })
            ]
        });

        super(widget);
    }
}