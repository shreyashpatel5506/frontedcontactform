$(document).ready(function(){
    $(".input").click(function(){
    $('.input').focus(function(){
        $(this).css('background-color', 'green');
    });
    $(".input").blur(function(){
        $(this).css('background-color','white');
    });
});
    $("#submit").click(function(event){
        event.preventDefault();
        $("#fname").attr("required","true");
    
        if($("#fname").val().trim()===""){
            $("#fer").show();
        }
        else if($("#lname").val().trim()===""){
            $("#ler").show();
        }
        else if($("#email").val().trim()===""){
            $("#eer").show();
        }
        else if($("#Message").val().trim()===""){
            $("#merr").show();
        }
        else{
            $("#fer").hide();
            $("#ler").hide();
            $("#eer").hide();
            $("#Message").hide();
            $("#success2").addClass("sucess1");
            $("#success2").removeClass("success");
            $("#fname").val()==="";
            $("#lname").val()==="";
            $("#email").val()==="";
            $("#Message").val()==="";
        }
    });
});

// let submitbutton = document.getElementById("submit")
// submitbutton.addEventListener("click",(e)=>{
//     e.preventDefault();
//      let success=true;

//      const firstname=e.target.querySelector("input[name='firstname']")
//      if(firstname.value===""){
//         document.getElementById("fer").classList.add("display");
//         document.getElementById("fer").classList.remove("error");
//      }
//      else{
//         document.getElementById("fer").classList.remove("display");
//         document.getElementById("fer").classList.add("error");
//      }
// })