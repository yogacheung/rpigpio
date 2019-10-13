function loaddata(callback){
  $.ajax({
    url: "/api/v1/pin",    
  })
  .done(callback);
}

///////////////////////////////////////////////////////////

function loadpinout() {  

  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });

  loaddata(function(data){
   
    var pinlist = data;
    //var pinlist = [{"event": "BOTH", "num": 5, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 6, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 7, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 8, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 9, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 10, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 11, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 12, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 13, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 14, "name": "L1", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 15, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 16, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 17, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 18, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 19, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 20, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 21, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 0, "mode": "IN"}, {"event": "BOTH", "num": 22, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 23, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 0, "mode": "IN"}, {"event": "BOTH", "num": 24, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 25, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 26, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}, {"event": "BOTH", "num": 27, "name": "", "initial": null, "bounce": 200, "resistor": "PUD_UP", "value": 1, "mode": "IN"}];

    var pinstate = ["Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off","Off"];
    //var pinstatecolour = ["brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown"];
    var pinmsg = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
    
    for(var i=0; i<pinlist.length; i++){
      if(pinlist[i].value == 1) {
        pinstate[(pinlist[i].num)-1] = "On";
        //pinstatecolour[(pinlist[i].num)-1] = "purple";
      }  
      pinmsg[(pinlist[i].num)-1] = " >>> Mode: " + pinlist[i].mode + " <<< ";
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