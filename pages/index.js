// const page = new Container({
//     class: ['first'],
//     children: [
//         new Paragraph({ 
//             class: ['first__text'],
//             props: { text: 'first paragraph' } ,
//             events: { _click: t => console.log(t)}
//         }),
//         new Container({
//             class: ['second'],
//             children: [
//                 new Paragraph({
//                     class: ['second__text'],
//                     props: { text: 'second paragraph' },
//                     events: { _click: t => console.log(t)}
//                 })
//             ]
//         })
//     ]
// })

const page = new Container({
    class: ['wrapper'],
    children: [
        new Header().widget,
        new Container({
            class: ['content'],
            children: [
                new ContentBlock("Здесь находится текст 1", "А также описание 1").widget,
                new ContentBlock("Здесь находится текст 2", "А также описание 2").widget,
                new ContentBlock("Здесь находится текст 3", "А также описание 3").widget,
                new ContentBlock("Здесь находится текст 4", "А также описание 4").widget
            ]
        })
    ]
})

new DOM().render(page);
const html = new HTMLTag({tag: 'a', style: {}}).toString();



console.log();