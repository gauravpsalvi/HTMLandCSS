    //function runValidate accumulate the result of other validation function
    function runValidate(form){
        
        if(validateFirstName(form) && validateEmail(form) &&
         validateStudentID(form) && validateDOJ(form) && validateNOC(form)){
             return true;
         }
         else{
             return false;
         }
    }//end of runValidate function

    //function validate the firstName input
    function validateFirstName(form){
        var name = form.elements["fname"];

        if(name.validity.valueMissing){
            name.setCustomValidity("Please enter your first name");
            return false;
        }
        else{
            name.setCustomValidity("");
            return true;
        }
    }//end of validateFirstName function

    //function validate the email address
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
    }// end of validateEmail function

     //function validate the studentID
     function validateStudentID(form){
        var studentID = form.elements["sid"];

        if(studentID.validity.valueMissing){
            studentID.setCustomValidity("Please enter your student ID");
            return false;
        }
        else if(studentID.validity.patternMismatch){
            studentID.setCustomValidity("Please enter the correct 7 digits student ID number");
            return false;
        }
        else{
            studentID.setCustomValidity("");
            return true;
        }
    }// end of validateStudentID function

    //function validate the DateOfJoin
    function validateDOJ(form){
        var min= 2000-09-01;
        var max= 2020-06-30;
        var dateOfJoin = form.elements["dateJoin"];

        if(dateOfJoin < min){
            dateOfJoin.setCustomValidity("Please enter the date greater than September 1, 2000");
            return false;
        }
        else if(dateOfJoin > max){
            dateOfJoin.setCustomValidity("Please enter the date no later than June 30, 2020");
            return true;
        }
        else{
            dateOfJoin.setCustomValidity("");
            return true;
        }
    }// end of validateDOJ function

    //function validate the number of courses
    function validateNOC(form){
        var noOfCourses = form.elements["ncourses"];

        if(noOfCourses.validity.valueMissing){
            noOfCourses.setCustomValidity("Please enter number of courses taken");
            return false;
        }
        else if(noOfCourses.validity.rangeUnderflow || noOfCourses.validity.rangeOverflow){
            noOfCourses.setCustomValidity("Please enter a correct number between 1 to 10");
            return false;
        }
        else{
            noOfCourses.setCustomValidity("");
            return true;
        }
    }// end of validateNOC function