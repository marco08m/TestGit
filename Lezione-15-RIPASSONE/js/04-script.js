
var lis = $('li');

$('li').attr('class', 'rosso');

console.log(lis[0].innerHTML);

for (var i = 0; i < lis.length; i++) {
    console.log(lis[i].innerHTML);
}

$('li').on('click', function () {
    $(this).append(' Dario')
})