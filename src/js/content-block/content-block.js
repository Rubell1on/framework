const contentBlock = new Container({
    class: ['content__block'],
    children: [
        new Container({
            class: ['content__top'],
            children: [
                new Paragraph({
                    class: ['content__info'],
                    props: { text: "Здесь находится какой-то очень важный текст. Пока не знаю какой, но какой-то точно есть:D"}
                })
            ]
        }),
        new Container({
            class: ['content__bottom'],
            children: [
                new Paragraph({
                    class: ['content__description'],
                    props: { text: "Описание того что находится сверху:D"}
                })
            ]
        })
    ]
})