const input = document.querySelector("input");
const list = document.querySelectorAll("li");

const searchEngineMoto = item => {
    const text = item.target.value.toLowerCase();
    list.forEach(el => {
        const task = el.textContent;
        if(task.toLowerCase().indexOf(text) !== -1) {
            el.style.display = "block";
        } else {
            el.style.display = "none"
        }
    })
}

input.addEventListener("keyup", searchEngineMoto)