let [sec, min, hr] = [0, 0, 0];
let timerId = null;
let displayTime = document.getElementById("displayTime");
const watch = () => {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
    if (min == 60) {
      min = 0;
      hr++;
    }
  }
  let hh, mm, ss;
  if (hr < 10) hh = "0" + hr;
  else hh = hr;
  if (min < 10) mm = "0" + min;
  else mm = min;
  if (sec < 10) ss = "0" + sec;
  else ss = sec;
  displayTime.innerHTML = ` ${hh}:${mm}:${ss}`;
};

let flag1 = false,
  flag2 = false,
  flag3 = false;
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
const startWatch = () => {
  //if timer is already running and we start again it should clear the interval and start again
  if (timerId != null) {
    clearInterval(timerId);
  }
  timerId = setInterval(watch, 1000);
  // startBtn.src = "stop.png";
  startBtn.classList.add("clicked");
  flag2 = true;

  startBtn.classList.remove("hover");
  stopBtn.classList.add("hover");
  resetBtn.classList.add("hover");
  if (flag1 == true) stopBtn.classList.remove("clicked");
  if (flag3 == true) resetBtn.classList.remove("clicked");
};

const stopWatch = () => {
  clearInterval(timerId);
  stopBtn.classList.add("clicked");
  flag1 = true;

  stopBtn.classList.remove("hover");
  startBtn.classList.add("hover");
  resetBtn.classList.add("hover");
  if (flag2 == true) startBtn.classList.remove("clicked");
  if (flag3 == true) resetBtn.classList.remove("clicked");
};

const resetWatch = () => {
  clearInterval(timerId);
  [sec, min, hr] = [0, 0, 0];
  displayTime.innerHTML = `00:00:00`;

  resetBtn.classList.add("clicked");
  flag3 = true;
  resetBtn.classList.remove("hover");
  startBtn.classList.add("hover");
  stopBtn.classList.add("hover");
  if (flag1 == true) stopBtn.classList.remove("clicked");
  if (flag2 == true) startBtn.classList.remove("clicked");
};
