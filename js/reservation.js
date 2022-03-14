        let menu = document.querySelector('#menu-btn');
            let navbar = document.querySelector('.navbar');

            menu.onclick = () => {
                menu.classList.toggle('fa-times');
                navbar.classList.toggle('active')
            }

            document.querySelector('#search').onclick = () => {
                document.querySelector('.search-container').classList.toggle('active');
            }

            document.querySelector('#close-search').onclick = () => {
                document.querySelector('.search-container').classList.remove('active');
            }

            window.onscroll = () => {
                if (window.scrollY > 0) {
                    document.querySelector('.header').classList.add('active');
                } else {
                    document.querySelector('.header').classList.remove('active');
                }


                menu.classList.remove('fa-times');
                navbar.classList.remove('active')
            }

            window.onload = () => {
                if (window.scrollY > 0) {
                    document.querySelector('.header').classList.add('active');
                } else {
                    document.querySelector('.header').classList.remove('active');
                }
            }

            
            // scroll top
            let span = document.querySelector(".top");

            window.onscroll = function () {
                console.log(window.scrollY);
                if (window.scrollY >= 100) {
                    span.style.display = "block";
                } else {
                    span.style.display = "none";
                }
                //  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
            };

            span.onclick = function () {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            };

        let thumbnails = document.getElementsByClassName('thumbnail')

        let activeImages = document.getElementsByClassName('active')

        for (var i = 0; i < thumbnails.length; i++) {

            thumbnails[i].addEventListener('mouseover', function () {
                console.log(activeImages)

                if (activeImages.length > 0) {
                    activeImages[0].classList.remove('active')
                }


                this.classList.add('active')
                document.getElementById('featured').src = this.src
            })
        }


        let buttonRight = document.getElementById('slideRight');
        let buttonLeft = document.getElementById('slideLeft');

        buttonLeft.addEventListener('click', function () {
            document.getElementById('slider').scrollLeft -= 180
        })

        buttonRight.addEventListener('click', function () {
            document.getElementById('slider').scrollLeft += 180
        })


        
//comments

let input = document.querySelector(".input");
let mytask = document.querySelector(".tasks");

// < function 1 =>  add items (localstorage.tasks) to div(.tasks):
function addItemsToDiv() {
    if(localStorage.tasks) {
        JSON.parse(localStorage.tasks).forEach((ele)=>{
        let myP = document.createElement("p");
        myP.append(ele.titel);
        let myButton = document.createElement("button");
        myButton.classList = "btn";
        myButton.append("delete");
        let div = document.createElement("div");
        div.id=ele.id;
        div.append(myP);
        div.append(myButton);
        mytask.append(div);
        });
    };
};
addItemsToDiv();

// add new items and update local storage
document.forms[0].onsubmit = function(submit) {
    submit.preventDefault();
    if(input.value) { 
        addnewTask();
        updatelocalTasks(); 
    } else {
        input.value = "";
    }
}

// < function 2 => create a nwew item:
function addnewTask(){
    let myP = document.createElement("p")
    myP.append(input.value)
    let myButton = document.createElement("button")
    myButton.classList = "btn"
    myButton.append("delete")
    let div = document.createElement("div")
    div.id=Date.now();
    div.append(myP);
    div.append(myButton);
    mytask.append(div);
}

// < function 3 =>  update local storage (tasks):
function updatelocalTasks(){ 
    let resalts=[];
    [...mytask.children].forEach(element => {
        let resalt = { id: element.id, titel: element.firstElementChild.textContent };
        resalts.push(resalt);
    });
    window.localStorage.setItem("tasks",JSON.stringify(resalts))
};

// delelet items
document.addEventListener("click", (ele) => {
    if (ele.target.matches(".btn")) {
        ele.target.parentElement.remove();
    };
    updatelocalTasks();
    if(JSON.parse(localStorage.tasks).length == 0) {
        window.localStorage.removeItem("tasks")
    };
});