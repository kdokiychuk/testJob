/**
 * Created by mikol on 14.06.2017.
 */
$(document).ready(function () {
    $("#formAnketa").submit(function () {
        var str = $(this).serialize();
        $.ajax({
            type: "POST",
            data: str,
            success: function () {
                    $('.main').hide();
                    $('body').html(" <h1 class='title'>Спасибо за внимание!!!</h1>");
            }
        });
        return false;
    });
});