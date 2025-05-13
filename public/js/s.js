let DataBaseClient = []; // array npushiw fih object 

// prompt nswlo client achno bgha
let inscription = prompt("Choose between signing up, logging in, or changing the password.").toLowerCase().trim();

// etap dyal sign up
if (inscription === "signing up") {
    let client = {}; // declariw object fih properties dyal client
    let Name = prompt("Please enter your full name (min 5 letters, no numbers and symbols):").trim();
    if (Name.length >= 5 && !/[@#\-+*/"$%^&*()=~><!0-9]/.test(Name)) {
        let FullName = Name.split(" ").filter(e => e).map(e => e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()).join(" ");
        client.FullName = FullName;
        alert("Your name is " + FullName);
    } else {
        alert("Your name is invalid. Please try again and respect the condition.");
    }

    let email = prompt("Please enter your email").trim();
    if (email.length >= 10 && email.includes("@") && !email.includes(" ") && email.split("@").length === 2) {
        let Email = email.toLowerCase();
        client.Email = Email;
        alert("Your email is " + Email);
    } else {
        email = prompt("Your email is invalid. Please try again and respect the condition.");
    }

    let age = prompt("Enter your age (max 2 digits)").trim();
    if (age.length > 0 && age.length <= 2 && !/\D/.test(age)) {
        client.Age = age;
        alert("Your age is " + age);
    } else {
        age = prompt("Your age is invalid. Please try again and respect the condition.");
    }

    let password = prompt("Enter your password (min 7 characters, use symbols and numbers)").trim();
    if (password.length >= 7 && /[@#\-+*/]/.test(password) && /[0-9]/.test(password) && !password.includes(" ")) {
        client.Password = password;
        alert("Your password is " + password);
    } else {
        password = prompt("Your password is invalid. Please try again and respect the condition.");
    }

    let confirmpassword = prompt("Confirm your password");
    if (password === confirmpassword) {
        alert("Your password is correct");
    } else {
        confirmpassword = prompt("Password incorrect, please try again");
    }

    if (client.FullName && client.Email && client.Age && client.Password && password === confirmpassword) {
        DataBaseClient.push(client);
        alert("Your account has been created successfully!");

        let inscriptionAfterSignUp = prompt("Choose between logging in, or changing the password.").toLowerCase().trim();

        if (inscriptionAfterSignUp === "logging in") {
            let loginemail = prompt("Please enter your Email").trim().toLowerCase();
            let loginpassword = prompt("Please enter your Password").trim();

            let finddata = DataBaseClient.find(e => e.Email === loginemail && e.Password === loginpassword);

            while (!finddata) {
                alert("Incorrect email or password. Please try again.");
                loginemail = prompt("Please enter your Email").trim().toLowerCase();
                loginpassword = prompt("Please enter your Password").trim();
                finddata = DataBaseClient.find(e => e.Email === loginemail && e.Password === loginpassword);
            }

            alert("Login successful! Welcome " + finddata.FullName);
        } else if (inscriptionAfterSignUp === "changing the password") {
            alert("Password change functionality is not yet implemented.");
        } else {
            alert("Invalid option. Returning to main menu.");
        }
    }
}
console.log(DataBaseClient);
