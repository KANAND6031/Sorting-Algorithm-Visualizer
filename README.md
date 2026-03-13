# Sorting Algorithm Visualizer 
## Overview

The Sorting Algorithm Visualizer is an interactive web application that demonstrates how different sorting algorithms work through step-by-step visualization.
It helps users understand the internal working of sorting techniques by displaying animated operations such as element comparisons and swaps.

Users can input their own arrays or generate random arrays, choose a sorting algorithm, and observe how the algorithm sorts the data in real time.

This project is designed as an educational tool for learning Data Structures and Algorithms (DSA) concepts in a visual and interactive way.

## Features

* Interactive visualization of multiple sorting algorithms

* Supports the following algorithms:
  * Bubble Sort
  * Selection Sort
  * Insertion Sort
  * Merge Sort
  * Quick Sort

* Custom array input option
* Random array generation
* Start, Pause, and Resume controls for visualization
* Element highlighting to show comparisons during sorting
* Displays Time Complexity and Space Complexity after the sorting completes
* Separate pages for input configuration and visualization
* Smooth animated array representation using boxes

## Algorithms Implemented
| Algorithm      | Best Case  | Average Case | Worst Case | Space Complexity |
| -------------- | ---------- | ------------ | ---------- | ---------------- |
| Bubble Sort    | O(n)       | O(n²)        | O(n²)      | O(1)             |
| Selection Sort | O(n²)      | O(n²)        | O(n²)      | O(1)             |
| Insertion Sort | O(n)       | O(n²)        | O(n²)      | O(1)             |
| Merge Sort     | O(n log n) | O(n log n)   | O(n log n) | O(n)             |
| Quick Sort     | O(n log n) | O(n log n)   | O(n²)      | O(log n)         |

## Project Structure 
Sorting-Visualizer
│
├── index.html                # Main page (array input + algorithm selection)
├── style.css                 # Styling for main page
├── script.js                 # Logic for main page
│
├── visualizer.html           # Visualization page
├── visualizer.css            # Styling for visualization
├── visualizer.js             # Controller for visualization
│
├── algorithms                # Folder containing sorting algorithms
│   ├── bubbleSort.js
│   ├── selectionSort.js
│   ├── insertionSort.js
│   ├── mergeSort.js
│   └── quickSort.js
│
└─

## How It Works
1. The user selects or inputs an array on the main page.
2. A sorting algorithm is selected from the dropdown menu.
3. The application redirects to the visualization page.
4. The sorting algorithm executes step-by-step with animation.
5. Once sorting completes, the algorithm complexities are displayed.

## Educational Purpose
This project helps students and developers:
 * Understand how sorting algorithms work internally
 * Visualize comparisons and swaps
 * Compare algorithm efficiency
 * Learn DSA concepts interactively

## Future Improvements
* Add more sorting algorithms (Heap Sort, Radix Sort, Counting Sort)
* Display number of comparisons and swaps
* Show real-time execution time
* Add side-by-side algorithm comparison
* Improve UI/UX animations

## Author
Krishna Anand
