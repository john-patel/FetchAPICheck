
let button = document.getElementById("btn");
let data = document.getElementById("input_data");
let msg = document.getElementById('message');
let getBtn = document.getElementById('get');
let DisplayData = document.getElementById('DisplayData');

getBtn.addEventListener('click', function() {
    DisplayData.style.visibility = 'visible'
    console.log("I am working");
    fetchData();
})

button.addEventListener("click", function() {
    sendData(data);
});

// Function to handle GET request
function fetchData() {
fetch('http://127.0.0.1:8000/',{    
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    }) // Replace with your actual API URL
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    })
    .then(data => {
    // Handle the received data here
    // console.log(data);  
    const ul = document.createElement('ul'); // Create an unordered list

    data.data.forEach(item => {
        const li = document.createElement('li'); // Create a list item
        li.textContent = item.userName; // Set the text content of the list item
        ul.appendChild(li); // Append the list item to the unordered list
    });

    DisplayData.appendChild(ul); // Append the unordered list to DisplayData
    })
    .catch(error => {
    // Handle any errors here
    console.error('Error:', error);
    });
}

// Call the function to fetch data

let newVar;
// Function to handle POST request
function sendData(data) {
    const dataToSend = {
        Name: `${data.value}`,
    };

    fetch('http://127.0.0.1:8000/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
    })
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    })
    .then(data => {
    // Handle the response from the server
    console.log(data.Data);
    newVar = data.Data;
    msg.innerHTML = newVar;
    })
    .catch(error => {
    // Handle any errors here
    console.error('Error:', error);
    });
}



