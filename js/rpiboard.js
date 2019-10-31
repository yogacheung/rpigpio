function loaddata(callback){
  $.ajax({ 
    url: "http://172.22.207.82/php/fetch.php",    
  })
  .done(callback);
}

///////////////////////////////////////////////////////////

function loadpinout() {   
  
  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });

  loaddata(function(data){
    //console.log(data);
    var pinlist = data;
    //console.log(pinlist[0]);
    
    var numpin = {2:3, 3:5, 4:7, 5:29, 6:31, 7:26, 8:24, 9:21, 10:19, 11:23, 12:32, 13:33, 14:8, 15:10, 16:36, 17:11, 18:12, 19:35, 20:38, 21:40, 22:15, 23:16, 24:18, 25:22, 26:37, 27:13}
    var pinstate = ["Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off"];
    
    var pinmsg = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
    
    for(var i=0; i<pinlist.length; i++){
      if(pinlist[i].value == 0) {
        var pin = numpin[(pinlist[i].num)]
        pinstate[pin-1] = "On";
      }  
      pinmsg[pinlist[pin-1]] = " >>> Mode: " + pinlist[i].mode + " <<< ";
    }

    var pinname = ["3v3", "5V", "GPIO2", "5V", "GPIO3", "GND", "GPIO4", "GPIO14", "GND", "GPIO15", "GPIO17", "GPIO18", "GPIO27", "GND", "GPIO22", "GPIO23", "3.3V", "GPIO24", "GPIO10", "GND", "GPIO9", "GPIO25", "GPIO11", "GPIO8", "GND", "GPIO7", "DNC", "DNC", "GPIO5", "GND", "GPIO6", "GPIO12", "GPIO13", "GND", "GPIO19", "GPIO16", "GPIO26", "GPIO20", "GND", "GPIO21"];
    var pincolour = ["red", "red", "olive", "red", "olive", "black", "yellow", "blue", "black", "blue", "yellow", "yellow", "yellow", "black", "yellow", "yellow", "red", "yellow", "orange", "black", "orange", "yellow", "orange", "orange", "black", "orange", "grey", "grey", "yellow", "black", "yellow", "yellow", "yellow", "black", "yellow", "yellow", "yellow", "yellow", "black", "yellow"];
    
    var pinout = document.getElementById("pintable");
    var content = "<table>";
    
    for(var i = 0; i < 40; i+=2){
      content += `<tr>
                    <td>                    
                      <div style="width:90%;" class="ui `+ pincolour[i] +` button" data-tooltip="`+ pinmsg[i] +`" data-position="left center">`;
      if(pinstate[i] == "On")                      
        content +=    `<div style="left:-5%; top:8%;" class="floating ui brown label">`+ pinstate[i] +`</div>`;

      content +=       pinname[i] + `
                      </div>
                    </td>
                    <td>
                      <a class="ui black circular label">`;
      if((i+1) < 10) content += "0" + (i+1);
      else content += (i+1);
      content +=  `   </a>
                    </td>
                    <td>
                      <a class="ui black circular label">`;
      
      if((i+2) < 10) content += "0" + (i+2);
      else content += (i+2);              
      
      content += `    </a>
                    </td>
                    <td>
                      <div style="width:90%;" class="ui `+ pincolour[i+1] +` button" data-tooltip="`+ pinmsg[i+1] +`" data-position="right center">` + pinname[i+1];                        

      if(pinstate[i+1] == "On")                      
        content +=    `<div style="left:105%;top:8%;" class="floating ui brown label">`+ pinstate[i+1] +`</div>`;
      
      content +=      `</div>
                      </td>
                  </tr>`;
    }
    content += "</table>";
    
    pinout.innerHTML = content;
  });  
}

function refresh(){
  location.reload();
}

function logout()
{
  var c = confirm("Confirm?");
  if(c == true) {
    window.location.href="index.html";
  }
}