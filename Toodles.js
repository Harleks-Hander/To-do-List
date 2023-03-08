


const InputEl = document.querySelector(".fill")
const Add = document.querySelector(".add")
const Schedule = document.querySelector(".schedule")
const Numberr = document.querySelector(".number")
const Text = document.querySelector(".textt")
const ClearBtn = document.querySelector(".clear")

const Check = document.querySelector(".ckeck")

let Inside = InputEl.value
let internal = [`<ul class="listt"><li class="listtt">${Inside}</li> <div class="deletee">delete</div></ul>`]

const Interior = JSON.parse(localStorage.getItem("within"))
console.log(Interior);
Schedule.innerHTML = Interior 


Add.addEventListener("click", function(){
    let Inside = InputEl.value
   
    // Schedule.innerHTML += `<li>${InputEl.value} <label for="check"><input class="check" name="check" type="checkbox"></label></li>`
    let internal = [`<ul class="listt"><li class="listtt">${Inside}</li> <div class="deletee">delete</div></ul>`]
    // let fruits = ["apple", "orange", "banana", "watermelon", "cherry"]

    
    Schedule.innerHTML += internal
    // localStorage.setItem("within", internal)
    localStorage.setItem("within", JSON.stringify(Schedule.innerHTML))
    
    const Listt = document.querySelectorAll(".listt")
    const Delete = document.querySelectorAll(".deletee")
    InputEl.value = ""
    // Listt.currentTarget = Schedule.innerHTML
    console.log(Listt);
    // console.log(Inside)
    //  if (Inside = ""){
    //     Schedule.innerHTML = `INPUT TASK`
    // }
    
    // const insideData = localStorage.getItem("within")
    // // listClick.style.display = "block"
    // console.log(insideData);
    


    
    Delete.forEach(function(btn){
        btn.addEventListener("click", function(e){
            let deleteClick = e.currentTarget
            console.log(deleteClick);
            
            
            Listt.forEach(function(btnn){
                btnn.addEventListener("click", function(c){
                    let listClick = c.currentTarget
                    console.log(listClick)
                    listClick.style.display = "none"
                    
               
            })
        
        })
        
    })
})






})





ClearBtn.addEventListener("click", function(){
    Schedule.innerHTML = ""
    localStorage.setItem("within", JSON.stringify(internal))
    console.log(localStorage.removeItem("within"));
})






