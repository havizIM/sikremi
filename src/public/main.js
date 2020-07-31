const mainUI = (() => {
    return {
        
    }
})()

const mainController = ((SET, UI) => {

    const _loadContent = path => {
        $.ajax({
            url: `${SET.baseURL()}page/${path}`,
            dataType: 'HTML',
            beforeSend: function () {
                // SET.pageLoader()
            },
            success: function (response) {
                $('#app_content').html(response)
                $('body').removeClass('modal-open')
                $('body').removeAttr('style')
            },
            error: function () {
                $('#app_content').load(`${SET.baseURL()}page_not_found`);
            },
            complete: () => {
                // SET.closePageLoader()
            }
        })
    }

    const _setRoute = () => {
        let path;

        if (location.hash) {
            path = location.hash;
            _loadContent(path.substr(2));
        } else {
            location.hash = '#/home';
        }

        $(window).on('hashchange', function (e) {
            path = location.hash;

            if ($('.modal').hasClass('show')) {
                // $('.modal').modal('hide');
                $('.modal-backdrop').remove();
            }

            _loadContent(path.substr(2));
        });
    }

    return {
        init: () => {
            _setRoute()
        }
    }
})(settingController, mainUI)