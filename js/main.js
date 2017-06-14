/**
 * Created by mikol on 14.06.2017.
 */
window.onload = function() {
    var input = document.querySelector('input[type=range]'),
        style_el = document.createElement('style'),
        styles = [],
        track_sel = ['::-webkit-slider-runnable-track'];
    document.body.appendChild(style_el);

    styles.push('');

    input.addEventListener('input', function() {
        var min = this.min || 0,
            max = this.max || 100,
            c_style, u, edge_w, val, str = '';

        this.setAttribute('value', this.value);

        val = this.value + '% 100%';
        str += 'input[type="range"]' + track_sel[0] + '{background-size:' + val + '}';

        styles[0] = str;
        style_el.textContent = styles.join('');
    }, false);
}

/*yakor*/


$(document).ready(function(){
    $("#nav").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

/*option*/

function addOption (oListbox, text, value, isDefaultSelected, isSelected)
{
    var oOption = document.createElement("option");
    oOption.appendChild(document.createTextNode(text));
    oOption.setAttribute("value", value);

    if (isDefaultSelected) oOption.defaultSelected = true;
    else if (isSelected) oOption.selected = true;

    oListbox.appendChild(oOption);
}

for(var i = 1980; i <= 2010; i++){
    var objSel = document.getElementById("birthday");
    addOption(objSel, i, i, true);
}