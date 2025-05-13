// let DataBaseClient = []; // array npushiw fih object 
// // function dyal whithdraw 
// function withdraw(client) {
//     let amount = parseFloat(prompt("Enter the amount you want to withdraw:"))

//     if (amount > client.solde) {
//         amount = prompt("Insufficient solde. You only have: " + client.solde)
//     } else if (amount <= 0) {
//         amount = prompt("Please enter a valid amount greater than 0.")
//     } else {
//         client.solde -= amount;
//         alert("Withdrawal successful! Your new solde is: " + client.solde)
//     }
// }
// function Deposit(client) {
//     let amountDeposit = parseFloat(prompt("Enter the amount you want to deposit:"));
    
//     if ( amountDeposit <= 0) {
//         amountDeposit = prompt("Please enter a valid amount greater than 0.")
//     } else if (amountDeposit > 1000) {
//         amountDeposit = prompt("The amount should not be more than 1000.")
//     } else {
//         client.solde += amountDeposit
//         alert("Deposit successful! Your new balance is: " + client.solde)
//     }
// }

// // prompt nswlo client achno bgha
// let inscription = prompt("Choose between signing up, logging in, or changing the password.").toLowerCase().trim();

// // etap dyal sign up
// if (inscription === "signing up") {
//     let client = {}; // declariw object fih properties dyal client
//     let Name = prompt("Please enter your full name (min 5 letters, no numbers and symbols):").trim();
//     if (Name.length >= 5 && !/[@#\-+*/"$%^&*()=~><!0-9]/.test(Name)) {
//         let FullName = Name.split(" ").filter(e => e).map(e => e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()).join(" ");
//         client.FullName = FullName;
//         alert("Your name is " + FullName);
//     } else {
//         alert("Your name is invalid. Please try again and respect the condition.");
//     }

//     let email = prompt("Please enter your email").trim();
//     if (email.length >= 10 && email.includes("@") && !email.includes(" ") && email.split("@").length === 2) {
//         let Email = email.toLowerCase();
//         client.Email = Email;
//         alert("Your email is " + Email);
//     } else {
//         email = prompt("Your email is invalid. Please try again and respect the condition.");
//     }

//     let age = prompt("Enter your age (max 2 digits)").trim();
//     if (age.length > 0 && age.length <= 2 && !/\D/.test(age)) {
//         client.Age = age;
//         alert("Your age is " + age);
//     } else {
//         age = prompt("Your age is invalid. Please try again and respect the condition.");
//     }

//     let password = prompt("Enter your password (min 7 characters, use symbols and numbers)").trim();
//     if (password.length >= 7 && /[@#\-+*/]/.test(password) && /[0-9]/.test(password) && !password.includes(" ")) {
//         client.Password = password;
//         alert("Your password is " + password);
//     } else {
//         password = prompt("Your password is invalid. Please try again and respect the condition.");
//     }

//     let confirmpassword = prompt("Confirm your password");
//     if (password === confirmpassword) {
//         alert("Your password is correct");
//     } else {
//         confirmpassword = prompt("Password incorrect, please try again");
//     }
//     client.solde = 500

//     if (client.FullName && client.Email && client.Age && client.Password && password === confirmpassword) {
//         DataBaseClient.push(client);
//         alert("Your account has been created successfully! Your sold is " + client.solde);

//         let inscriptionAfterSignUp = prompt("Choose between logging in, or changing the password.").toLowerCase().trim();

//         if (inscriptionAfterSignUp === "logging in") {
//             let loginemail = prompt("Please enter your Email").trim().toLowerCase();
//             let loginpassword = prompt("Please enter your Password").trim();

//             let finddata = DataBaseClient.find(e => e.Email === loginemail && e.Password === loginpassword);

//             while (!finddata) {
//                 alert("Incorrect email or password. Please try again.");
//                 loginemail = prompt("Please enter your Email").trim().toLowerCase();
//                 loginpassword = prompt("Please enter your Password").trim();
//                 finddata = DataBaseClient.find(e => e.Email === loginemail && e.Password === loginpassword);
//             }

//             alert("Login successful! Welcome " + finddata.FullName);
//             let action = prompt("Choose an action: Withdraw, Deposit, Loan, Invest, Transaction History, Log out").toLowerCase().trim();
//             if (action === "withdraw") {
//                 withdraw(finddata);
//             }else if (action === "deposit"){
//                 Deposit(finddata)
//             }
//         } else if (inscriptionAfterSignUp === "changing the password") {
//             let loginemail = prompt("Please enter your Email").trim().toLowerCase();
//             let loginpassword = prompt("Please enter your Password").trim();

//             let finddata = DataBaseClient.find(e => e.Email === loginemail && e.Password === loginpassword);

//             if (finddata) {
//                 let newPassword = prompt("Enter your new password (min 7 characters, use symbols and numbers)").trim();

//                 while (!(newPassword.length >= 7 && /[@#\-+*/]/.test(newPassword) && /[0-9]/.test(newPassword) && !newPassword.includes(" "))) {
//                     newPassword = prompt("Your password is invalid. Please try again and respect the condition.");
//                 }

//                 let ConfirNewPassword = prompt("Confirm your new password");

//                 while (newPassword !== ConfirNewPassword) {
//                     ConfirNewPassword = prompt("Password incorrect, please try again");
//                 }

//                 finddata.Password = newPassword;
//                 alert("Your password has been successfully updated!");

//             } else {
//                 alert("Incorrect email or password. Please try again.");
//             }
//         } else {
//             alert("Invalid option. Returning to main menu.");
//         }
//     }
// }
// console.log(DataBaseClient);
