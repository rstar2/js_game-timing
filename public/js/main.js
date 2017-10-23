import createTimerBAD from './createTimerBAD.js'

import createTimer from './createTimer.js'
import Timer from './Timer.js'


// I. usage of BAD timer (with undetermined rate)
const timerBAD = createTimerBAD({
    update: (deltaTime) => { console.log("BAD Update called ", deltaTime) },
    render: () => { console.log("BAD Render called") }
});
timerBAD.start();

// The update/draw callbacks will not be called in fixed rate, e.g
// sometimes the deltaTime can be 0.016, others 0.034,...
// This is also dependent on the machine and browser.
// This means that this is BAD for gaming timing mechanism

// II. usage of GOOD timer (with fixed rate)
let timer = createTimer({
    update: (deltaTime) => { console.log("Update called ", deltaTime) },
    render: () => { console.log("Render called") }
}, 1 / 60);
timer.start();
timer.stop();

// using the class implementation
const timer2 = new Timer({
    update: (deltaTime) => { console.log("Update called ", deltaTime) },
    render: () => { console.log("Render called") }
}, 1 / 60);
timer2.start();
timer2.stop();
