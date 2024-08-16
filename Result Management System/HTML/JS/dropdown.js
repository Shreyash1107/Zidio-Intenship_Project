//  // Function to load CSV and populate dropdown
//  function loadStates() {
//     fetch('State.csv') // Assuming you have saved the CSV file as 'states.csv'
//         .then(response => response.text())
//         .then(data => {
//             const states = data.split(','); // Assuming the CSV is comma-separated

//             const dropdown = document.getElementById('inputState');
//             // Clear any existing options
//             dropdown.innerHTML = '';

//             // Create a default option
//             let defaultOption = document.createElement('option');
//             defaultOption.text = 'Choose...';
//             dropdown.add(defaultOption);

//             // Add each state to the dropdown
//             states.forEach(state => {
//                 let option = document.createElement('option');
//                 option.text = state.trim(); // Remove any extra spaces
//                 dropdown.add(option);
//             });
//         })
//         .catch(error => console.error('Error fetching states:', error));
// }

// // Call the function to load states when the window loads
// window.onload = loadStates;