let client = {}; // declariw object fih properties dyal client
let DataBaseClient = []; // array npushiw fih object 
// prompt nswlo client achno bgha
let inscription = prompt("Choose between signing up, logging in, or changing the password.").toLowerCase().trim();
// etap dyal singnig up
if (inscription === "signing up") {
    // entre full name
    let Name = prompt("Please enter your full name (min 5 letters, no numbers and symbols):").trim();
    if (Name.length >= 5 && !/[@#\-+*/"$%^&*()=~><!0-9]/.test(Name) && !Name.includes(" ")
    ) {
        let FullName = Name.split(" ").filter(e => e).map(e => e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()).join(" ");
        client.FullName = Name;
        alert("Your name is " + FullName);
    } else {
        alert("Your name is invalid. Please try again and respect the condition.");
    }
    // entre email
    let email = prompt("please entre your email").trim()
    if (email.length >= 10 && email.includes("@") && !email.includes(" ") && email.split("@").length === 2
    ) {
        let Email = email.toLowerCase()
        client.Email = Email
        alert("your email is " + Email)
    } else {
        alert("Your email is invalid. Please try again and respect the condition.");
    }
    // entre age 
    let age = prompt("Enter your age : (max 2 numbre)").trim()
    if (age.length > 0 && age.length <= 2 && !/\D/.test(age)) {
        client.Age = age
        alert("Your age is " + age)
    } else {
        alert("Your age is invalid. Please try again and respect the condition.")
    }
    // password 
    let password = prompt("entre your password : (min 7 characters, use symbol and numbers)").trim()

if (
  password.length >= 7 && /[@#\-+*/]/.test(password) && /[0-9]/.test(password) && !password.includes(" ")
) {
    client.Password = password
    alert("your password is " + password)
} else {
    alert("Your password is invalid. Please try again and respect the condition.")
}

let confirmpassword = prompt("confirm your password")

if (password === confirmpassword) {
    alert("your password correct")
} else {
    confirmpassword = prompt("password incorrect, please try again")
}

    //etap dyal logging up
} else if (inscription == "logging up") {

} else if (inscription == "changing the password") {

} else {
    inscription = prompt("choose between signing up, logging in, or changing the password.")
}
console.log(client);