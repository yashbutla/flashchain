// const sidebarOpen = document.querySelector(".sidebarOpen"),
// siderbarClose = document.querySelector(".siderbarClose");

// sidebarOpen.addEventListener("click",() =>{
//     nav.classList.add("active");
    
// })
// body.addEventListener("click", e =>{
//    let clickedElm = e.target;

//    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
//      nav.classList.remove("active");
//    }
// })

let menu = document.getElementById("menu");
menu.addEventListener("click",function(){
    console.log("Sidebar");
    let sidebar = document.getElementById("sidebar");
    sidebar.style.transform = "translateX(0px)";
})
let cross = document.getElementById("cross");
cross.addEventListener("click",function(){
    let sidebar = document.getElementById("sidebar");
    sidebar.style.transform = "translateX(400px)";
})