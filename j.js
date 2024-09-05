function emailsend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shubhampijdurkar7@gmail.com",
        Password : "484C76B05925577E0DEB5FD7F5AA18B6D520",
        To : 'kundankapgate2005@gmail.com',
        From : "shubhampijdurkar7@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

