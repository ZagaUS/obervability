function sendMail() {

    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var subject = document.getElementById('subject').value;
    
    var messageBody = "Name :-" + userName + "  Mail Address:- " + email + "   message :- " + message

    Email.send({
        SecureToken : "9f4c4f41-276b-4c7d-bc20-1c28be67816d",
        To : "sharanya.june7@gmail.com",
        From : "surendhar030298@gmail.com",
        Subject : subject,
        Body : messageBody
        }).then(
            message => {
                if(message=='OK'){
                    swal("Thanks for contacting us. We will get back to you ASAP!");
                }
                else{
                    swal("Error", "error");
                }
            }
        );
}