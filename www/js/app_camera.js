function setOptions(srcType) {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: false,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    return options;
}

function openCamera(selection) {

    var srcType = Camera.PictureSourceType.CAMERA;
    var options = setOptions(srcType);
   // var func = createNewFileEntry;

    navigator.camera.getPicture(function cameraSuccess(imageUri) {

        displayImage(imageUri);
        // You may choose to copy the picture, save it somewhere, or upload.
        console.log(imageUri);
       // func(imageUri);

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

    }, options);
}

function displayImage(imgUri) {

    // var elem = document.getElementById('imageFile');
    // elem.src = imgUri;
    $('#photo_in').css('background-image','url('+imgUri+')');
    $('#cam_icon').hide();
}

function reset(){
    $('#photo_in').css('background-image','');
    $('#cam_icon').show();
    $('#text_note').val('');
}


document.getElementById('cam_icon').addEventListener("click", openCamera);
document.getElementById('refresh').addEventListener("click", reset);