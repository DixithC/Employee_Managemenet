Technologies Used:
Front End:
-React JS
-JavaScript
-BootStrap 4.5
-Axios

BackEnd:
-Spring boot
-Spring Data JPA
-Maven 3.2
-JDK 1.8
-Embedded Tomcat
-MySQL Database


For front End:
To create the React project, use the command : "npx create-react-app frontend"
-If it ends up with error and still the folder is created then, move inside the folder and "npm init -y" and then "npm install --legacy-peer-deps"

-"npm install bootstrap --save" : This will install bootstrap and saves it in the package.json

-"npm install react-router-dom@5.2.0" : This is to install the Routes, but as we are using "Switch" we have to downgrade the version of router dom so using this command.

Project Info:
-In this project we handle the employee managemenet.
-Where we can Add, Update, View and Delete the employee records.
-We have the Home page where all the information of the Employees will be present along with the Add Employee, Update, View And Delete button.
-We can Add the Employee using the "Add Employee" button and fill in the details like First Name, Last Name, Email Address.
-We can cancel the Addition by clicking on the Cancel button which will direct us to the Home page.
-We can add the Employee details and Save it, when clicked on the save button it will redirect to the home page along with the New employee details.
-We can delete the Employee by clicking on the Delete button which will remove the Employee details and it will be removed from the home page as well.
-We can update the Employee by clicking on the Update button and change the employee details and save it, which will again redirect to the home page.
-We can also View the Employee details by clicking on the View button.
