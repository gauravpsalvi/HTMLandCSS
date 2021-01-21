Form Validation

We have used in-line as well as HTML5 default validation for form input fields using "validity.valueMissing, validity.patternMismatch function" in JavaScript and "required" attributes for all the input form fields.
```
function validateEmail(form){
        var email = form.elements["email"];

        if(email.validity.valueMissing){
            email.setCustomValidity("Please enter your email address");
            return false;
        }
        else if(email.validity.patternMismatch){
            email.setCustomValidity("Email html@ is not in a correct format");
            return false;
        }
        else{
            email.setCustomValidity("");
            return true;
        }
}
```
"validity.valueMissing, validity.patternMismatch function" are some JavaScript in-built functions which are commonly used to validate email address. "required" attribute is a HTML5 attribute which checks if the input field is empty or not without any external library.

![Capture (1)](https://user-images.githubusercontent.com/52541140/104040081-386a5300-51fd-11eb-8b2d-d713d217479c.PNG)
![image](https://user-images.githubusercontent.com/52541140/104039669-abbf9500-51fc-11eb-9e7d-c3ae63dcba72.png)

