const count = document.querySelectorAll(".counter");
count.forEach(timer => {
    timer.textContent = "0";
    //We create a function where we can add all the functionalities that start the countdown//
    const update = () => {
        //we add the "+" sign in front of timer.text-content to make it an integer
        const original = +timer.textContent;
        const target = timer.getAttribute("data-target");
        const increment = target / 1000; // If you want to slow down your countdown, use numbers above 1000;
        //Below is an if function using a shorthand//
        original < target ? timer.textContent = Math.ceil(original + increment) : timer.textContent = target; // We use Math.ceil() to get a whole number//
        setTimeout(update,1);
    }
    //invoking the function//
    update()
})