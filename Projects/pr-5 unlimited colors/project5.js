let ref;

// Function to generate a random color in hexadecimal format
const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listener for the "Start" button
document.querySelector('#start').addEventListener('click', () => {
    // Set interval to change the background color every second
    if(!ref){
        ref = setInterval(() => {
            document.querySelector('body').style.backgroundColor = randomColor();
        }, 1000);
    }
    console.log('changed')
});

// Event listener for the "Stop" button
document.querySelector('#stop').addEventListener('click', () => {
    // Clear the interval when the "Stop" button is clicked
    clearInterval(ref);
    ref = null;
    console.log('Cleared interval');
});
