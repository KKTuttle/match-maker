var coinToss=function(){
  if(Math.random()<0.5){
    return "m";
  }
  else{
    return "f";
  }
}

$(document).ready(function() {
  $("#matchMakerForm").submit(function(event){
    var name = $("#nameInput").val();
    console.log(name);

    var agePref = $("#agePref").val();
    console.log(agePref);

    var gender = $("#gender").val();
    console.log(gender);

    var lookingFor = $("#lookingFor").val();
    console.log(lookingFor);

    var hobby = $("#hobby").val();
    console.log(hobby);

    var idealDate = $("#idealDate").val();
    console.log(idealDate);

    $(".result").remove();
    if(lookingFor==="Women" && idealDate==="Party"){
      var celebMatch = "ja";
      var celebName = "Jennifer Aniston";
    }

    else if(lookingFor==="Women" && idealDate==="Fancy Restaurant"){
      var celebMatch = "jr";
      var celebName = "Julia Roberts";
    }
    else if(lookingFor==="Women" && idealDate==="Outdoor activity"){
      var celebMatch = "cd";
      var celebName = "Cameron Diaz";
    }
    else if(lookingFor==="Women" && idealDate==="Coffee shop"){
      var celebMatch = "aj";
      var celebName = "Angelina Jolie";
    }
    else if(lookingFor==="Women" && idealDate==="Art venue"){
      var celebMatch = "ah";
      var celebName = "Anne Hathaway";
    }
    else if(lookingFor==="Women" && idealDate==="Netflix and pizza"){
      var celebMatch = "jw";
      var celebName = "Jessica Williams";
    }
    else if(lookingFor==="Men" && idealDate==="Party"){
      var celebMatch = "ab";
      var celebName = "Antonio Banderas";
    }
    else if(lookingFor==="Men" && idealDate==="Fancy Restaurant"){
      var celebMatch = "tr";
      var celebName = "Donald 'loser' Trump";
    }
    else if(lookingFor==="Men" && idealDate==="Outdoor activity"){
      var celebMatch = "jb";
      var celebName = "John Boyega";
    }
    else if(lookingFor==="Men" && idealDate==="Coffee shop"){
      var celebMatch = "lod";
      var celebName = "Leonardo di Caprio";
    }
    else if(lookingFor==="Men" && idealDate==="Art venue"){
      var celebMatch = "tw";
      var celebName = "Tom Waits";
    }
    else if (lookingFor ==="Men" && idealDate==="Netflix and pizza"){
      var celebMatch = "aa";
      var celebName = "Aziz Ansari";
    }

    else if(lookingFor==="Both" && idealDate==="Party"){
      if(coinToss()==="m"){
        var celebMatch = "ab";
        var celebName = "Antonio Banderas";
      }
      else{
        var celebMatch = "ja";
        var celebName = "Jennifer Aniston";
      }
    }


    else if(lookingFor==="Both" && idealDate==="Fancy restaurant"){
      if(coinToss()==="m"){
        var celebMatch = "tr";
        var celebName = "Donald 'loser' Trump";
      }
      else{
        var celebMatch = "jr";
        var celebName = "Julia Roberts";
      }
    }
    else if(lookingFor==="Both" && idealDate==="Outdoor activity"){
      if(coinToss()==="m"){
        var celebMatch = "jb";
        var celebName = "John Boyega";
      }
      else{
        var celebMatch = "cd";
        var celebName = "Cameron Diaz";
      }
    }
    else if(lookingFor==="Both" && idealDate==="Coffee shop"){
      if(coinToss()==="m"){
        var celebMatch = "lod";
        var celebName = "Leonardo di Caprio";
      }
      else{
        var celebMatch = "aj";
        var celebName = "Angelina Jolie";
      }
    }
    else if(lookingFor==="Both" && idealDate==="Art venue"){
      if(coinToss()==="m"){
        var celebMatch = "tw";
        var celebName = "Tom Waits";
      }
      else{
        var celebMatch = "ah";
        var celebName = "Anne Hathaway";
      }
    }
    else if (lookingFor ==="Both" && idealDate==="Netflix and pizza"){
      if(coinToss()==="m"){
        var celebMatch = "aa";
        var celebName = "Aziz Ansari";
      }
      else{
        var celebMatch = "jw";
        var celebName = "Jessica Williams";
      }
    }





    $("#matchCol").append("<div class='row result'><div class='col-md-4'><h1>Your perfect match is "+celebName+"!</h1><p class='explanation'>Who this person is and why you're a good match: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div><div class=col-md-8><img src='img/"+celebMatch+".jpg' alt='Picture of " + celebName +"'></div></div>");
    event.preventDefault();
  });

});
