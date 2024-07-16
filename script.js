// canvas setup

const canvas = document.getElementById('artCanvas');
const ctx = canvas.getContext('2d');

// canvas dimensions

const width = canvas.width;
const height = canvas.height;

// random array generation

function randomArray(size) {
  let list = [], //empty list and variables for min and max values
    min,
    max;

  for (let index = 0; index < size; index++) { // loops through array and sets min value (0) and mac value (1000)
    min = Math.ceil(0);
    max = Math.floor(1000);
    list.push(Math.floor(Math.random() * (max - min + 1)) + min); // pushes a random integer between 0 and 1000 into the list
  }

  return list; // returns generated list
}

// swapping elements

function changePosition(listOfNumbers, p1, p2) {
  let temp = listOfNumbers[p1]; // temporarily stores the value at position p1
  listOfNumbers[p1] = listOfNumbers[p2]; // assigns the value at p2 to p1
  listOfNumbers[p2] = temp; // assignes the stored value to p2
}

// drawing the array

function drawArray(array) {
  ctx.clearRect(0, 0, width, height); // clears the entire canvas
  const barWidth = width / array.length; // calculates the width of each bar based on canvas and array length 
  for (let i = 0; i < array.length; i++) {
    const barHeight = (array[i] / 1000) * height; // calculates the height of each bar based on array value
    ctx.fillStyle = `hsl(${(array[i] / 1000) * 360}, 100%, 50%)`; // sets color of the bar based on array value
    ctx.fillRect(i * barWidth, height - barHeight, barWidth, barHeight); // draws the bar at the calculated position with the calculated dimensions
  }
}

// bubble sort

async function bubbleSort(listOfNumbers) {
  let hasChanged, index;

  do {
    hasChanged = false;
    index = 0;

    do {
      if (listOfNumbers[index] > listOfNumbers[index + 1]) {
        changePosition(listOfNumbers, index, index + 1);
        hasChanged = true;
        drawArray(listOfNumbers);
        await new Promise(resolve => setTimeout(resolve, 1)); // Delay for visualization
      }
      index++;
    } while (index < listOfNumbers.length - 1);
  } while (hasChanged);

  return listOfNumbers;
}

// call functions: generate and sort a random array

const array = randomArray(100);
drawArray(array);
bubbleSort(array);
