On document load:
Initialize variables: - currentIndex = 0

    Write JSON data containing carousel items

    Define functions:
        - updateBackgroundGradient():
            Update body background gradient based on current item's ambient colors

        - updateTextSide():
            Update text side content and background gradient based on current item's text and ambient colors

        - updateSlider():
            Update slider content with next slide (image).

        - showPrevSlide():
            Go to previous slide (image) in the carousel and update all components

        - showNextSlide():
            Go to next slide (image) in the carousel and update all components

    Add event listeners to previous and next buttons:
        - On click of previous button, call showPrevSlide()
        - On click of next button, call showNextSlide()

    Call updateBackgroundGradient(), updateTextSide(), and updateSlider() to initialize the UI

Function updateBackgroundGradient():
Get current item from carousel data using currentIndex
Create gradient string based on current item's ambient colors
Update body background style with the gradient


Function updateTextSide():
Retrieve current data from the carousel JSON using the currentIndex

    Get the 'text2' property from the current data
    Find the index of the substring "Choose Us" in the 'text2'

    Extract the parts of the text before "Choose Us" (firstPart),
    the "Choose Us" substring itself (chooseUsPart), and
    the parts of the text after "Choose Us" (lastPart)

    Construct a coloredText string by combining the parts with HTML span element for color styling

    Update the HTML content of the text side element (textSide) with the following structure:
        - H2 element displaying the 'text1' property from the current data
        - H2 element displaying the coloredText constructed earlier
        - Paragraph element displaying the 'desc' property from the current data
        - Paragraph element displaying the 'price' property from the current data with class "price"
        - Icons div containing images generated from the 'icons' array in the current data:
            - Iterate over each icon URL in the 'icons' array, and generate HTML for each image
            - Wrap each image in a div with class "icons-item"

Function updateSlider():
Clear the HTML content of the slider container by setting its innerHTML to an empty string

    Retrieve the current data from the carousel JSON using the currentIndex

    Create a new div element for the slide and add the "slide" class to it

    Set the innerHTML of the slide element to include an img tag with src attribute set to the 'image' property from the current data
    Use the 'text1' property from the current data as the alt attribute for the image

    Append the slide element to the slider container to display the updated image

Function showPrevSlide():
Decrement currentIndex to move to previous item in the carousel
Call  updateTextSide(), and updateSlider() to update UI

Function showNextSlide():
Increment currentIndex to move to next item in the carousel
Call  updateTextSide(), and updateSlider() to update UI

When the DOM content is fully loaded:
Find the image element with the class "watch-img"

    Add an event listener to the image element for the "load" event:
        When the image has finished loading:
            Set the animation property of the image element to "none"
