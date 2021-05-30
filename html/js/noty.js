$(document).ready(function () {
    window.addEventListener('message', function (event){
        var event = event.data
        if (event.action === 'noty'){
            new Noty({
                text: event.text,
                type: event.type,
                layout: event.layout,
                theme: event.theme,
                timeout: event.timeout,
                progressBar: true,
                animation: {
                    open: 'animated bounceInRight',
                    close: 'animated bounceOutRight'
                }
            }).show();
        }
    });
});
