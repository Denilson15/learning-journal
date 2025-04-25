const viewBtn = document.getElementById("view-btn");
const hiddenBlogs = document.querySelectorAll(".view-more");
let flag = false;


viewBtn.addEventListener("click", ()=>{
    if(!flag){
        hiddenBlogs.forEach(blog => blog.classList.remove("view-more"));
        viewBtn.textContent = "Show Less";
        flag = true;
    }
    else{
        hiddenBlogs.forEach((blog) => blog.classList.add("view-more"));
        viewBtn.textContent = "View More";
        flag = false;
    }
})