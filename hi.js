const messages = document.querySelector('.messages');

function addMe() {
    // Create a new 'div' element with the class '.me'
    const me = document.createElement("div");
    me.classList.add("me"); // Adding "message" class as well to apply common styling

    // Create a new 'p' element for the message text
    const p = document.createElement("p");
    p.textContent = "click to edit";
    p.contentEditable = true
    p.spellcheck = false

    // Append the 'p' element to the 'div'
    me.appendChild(p);

    // Append the new 'div' to the '.messages' container
    messages.appendChild(me);
}

function addfriend(){
    const you = document.createElement("div");
    you.classList.add("you");

    const p = document.createElement("p")
    p.textContent = "click to edit"
    p.contentEditable = true
    p.spellcheck = false

    you.appendChild(p)
    messages.appendChild(you)
}

const input = document.getElementById('imageInput');
input.addEventListener('change', displayImage);

function displayImage() {
    const preview = document.getElementById('preview');

    const file = input.files[0];
    if (file) {
    // Create a FileReader to read the selected image as a data URL
    const reader = new FileReader();

    reader.onload = function (e) {
        // Set the data URL as the source of the image
        preview.src = e.target.result;
    };

    // Read the image file as a data URL
    reader.readAsDataURL(file);
    } else {
    // No file selected, remove the preview
    preview.src = '';
    alert('Please select an image to display.');
    }
}


function downloadImage() {
    // Get the div element
    var element = document.querySelector('.android');

    // Use html2canvas to capture the content of the div
    html2canvas(element).then(function(canvas) {
        // Convert the canvas to a data URL
        var dataURL = canvas.toDataURL('image/png');

        // Create a link element
        var link = document.createElement('a');

        // Set the href attribute to the data URL
        link.href = dataURL;

        // Set the download attribute with a filename
        link.download = 'android_image.png';

        // Append the link to the body
        document.body.appendChild(link);

        // Trigger a click on the link to start the download
        link.click();

        // Remove the link from the body
        document.body.removeChild(link);
    });
}