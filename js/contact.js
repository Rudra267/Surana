const Fname = document.getElementById("Fname");
const email = document.getElementById("email");
const mess = document.getElementById("message");



function sendEmail() {

    if(!Fname.value || !email.value || !mess.value){
        Swal.fire({
            position: "center",
            icon: "error",
            title: `Try to fill out the empty box in the form`,
            showConfirmButton: false,
            timer: 1500
          });
    }
    else{

        

         const bodyMessage = `Full Name: ${Fname.value} Email: ${email.value}  Message: ${mess.value}`;
         
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
            document.getElementById("message").value = "",
           

            Swal.fire({
                position: "center",
                icon: "success",
                title: `We have received your message and our team will get back to you shortly.`,
                showConfirmButton: false,
                timer: 1500
              });
        }

        
    ).catch((err)=>console.log(err));


  
    }
   
}


