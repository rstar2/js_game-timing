export function createTimerBAD(callbacks) {
    let lastTime;

    function loop(time) {
        if (lastTime) {
            callbacks.update((time - lastTime) / 1000);
        }
        lastTime = time;

        callbacks.render();

        requestAnimationFrame(loop);
    }
    return {
        start: () => requestAnimationFrame(loop)
    };
}
export default createTimerBAD;

// USAGE : any of the below
// import createTimerBAD from './createTimerBAD.js'
// import { createTimerBAD } from './createTimerBAD.js'