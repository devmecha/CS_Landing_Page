const countdown = document.querySelector('.countdown');

// set launch date

const launchDate = new Date('aug 15, 2018 12:00:00').getTime();

// console.log(launchDate);

//Update every second
const intvl = setInterval( ()=> {
    // console.log('hello');
    //Get today date and time
    const now = new Date().getTime();

    // Distance from now to the launch date
    const distance = launchDate - now;

    // console.log(distance);
    //Time calculations
    const days     = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours    = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) )
    const mins     = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ) )
    const seconds  = Math.floor((distance % (1000 * 60 )) / 1000 )

    // Display result
    countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;

    if(distance < 0){
        clearInterval(intvl);
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Project launched !';
        

    }


}, 1000)