const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 120;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});

$(function(){
toastr.success("Move your mouse plz :D !!", "HI !!"); /*for caution message*/

})

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const day = now.toLocaleString('en-us', { weekday: 'long' });
  const date = now.toLocaleDateString('en-US', { year: 'numeric' , month: 'long', day: 'numeric' });
 
  const timeString = `${hours}:${minutes}:${seconds}`;
  const clockElement = document.getElementById('clock');
  clockElement.innerHTML = `
    <div>${day}</div>
    <div>${date}</div>
    <div>${timeString}</div>
  `;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);