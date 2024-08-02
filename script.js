const input = document.getElementById('input')
const task_list = document.getElementById('task_list')
function add(){
    if(input.value === ""){
        alert('Please write something')
    }
    else {

        let newli = document.createElement("li")
        newli.innerHTML = `${input.value}<i class="fa fa-trash"></i>`
        task_list.appendChild(newli)
        input.value = "";

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.setAttribute("id","iam")
        newli.appendChild(checkbox)

        newli.querySelector('i').addEventListener('click',remove);

        function remove() {
            newli.remove()    
        }
    }
}
