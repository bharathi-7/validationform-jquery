function validateform(){
    var nameReg = /^[A-Za-z]+$/;
    var names = $('#name').val();
    var dob= $('#birth').val();
    // console.log("hai",dob)
    var email= $('#email').val();
    var emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var phoneno= $('#pnumber').val();
    var pnumberregex = /^[6-9]\d{9}$/;
    var gender= $('#gender input[type="radio"]:checked').val();
    // console.log("hai",gender)
    var country= $('#country').val();
    // console.log("hai",country)
    var check= $('#check input[type="checkbox"]:checked').val();
    console.log("hai",check)
    var card = $("#card1")  
    if(namevalidation(names,nameReg)){
        $("#uname").html( " ")
        if(dobvalidation(dob)){
            $("#uage").html(" ")
            if(emailvalidation(email,emailregex)){
                $("#uemail").html(" ")
                if(phonevalidation(phoneno,pnumberregex)){
                    $("#upnumber").html(" ")
                    if(gendervalidation(gender)){
                        $("#ugender").html( "")
                        if(countryvalidation(country)){
                            $("#countryerr").html("")
                            if(checkboxvalidation(check)){
                                $("#text").html(" ")
                                if(card){
                                        alert("form submiitted successfully");
                                        $("#card1").show();
                                    setTimeout(function(){
                                        location.reload()

                                    },2000)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


function namevalidation(firstname,firstnameregex){
    if(firstname=="")
      {
        $("#uname").html( "Name is a required field.")
        $("#name").attr('required', 'required'); 
        return false;
      }else if(firstnameregex.test(firstname)==false){
        $("#uname").html( "use only alphabets") 
            return false;
        }else{
            return true;
        }

}
function dobvalidation(date)
{
    if(!date)
    {
    $("#uage").html("DateOfBirth is a required field.")
    $("#birth").attr('required', 'required');
      return false;
    }
    else 
    {
      return true;
    }
}
function emailvalidation(email,emailregex){
    if(!email){
      $("#uemail").html("Email is a required field.")
      $("#email").attr('required', 'required');
      return false;
    }else if (emailregex.test(email) == false){
      $("#uemail").html("enter valid email.")
      return false;
    }else{
      return true;
    }
}   
function phonevalidation(phoneno,pnumberregex)
  {
    if(phoneno==""||phoneno==null||phoneno==undefined)
    {
        $("#upnumber").html( "Phone number is a required field.")
        $("#pnumber").attr('required', 'required');
        return false;
    }else if (pnumberregex.test(phoneno) == false) 
      {
        $("#upnumber").html("enter valid phone number")
         return false;
      }
    else 
    {
      return true;
    }
  }
  function gendervalidation(gender)
  {
    if(!gender)
    {
        $("#ugender").html("Gender is a required field.")
      return false;
    }
    else 
    {
      return true;
    }
}
function countryvalidation(country)
{
  if(country=="")
  {
    $("#countryerr").html( "Country is a requrired field")
    return false;
  }
  else 
  {
    return true;
  }
}
function checkboxvalidation(check)
{
  if (!check) 
  {
    $("#text").html( "checkbox is a requrired field")
    return false;
  }
  else 
  {
    return true;
  }
}