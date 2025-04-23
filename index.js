const viewBtn = document.getElementById("view-btn");
const hiddenBlogs = document.querySelectorAll(".view-more")


viewBtn.addEventListener("click", ()=>{
    hiddenBlogs.array.forEach(blog => blog.classList.remove("view-more"));
})