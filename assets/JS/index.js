function Content__removeClass() {
    $('.content__review-item--rw').removeClass('active');
    $('.content__review-item--category').removeClass('active');
    $('.content__review-item--history').removeClass('active');
    $('.content__review-item--awards').removeClass('active');
    $('.content__review-info--rw').removeClass('active');
    $('.content__review-info--category').removeClass('active');
    $('.content__review-info--history').removeClass('active');
    $('.content__review-info--awards').removeClass('active');
}
function Content__review_Hover() {
    $('.content__review-item--rw').on('mouseenter', function () {
        Content__removeClass();
        $('.content__review-item--rw').addClass('active');
        $('.content__review-info--rw').addClass('active');
    })
    $('.content__review-item--category').on('mouseenter', function () {
        Content__removeClass();
        $('.content__review-item--category').addClass('active');
        $('.content__review-info--category').addClass('active');
    })
    $('.content__review-item--history').on('mouseenter', function () {
        Content__removeClass();
        $('.content__review-item--history').addClass('active');
        $('.content__review-info--history').addClass('active');
    })
    $('.content__review-item--awards').on('mouseenter', function () {
        Content__removeClass();
        $('.content__review-item--awards').addClass('active');
        $('.content__review-info--awards').addClass('active');
    })

}

function Content__Project_removeClass() {
    $('.content__project-ChungCu').removeClass('active');
    $('.content__project-BietThu').removeClass('active');
    $('.content__project-NhaPho').removeClass('active');
    $('.content__project-NhaHang').removeClass('active');
    $('.content__project-PhongKhachBep').removeClass('active');
    $('.content__project-PhongNgu').removeClass('active');
    $('.content__project-PhongTreEm').removeClass('active');

    $('.content__project-viewer_ChungCu').removeClass('active');
    $('.content__project-viewer_BietThu').removeClass('active');
    $('.content__project-viewer_NhaPho').removeClass('active');
    $('.content__project-viewer_NhaHang').removeClass('active');
    $('.content__project-viewer_PhongKhachBep').removeClass('active');
    $('.content__project-viewer_PhongNgu').removeClass('active');
    $('.content__project-viewer_PhongTreEm').removeClass('active');
}

function content__project_item_Click() {
    $('.content__project-ChungCu').on('click', function () {
        Content__Project_removeClass();
        $('.content__project-ChungCu').addClass('active');
        $('.content__project-viewer_ChungCu').addClass('active');
    })
    $('.content__project-BietThu').on('click', function () {
        Content__Project_removeClass();
        $('.content__project-BietThu').addClass('active');
        $('.content__project-viewer_BietThu').addClass('active');
    })
    $('.content__project-NhaPho').on('click', function () {
        Content__Project_removeClass();
        $('.content__project-NhaPho').addClass('active');
        $('.content__project-viewer_NhaPho').addClass('active');
    })
    $('.content__project-NhaHang').on('click', function () {
        Content__Project_removeClass();
        $('.content__project-NhaHang').addClass('active');
        $('.content__project-viewer_NhaHang').addClass('active');
    })
    $('.content__project-PhongKhachBep').on('click', function () {
        Content__Project_removeClass();
        $('.content__project-PhongKhachBep').addClass('active');
        $('.content__project-viewer_PhongKhachBep').addClass('active');
    })
    $('.content__project-PhongNgu').on('click', function () {
        Content__Project_removeClass();
        $('.content__project-PhongNgu').addClass('active');
        $('.content__project-viewer_PhongNgu').addClass('active');
    })
    $('.content__project-PhongTreEm').on('click', function () {
        Content__Project_removeClass();
        $('.content__project-PhongTreEm').addClass('active');
        $('.content__project-viewer_PhongTreEm').addClass('active');
    })
}

function check(ID, Regex, message = '') {
    if ($(ID).val() === "") {
        $(ID).next('.form-message').text('Please enter this field!').show();
        return false;
    } else if (Regex !== '0') {
        if (!Regex.test($(ID).val())) {
            $(ID).next('.form-message').text(message).show();
            return false;
        }
    }
    $(ID).next(".form-message").hide();
    return true;
}

function reset() {
    $('#Design_style').val('');
    $('#Investment_cost').val('');
    $('#Total_area').val('');
    $('#Name').val('');
    $('#Email').val('');
    $('#Phone').val('');
    $(".form-message").hide();

}

$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition > 100) {
            $('#Header').addClass('fixed');
        } else {
            $('#Header').removeClass('fixed');
        }
    });

    Content__review_Hover();
    content__project_item_Click();

    $('#Design_style').on('input', () => { check('#Design_style', '0', '') })
    $('#Investment_cost').on('input', () => { check('#Investment_cost', /^\d$/, 'Invalid input!') })
    $('#Total_area').on('input', () => { check('#Total_area', /^\d$/, 'Invalid input!') })
    $('#Name').on('input', () => { check('#Name', /^[\p{L}\s]+$/u, 'Names are only alphanumeric!') })
    $('#Email').on('input', () => { check('#Email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter the correct email format!\nExample: abc@gmail.com') })
    $('#Phone').on('input', () => { check('#Phone', /^0[1-9]\d{8,10}$/, 'Invalid phone number!') })


    $('#submit').click(function (e) {
        e.preventDefault();
        const isDesign_style = $('#Design_style').on('input', () => { check('#Design_style', '0', '') });
        const isInvesment_cost = $('#Investment_cost').on('input', () => { check('#Investment_cost', /^\d$/, 'Invalid input!') });
        const isTotal_area = $('#Total_area').on('input', () => { check('#Total_area', /^\d$/, 'Invalid input!') });
        const isName = $('#Name').on('input', () => { check('#Name', /^[\p{L}\s]+$/u, 'Names are only alphanumeric!') });
        const isEmail = $('#Email').on('input', () => { check('#Email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter the correct email format!\nExample: abc@gmail.com') });
        const isPhone = $('#Phone').on('input', () => { check('#Phone', /^0[1-9]\d{8,10}$/, 'Invalid phone number!') });

        if (isName && isEmail && isContent && isNotRobot) {
            reset();
            alert('Bạn đã đăng ký thành công!')
        }
    })
})