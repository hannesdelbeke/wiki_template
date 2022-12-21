
const header_names = ["h2","h3","h4","h5","h6"]

var j;
for (j = 0; j < header_names.length; j++) {
  let coll = document.getElementsByTagName(header_names[j]);

  let i;
  // for every header
  for (i = 0; i < coll.length; i++) {

    // on click we run function:
    coll[i].addEventListener("click", function() {

      // toggle active state WORKS
      let active = this.classList.toggle("active");


      // this might break if other plugins change HTML,
      // currently assumes next element is the collapsible div
      let div = this.nextElementSibling;
      toggleActive(div, active);
    });
  }
}

function toggleActive(element, active) {
    if (active) {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
}