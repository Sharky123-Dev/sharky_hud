var mover = false;
var mover2 = false;
var isToggle = false;

$(document).ready(function () {
    window.addEventListener('message', function (event) {
        var message = event.data;
        if (message.action === 'openConfig') {
            $('#modal_config').modal({
                backdrop: false,
                show: true,
                focus: true
            })
        } else if (message.action === 'change') {
            $('#progress3').css({ 'width': message.vida + "%" })
            $('#progress2').css({ 'width': message.comida + "%" })
            $('#progress1').css({ 'width': message.agua + "%" })
            if (message.blindaje > 0) {
                $('#progress4').fadeIn();
                $('#progress4').css({ 'width': message.blindaje + "%" });
                $('#progress4').css({ 'display': 'block'});
            } else {
                $('#progress4').fadeOut();
            }

        } else if (message.action === 'moverHud') {
            if (mover == false) {
                mover = true;
                $('.caja').draggable().draggable('enable');
                new Noty({ text: 'Recuerda usar el comando /moverhud, nuevamente para desactivar el movimiento del hud, para cerrar esto usa [ESC]', animation: { open: 'animated bounceInRight', close: 'animated bounceOutRight'}, timeout: 4000, progressBar: true, type: 'warning'}).show();
            } else {
                mover = false;
                $('.caja').draggable().draggable('disable');
            }
        } else if (message.isVeh === true) {
            $('.left-top').css({ 'margin-left': '345px' })
            $('.left-top').css({ 'left': '' })
            $('.left-top').css({ 'bottom': '' })
            $('.left-top').css({ 'right': '' })
            $('.left-top').css({ 'top': '' })
        } else if (message.isVeh2 === false) {
            $('.left-top').css({ 'margin-left': '10px' })
        } else if (message.action === 'toggleHud') {
            if (isToggle == false) {
                $('.caja').fadeOut(500);
                isToggle = true;
            } else {
                $('.caja').fadeIn(500);
                isToggle = false;
            }
        }
    });
});


$(document).keydown(function (e) {
    var isHud = false;
    if (e.keyCode == 27) {
        $('#modal_config').modal({
            show: false,
            focus: false
        })
        $.post("https://sharky_huds/close");
    }
});

$(function() {
    $('#cp1')
        .colorpicker({
            format: 'hex'
        })
        .on('colorpickerChange colorpickerCreate', function (e) {
            $(".color1").css({ 'background-color': e.color.toString() + "!important" });
            color1 = e.color.toString();
        });

    $('#cp2')
        .colorpicker({
            format: 'hex'
        })
        .on('colorpickerChange colorpickerCreate', function (e) {
            $(".color2").css({ 'background-color': e.color.toString() + "!important" });
            color2 = e.color.toString();
        });

    $('#cp3')
        .colorpicker({
            format: 'hex'
        })
        .on('colorpickerChange colorpickerCreate', function (e) {
            $(".color3").css({ 'background-color': e.color.toString() + "!important" });
            color3 = e.color.toString();
        });

    $('#cp4')
        .colorpicker({
            format: 'hex'
        })
        .on('colorpickerChange colorpickerCreate', function (e) {
            $(".color4").css({ 'background-color': e.color.toString() + "!important" });
            color4 = e.color.toString();
        });

    $('#cp5')
        .colorpicker({
            format: 'hex'
        })
        .on('colorpickerChange colorpickerCreate', function (e) {
            $(".fas").css({ 'color': e.color.toString() });
            color4 = e.color.toString();
        });
});


$(document).on('change', '#draggable', function (e) {
    if (this.checked) {
        $('.caja').draggable().draggable('enable');
    } else {
        $('.caja').draggable().draggable('disable');
    }
});

$(document).on('change', '#up', function (e) {
    if (this.checked) {
        $('.caja').css({ 'position': 'relative' })
    } else {
        $('.caja').css({ 'position': '' })
    }
});

$('#close').click(function (e) {
    $.post("https://sharky_huds/close");
});
