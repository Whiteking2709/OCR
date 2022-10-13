





  






    
    
    
     
      //function check(){
          //img = document.getElementById("captured_image");
          //classifier.classify(img,)
      //}

     
      




      
//var path;

function showfile() {

  //const preview = document.querySelector('img');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    //preview.src = reader.result;
    Tesseract.recognize(reader.result).then(function(result) {
      console.log(result);
      document.getElementById("display_recognition").innerHTML = result.text;
     
     });


  }, false);

  //if (file) {
   // path = reader.readAsDataURL(file);
  //}



  //let file = input.files[0];

  //alert(path); // e.g my.png
  //alert(`Last modified: ${file.lastModified}`); // e.g 1552830408824
}

function bruh() {
  //document.getElementById('buttonid').addEventListener('click', openDialog);
  //const dialog = require('electron').dialog;
//console.log(dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory', 'multiSelections' ]}));
$(":file").change(function(event){

  let file = input.files[0];

   path = file.path;
   //alert(path);
   //document.getElementById("fileid").innerHTML = $(":file").val();

});
}


function previewFile() {
  const preview = document.querySelector('img');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    preview.src = reader.result;

    Tesseract.recognize(preview.src).then(function(result) {
      console.log(result);
      //alert(result.text)
      document.getElementById("display_recognition").value = result.text;
     
     });

  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

function recognize_r(){
  
  //alert(path);
  Tesseract.recognize(path).then(function(result) {
    console.log(result);
    document.getElementById("display_recognition").value = result.text;
   
   });
   
   // alert(result.text);
   //function check(){
    //var identify=document.getElementById("display_recognition").value;
    
  //}
  
    
  }
  //document.getElementById("rtext").innerHTML = txt;

//var nooby = document.getElementById("fileid").value;
    

