const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){

    toggleBtn.innerHTML = "☀ Light Mode";

  }else{

    toggleBtn.innerHTML = "🌙 Dark Mode";

  }

});
const timelineItems = document.querySelectorAll(".timeline-item");

function checkTimeline() {

  timelineItems.forEach(item => {

    const rect = item.getBoundingClientRect();

    if (
      rect.top < window.innerHeight * 0.5 &&
      rect.bottom > window.innerHeight * 0.3
    ) {

      item.classList.add("active");

    } else {

      item.classList.remove("active");

    }

  });

}

window.addEventListener("scroll", checkTimeline);

checkTimeline();