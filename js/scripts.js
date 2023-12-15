//for formOne
$(document).ready(function() {
    $("#formOne").submit(function(event) {
      event.preventDefault();
        const nameInput = $("input#name").val();
        const numberInput = $("input#number").val();
        const addressInput = $("input#address").val();
        const emailInput = $("input#email").val();
        const name2Input = $("input#name2").val();
        const number2Input = $("input#number2").val();
        const address2Input= $("input#address2").val();
        const email2Input = $("input#email2").val();
        const name3Input = $("input#name3").val();
        const number3Input = $("input#number3").val();
        const address3Input = $("input#address3").val();
        const email3Input = $("input#email3").val();
        const name4Input = $("input#name4").val();
        const number4Input = $("input#number4").val();
        const address4Input = $("input#address4").val();
        const email4Input = $("input#email4").val();
        const name5Input = $("input#name5").val();
        const number5Input = $("input#number5").val();
        const address5Input = $("input#address5").val();
        const email5Input = $("input#email5").val();


        $(".name").text(nameInput);
        $(".number").text(numberInput);
        $(".address").text(addressInput);
        $(".email").text(emailInput);
        $(".name2").text(name2Input);
        $(".number2").text(number2Input);
        $(".address2").text(address2Input);
        $(".email2").text(email2Input);
        $(".name3").text(name3Input);
        $(".number3").text(number3Input);
        $(".address3").text(address3Input);
        $(".email3").text(email3Input);
        $(".name4").text(name4Input);
        $(".number4").text(number4Input);
        $(".address4").text(address4Input);
        $(".email4").text(email4Input);
        $(".name5").text(name5Input);
        $(".number5").text(number5Input);
        $(".address5").text(address5Input);
        $(".email5").text(email5Input);
    

       $("#contact-Book").show();
});
     $(".click").click(function () {
     $("#details-Showing").show();
     $("#details-Hidden");
     });


    $(".click2").click(function () {
    $("#details2-Showing").show();
    $("#details2-Hidden");
    });

    $(".click3").click(function () {
    $("#details3-Showing").show();
    $("#details3-Hidden");
    });


    $(".click4").click(function () {
    $("#details4-Showing").show();
    $("#details4-Hidden");
    });


    $(".click5").click(function () {
    $("#details5-Showing").show();
    $("#details5-Hidden");
    });
});