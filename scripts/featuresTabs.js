function openTab(evt, tabName) {
    // Declare all variables
   
  
    // Get all elements with class="tabcontent" and hide them
    let tabcontents = [...document.querySelectorAll(".tabcontent")]
    for(tabcontent of tabcontents) {
        tabcontent.style.display = "none"
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    let tablinks = document.querySelectorAll(".tablinks");
    for(tablink of tablinks) {
        tablink.classList.remove("active")
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.querySelector(`#${tabName}`).style.display = "flex";
    evt.currentTarget.classList.add("active");
  }