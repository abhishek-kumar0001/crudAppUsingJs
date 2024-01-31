let data = [
    {
        srNo: 1,
        jobProfile
    },
    {

    }
]
let addIcons = document.querySelectorAll(".add");
Array.from(addIcons).forEach((addIcon) => {
    addIcon.addEventListener("click", (e)=>{
    document.querySelector('form').style = "display:block;";
})
}); 