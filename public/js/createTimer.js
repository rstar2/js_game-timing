export function createTimer(callbacks, rate = 1 / 60) {
    let lastTime = 0,
        accumulator = 0,
        tick = 0, lastTick = 0,
        frameId;

    // thus we can set any desired rate
    // in order to get more realistic game simulation
    // Note - this does not mean that the rendering/drawing needs to be
    // with the same rate - THIS IS NOT NEEDED.
    // Waht is needed is to have a deterministic game simulation
    // (checks for collisions and etc.)
    function loop(time) {
        if (lastTime) {
            accumulator += accumulator + (time - lastTime) / 1000;
            while (accumulator > rate) {
                callbacks.update(rate, tick++);
                accumulator -= rate;
            }
        }
        lastTime = time;
        // render only if at least once 'update' is called
        if (lastTick !== tick) {
            callbacks.render();
        }
        lastTick = tick;
        frameId = requestAnimationFrame(loop);
    }

    function start() {
        lastTime = null;
        frameId = requestAnimationFrame(loop);
    }

    function stop() {
        cancelAnimationFrame(frameId);
    }

    return {
        start: start,
        stop: stop,
    };
}

export default createTimer;

// USAGE : any of the below
// import createTimerBAD from './createTimerBAD.js'
// import { createTimerBAD } from './createTimerBAD.js'