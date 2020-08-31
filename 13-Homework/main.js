//function * newFontGenerator(start) {
//    for (let i = start; i < 100; i -= 2) {
//        start += i;
//        yield i;
//    }
//}
//const fontGenerator = newFontGenerator(14);
//console.log("fontGenerator.next().value -> " + fontGenerator.next().value);
//console.log("fontGenerator.next().value -> " + fontGenerator.next().value);
//console.log("fontGenerator.next().value -> " + fontGenerator.next().value);
//console.log("fontGenerator.next().value -> " + fontGenerator.next().value);
//


//function generateFont(){
//    let font = document.getElementByClass('.text');
//    for (var i = 0; i < font.length; i++) {
//                font[i].onclick=(function (Obj){
//                    return function (){
//                        Obj.style.fontSize = fontGenerator.next().value;
//                    };
//                })(font[i]);
//            };
//}
//
////
////window.onload=function (){
//     (function (tag_name){
//     var toggle_fs=function() {
//         if(this.dataset.org_font) {
//             this.style.fontSize='17px';
//             this.dataset.org_font= '';
//         } else {
//             this.dataset.org_font = this.style.fontSize='36px';
//         }
//     };
//
//     var p=document.getElementsByTagName(tag_name);
//     for (var i=0; i<p.length; i++)
//         p[i].addEventListener('click', toggle_fs, false);
//
// }
// )('p');
// };
