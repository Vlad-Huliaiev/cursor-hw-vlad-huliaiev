function * newFontGenerator(start = 2, end = 100, step = 2) {
    let range = 0;
    for (let i = start; i < end; i += step) {
        range += step;
        yield range;
    }
}

const fontGenerator = newFontGenerator();


for (let i = 0; i < 10; i++) {
  console.log("fontGenerator.next().value -> " + fontGenerator.next().value);
}

function generateFont(){
    let font = document.getElementByClass('.text');
    for (var i = 0; i < font.length; i++) {
                font[i].onclick=(function (Obj){
                    return function (){
                        Obj.style.fontSize = fontGenerator.next().value;
                    };
                })(font[i]);
            };
}

//
//window.onload=function (){
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
