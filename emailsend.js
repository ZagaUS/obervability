function sendMail() {

    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var subject = document.getElementById('subject').value;
    
    var messageBody = "Name :-" + userName + "  Mail Address:- " + email + "   message :- " + message

    Email.send({
        SecureToken : "40d3fdf4-f62a-47da-b21c-99af6404e551",
        To : "sales@zagaopensource.com",
        From : "sales@zagaopensource.com",
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