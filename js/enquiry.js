const Fname = document.getElementById("Fname");

const email = document.getElementById("email");
const phone = document.getElementById("PhoneNumber");
const address = document.getElementById("address");
const mess = document.getElementById("message");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
var selectedProducts = [];


function sendEmail() {

  


    if(!Fname.value || !email.value || !phone.value || !mess.value || !address.value){
        Swal.fire({
            position: "center",
            icon: "error",
            title: `Try to fill out the empty box in the form`,
            showConfirmButton: false,
            timer: 1500
          });
    }
    else{

            checkboxes.forEach(cb => {
                if (cb.checked) {
                    selectedProducts.push(cb.value);
                }
            });
        

         const bodyMessage = `Full Name: ${Fname.value} Email: ${email.value} Phone Number: ${phone.value}  Selected Products: ${selectedProducts.join(", ")}  Message: ${mess.value}`;
         
    console.log(bodyMessage)
    var param = {
        to_name:"Surana Wires Customer Support Team",
        from_name:"Surana Wires Customer Service Team",
        message:bodyMessage
    }

 const service_Id = "service_jk1bcao";
 const template_Id = "template_xy0adqb"

    emailjs.send(service_Id,template_Id,param).then((res) =>{
            document.getElementById("Fname").value = "",
           
            document.getElementById("email").value = "",
            document.getElementById("PhoneNumber").value = "",
            document.getElementById("message").value = "",
            document.getElementById("address").value = "",
            // Uncheck all checkboxes after submission
            checkboxes.forEach(cb => cb.checked = false);

            Swal.fire({
                position: "center",
                icon: "success",
                title: `"Thank you for reaching out!"`,
                showConfirmButton: false,
                timer: 1500
              });
        }

        
    ).catch((err)=>console.log(err));


  
    }
   
}


