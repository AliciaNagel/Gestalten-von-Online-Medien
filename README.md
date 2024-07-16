
# Sorting Bars

A generative artwork from    
Alicia Nagel                  
Matrikelnummer: 12369445        
09550 Gestalten von Online Medien

_____________

Description:

for my project, I have used the bubble-sort code we took a look at in class as a starting point. My idea was to simply visualize the sorting process of the array in real-time and create a dynamic generative artwork.

_____________________________

End Result:

Each element of the array is represented as a bar whose height corresponds to the value of the element. As the bubble sort algorithm swaps elements, the canvas is updated to reflect these changes. The bars are sorted on the right side of the canvas due to the nature of the bubble sort algorithm and how the array is being visualized, larger elements "bubble" to the top of the array, or to the right in this visualization, after each complete pass through the list. In the end those random bars create a rainbow-like image.

_____________________________

Alorithm:

Random Array Generation

•	randomArray(size): This function generates an array of random integers. The array's length is determined by the size parameter, and each integer is randomly generated between 0 and 1000 using the Math.random function. 

Bubble Sort

•	bubbleSort(listOfNumbers): This function implements the bubble sort algorithm to sort the array. Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. 

Drawing and Visualization

•	drawArray(array): This function visualizes the array on the canvas. Each element in the array is represented as a vertical bar. The height of the bar corresponds to the value of the array element, and the color is determined using the HSL (Hue, Saturation, Lightness) color model based on the value.

-Detailed Steps-

1.	Setup and Initialization:
o	An HTML canvas element is created and styled to be centered on the web page.
o	A JavaScript file (script.js) is linked to the HTML file to handle the dynamic aspects of the artwork.

2.	Generating a Random Array:
o	The randomArray function is called with a size parameter (e.g., 100) to create an array of 100 random integers between 0 and 1000.

3.	Drawing the Initial Array:
o	The drawArray function is called with the random array to visualize it on the canvas. This function iterates over the array and draws a bar for each element, setting the height and color based on the element's value.

4.	Sorting and Visualization:
o	The bubbleSort function sorts the array using the bubble sort algorithm.
o	After each swap, the drawArray function is called to update the canvas, providing a real-time visualization of the sorting process.
o	A small delay (await new Promise(resolve => setTimeout(resolve, 1));) is added to slow down the sorting process enough to make the changes visible to the viewer.

_____________________________

Technology:

HTML5 Canvas

•	HTML5 Canvas: This element is used to draw graphics on the web page. It provides a way to draw shapes, text, images, and other objects in a 2D context using JavaScript.
•	JavaScript: This scripting language is used to create the dynamic and interactive functionality required for the generative artwork.

JavaScript Functions and APIs

•	Canvas API: The Canvas API provides methods and properties to draw and manipulate graphics on the <canvas> element. We use getContext('2d') to get the 2D drawing context, and various methods like fillRect and clearRect to draw and clear the canvas.


