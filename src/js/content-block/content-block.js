class ContentBlock extends Wrapper {
    constructor(text, description) {
        const widget = new Container({
            class: ['content__block'],
            children: [
                new Container({
                    class: ['content__top'],
                    children: [
                        new Paragraph({
                            class: ['content__info'],
                            props: { text: text }
                        })
                    ]
                }),
                new Container({
                    class: ['content__bottom'],
                    children: [
                        new Paragraph({
                            class: ['content__description'],
                            props: { text: description }
                        })
                    ]
                })
            ]
        });

        super(widget);
    }
}