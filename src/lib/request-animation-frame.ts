interface Listener {
  callback: () => void;
  delay: number;
  countdown: number;
}
const listeners: Listener[] = [];
const emptyIndexSet: Set<number> = new Set();

let running = false;

let timestamp_old = 0;
function kickoff(timestamp_new: number) {
  timestamp_old = timestamp_new;
  window.requestAnimationFrame(step);
}
function step(timestamp_new: number) {
  if (window && running) {
    const timediff = timestamp_new - timestamp_old;
    for (const listener of listeners) {
      listener.countdown -= timediff;
      while (listener.countdown < 0) {
        listener.countdown += listener.delay;
        listener.callback();
      }
    }
    timestamp_old = timestamp_new;
    window.requestAnimationFrame(step);
  }
}

export function addListener(args: { delay: number; callback: () => void }) {
  function getNextEmptyIndex() {
    if (emptyIndexSet.size > 0) {
      const value = emptyIndexSet.values().next().value;
      emptyIndexSet.delete(value);
      return value;
    }
    return listeners.length;
  }
  const index = getNextEmptyIndex();
  listeners[index] = { callback: args.callback, delay: args.delay, countdown: args.delay };
  return function () {
    delete listeners[index];
    emptyIndexSet.add(index);
  };
}
export function pause() {
  if (window) {
    running = !running;
    if (running) window.requestAnimationFrame(kickoff);
  }
}
export function start(window: Window) {
  if (window) {
    running = true;
    window.requestAnimationFrame(kickoff);
  }
}
