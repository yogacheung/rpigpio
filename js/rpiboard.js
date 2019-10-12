function login(name, password, callback){
  $.ajax({    
    url: "php/login.php?username="+name+"&password="+password,    
  })
  .done(callback);
}

///////////////////////////////////////////////////////////

function loadpinout() {
  var pinname = ["3v3", "5V", "GPIO2", "5V", "GPIO3", "GND", "GPIO4", "GPIO14", "GND", "GPIO15", "GPIO17", "GPIO18", "GPIO27", "GND", "GPIO22", "GPIO23", "3.3V", "GPIO24", "GPIO10", "GND", "GPIO9", "GPIO25", "GPIO11", "GPIO8", "GND", "GPIO7", "DNC", "DNC", "GPIO5", "GND", "GPIO6", "GPIO12", "GPIO13", "GND", "GPIO19", "GPIO16", "GPIO26", "GPIO20", "GND", "GPIO21"];
  var pincolour = ["red", "red", "olive", "red", "olive", "black", "yellow", "blue", "black", "blue", "yellow", "yellow", "yellow", "black", "yellow", "yellow", "red", "yellow", "orange", "black", "orange", "yellow", "orange", "orange", "black", "orange", "grey", "grey", "yellow", "black", "yellow", "yellow", "yellow", "black", "yellow", "yellow", "yellow", "yellow", "black", "yellow"];
  var pinout = document.getElementById("pintable");
  var content = "<table>";
  
  for(var i = 0; i < 40; i+=2){
    content += `<tr>
                  <td>                    
                    <div style="width:90%;" class="ui `+ pincolour[i] +` button" data-tooltip="Add users to your feed" data-position="left center">
                      <div style="left:-5%; top:8%;" class="floating ui brown label">On</div>` + pinname[i] + '';

    content +=  `   </div>
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
                    <div style="width:90%;" class="ui `+ pincolour[i+1] +` button" data-tooltip="Add users to your feed" data-position="right center">`;
                      
    content += pinname[i+1] + `
                      <div style="left:105%;top:8%;" class="floating ui brown label">On</div></div>    
                  </td>
                </tr>`;
  }
  content += "</table>";
  
  pinout.innerHTML = content;
}