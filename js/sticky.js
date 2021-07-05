$(document).ready(function ()
{
    $(window).scroll(function ()
    {
        var distance = $(window).scrollTop();
        //console.log(distance);

        if( distance > 180 )
        {
            $('.exxen-sub-form').attr('class', 'exxen-sub-form-open');
        }

        else
        {
            $('.exxen-sub-form-open').attr('class', 'exxen-sub-form');
        }
    });
});