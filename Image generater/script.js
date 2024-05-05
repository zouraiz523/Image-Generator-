//Developer Zouraiz//
// Function to generate images based on the user's input text
function generateImages() {
    // Get the user's input text from the HTML element with ID 'textInput'
    const text = document.getElementById('textInput').value;
    
    // Get the container element where images will be displayed
    const imageContainer = document.getElementById('imageContainer');
    
    // Clear any previous images from the image container
    imageContainer.innerHTML = '';
    
    // Loop to generate and display three images
    for (let i = 1; i <= 3; i++) {
        // Construct the URL to fetch images from Unsplash based on user's input text and loop index
        const placeholderImageUrl = `https://source.unsplash.com/featured/?${text}&${i}`;
        
        // Create a div element to hold the image and download link
        const imageElement = document.createElement('div');
        imageElement.setAttribute('class', 'image-container');
        
        // Create an anchor element for the download link
        const downloadLink = document.createElement('a');
        downloadLink.setAttribute('class', 'download-link');
        downloadLink.setAttribute('download', `image${i}.jpg`);
        downloadLink.innerText = 'Download';
        
        // Fetch the image from Unsplash using the constructed URL
        fetch(placeholderImageUrl)
            .then(response => response.blob()) // Convert the response to a blob
            .then(blob => {
                // Create a URL from the blob and set it as the href attribute of the download link
                const url = window.URL.createObjectURL(blob);
                downloadLink.setAttribute('href', url);
            });
        
        // Create an image element and set its source to the Unsplash URL
        const img = new Image();
        img.src = placeholderImageUrl;
        img.className = 'img-fluid'; // Apply CSS class for styling
        
        // Append the image and download link to the image container
        imageElement.appendChild(img);
        imageElement.appendChild(downloadLink);
        
        // Append the image container to the main container element
        imageContainer.appendChild(imageElement);
    }
}

// Event listener to fade out the loader container when the page loads
$(window).on("load", function() {
    // Fade out the loader container over a duration of 5 seconds (5000 ms)
    $(".loader-container").fadeOut(5000);
});
