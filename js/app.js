$(document).ready(function() {
    $('select').material_select();

    $('.collapsible').collapsible();

    $('.modal').modal();

    //sidenav ish

    // $(".button-collapse").sideNav();

    $('.button-collapse').sideNav({
        menuWidth: 200, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true
    });



    $('section, .ticket').hide();
    $('.initial').show();
    $('.tickets').on('click', () => {
        // alert('hello')
        $('.ticket').toggle('show');
        $('.tickets > i ').toggleClass('ion-chevron-right ion-chevron-down');
        // $('.tickets>i').toggle(addClass('ion-chevron-down'))

    })

    $('.allTickets').on('click', () => {
        // $('.rightPanel').html() = '';
        $('section').hide();
        $('.tickets').show()

    })
    $('.activeTicket').on('click', () => {
        // $('.rightPanel').html() = '';
        $('section').hide();
        $('.presentTicket').show()

    })
    $('.labout').on('click', () => {
        $('section').hide();
        $('.about').show()
    })
    $('.lhelp').on('click', () => {
        $('section').hide();
        $('.help').show()
    })

    $('.lprofile').on('click', () => {
        $('section').hide();
        $('.initial').show()
    })

    $('.collapsible-header').on('click', () => {
        $('this .collapsible-header > i').toggleClass('ion-chevron-right ion-chevron-down')
    })





})