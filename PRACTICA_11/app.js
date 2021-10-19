$(function() {




    
    $('.s1').on({
        mouseenter: function() {
            $(this).css({"color": "yellow"});
        },
        mouseleave: function() {
            $(this).css({"color": "white"});
        },
        click: function() {
            $(this).css({"color": "red"});
            $(this).css({"font-size": "110px"});
        }
    })


    $('.s2').on({
        mouseenter: function() {
            $(this).css({"color": "yellow"});
            $('.s1').css({"color": "yellow"});
        },
        mouseleave: function() {
            $(this).css({"color": "white"});
            $('.s1').css({"color": "white"});
        },
        click: function() {
            $(this).css({"color": "red"});
            $(this).css({"font-size": "110px"});
        }
    })


    $('.s3').on({
        mouseenter: function() {
            $(this).css({"color": "yellow"});
            $('.s1').css({"color": "yellow"});
            $('.s2').css({"color": "yellow"});

        },
        mouseleave: function() {
            $(this).css({"color": "white"});
            $('.s1').css({"color": "white"});
            $('.s2').css({"color": "white"});
        },
        click: function() {
            $(this).css({"color": "red"});
            $(this).css({"font-size": "110px"});
        }
    })


    $('.s4').on({
        mouseenter: function() {
            $(this).css({"color": "yellow"});
            $('.s1').css({"color": "yellow"});
            $('.s2').css({"color": "yellow"});
            $('.s3').css({"color": "yellow"});
        },
        mouseleave: function() {
            $(this).css({"color": "white"});
            $('.s1').css({"color": "white"});
            $('.s2').css({"color": "white"});
            $('.s3').css({"color": "white"});
        },
        click: function() {
            $(this).css({"color": "red"});
            $(this).css({"font-size": "110px"});
        }
    })



    $('.s5').on({
        mouseenter: function() {
            $(this).css({"color": "yellow"});
            $('.s1').css({"color": "yellow"});
            $('.s2').css({"color": "yellow"});
            $('.s3').css({"color": "yellow"});
            $('.s4').css({"color": "yellow"});

        },
        mouseleave: function() {
            $(this).css({"color": "white"});
            $('.s1').css({"color": "white"});
            $('.s2').css({"color": "white"});
            $('.s3').css({"color": "white"});
            $('.s4').css({"color": "white"});

        },
        click: function() {
            $(this).css({"color": "red"});
            $(this).css({"font-size": "110px"});
        }
    })


    // $('.s1').mouseenter(function() {
    //     $('.s1').css({"color": "yellow"});
    // })
    // $('.s1').mouseleave(function() {
    //     $('.s1').css({"color": "white"});
    // })
    // $('.s1').click(function() {
    //     $('.s1').css({"color": "yellow"})
    // })

    // $('.s2').mouseenter(function() {
    //     $('.s1,.s2').css({"color": "yellow"});
    // })
    // $('.s1').mouseleave(function() {
    //     $('.s1,.s2').css({"color": "white"});
    // })

    // $('.s3').mouseenter(function() {
    //     $('.s1,.s2,.s3').css({"color": "yellow"});
    // })
    // $('.s3').mouseleave(function() {
    //     $('.s1,.s2,.s3').css({"color": "white"});
    // })

    // $('.s4').mouseenter(function() {
    //     $('.s1,.s2,.s3,.s4').css({"color": "yellow"});
    // })
    // $('.s4').mouseleave(function() {
    //     $('.s1,.s2,.s3,.s4').css({"color": "white"});
    // })

    // $('.s5').mouseenter(function() {
    //     $('.s1,.s2,.s3,.s4,.s5').css({"color": "yellow"});
    // })
    // $('.s5').mouseleave(function() {
    //     $('.s1,.s2,.s3,.s4,.s5').css({"color": "white"});
    // })


})

