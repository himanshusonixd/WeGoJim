console.log("start")

let btn = document.getElementById('formbutton')


function sendmail() {
    if (document.getElementById("name").value === '' &&
        document.getElementById("email").value === '' &&
        document.getElementById("message").value === '' &&
        document.getElementById("number").value === '') {

        swal("Error!", "Please enter something", "error");


    }
    else {



        let parameters = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
            phone: document.getElementById("number").value,
        }

        emailjs.send("service_a494b8j", "template_xzaeocr", parameters).then((response) => {
            // alert("sent ")
            console.log(response)
            if (response.text === "OK") {
                swal("Good job!", "Message sent successfully", "success");
            }
            else {
                swal("Something went wrong", "", "error");
            }

        })




        document.getElementById("name").value = ''

        document.getElementById("email").value = ''

        document.getElementById("message").value = ''

        document.getElementById("number").value = ''

    }
}




// mobile nav ////////////////
const mobileNav=document.querySelector('.mobile-nav')

const random = document.getElementById("nav-menu-btn")

if (random) {

    random.addEventListener('click', () => {
        mobileNav.classList.toggle('ison')
        console.log("asdfasdfasdfasd")
    })
}

document.querySelectorAll(".nav-link").forEach(e=> e.addEventListener('click',()=>{

    
    mobileNav.classList.remove('ison')


}))
