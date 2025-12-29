
//SRP means single responsibility principle that follows if a class wants to change one reason behind it, otherwise it will be break the SRC principle.
//This is the good example for SRP principles that follow like example like user repository,
// email service, greeting service. These are the one job at a time, 
// like user repository have one responsible for saving the users and managing the user data. 
// Email services only one job like sending emails to that client.

//Good example.
class UserRepository {
    saveUser(data: any) {
        console.log('saved data')
    }
}
class EmailServices {
    sendEmail(email: string, message: string) {
        console.log('sending email to :' + email + ' message is: ' + message)
    }
}
class GreetingServices {
    sendGreet(email: string) {
        console.log('send greeting to: ' + email)
    }
}

