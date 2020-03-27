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
        Header
    ]
})

new DOM().render(page);
const html = new HTMLTag({tag: 'a', style: {}}).toString();



console.log();