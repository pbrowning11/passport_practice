import validator from "validator";

const authController = {

    validateSignUp: (userInfo) => {
        const errors = {};
        let isFormValid = true;
        let message = "";
    
        if (!userInfo || typeof userInfo.email !== "string" || !validator.isEmail(userInfo.email)) {
            isFormValid = false;
            errors.email = "Please give a valid email address.";
        }
    
        if (!userInfo || typeof userInfo.password !== "string" || userInfo.password.trim().length < 6) {
            isFormValid = false;
            errors.password = "Password must be at least 6 characters.";
        }
    
        if (!userInfo || typeof userInfo.firstName !== "string" || userInfo.firstName.trim().length === 0){
            isFormValid = false;
            errors.firstName = "Please give your first name"
        }
    
        if (!userInfo || typeof userInfo.lastName !== "string" || userInfo.lastName.trim().length === 0){
            isFormValid = false;
            errors.lastName = "Please give your last name"
        }
    
        if (!isFormValid) {
            message = "Please fill out the form."
        }
    
        return {
            success: isFormValid,
            message,
            errors
        };
    },
    
    validateLogin: (userInfo) => {
        const errors = {};
        let isFormValid = true;
        let message = "";
    
        if (!userInfo || typeof userInfo.email !== "string" || !validator.isEmail(userInfo.email)) {
            ifFormValid = false;
            errors.email = "Please give a valid email address.";
        }
    
        if (!userInfo || typeof userInfo.password !== "string" || userInfo.password.trim().length < 6) {
            ifFormValid = false;
            errors.password = "Please give a valid password";
        }
    
        if (!isFormValid) {
            message = "Please fill out the form."
        }
        
        return {
            success: isFormValid,
            message,
            errors
        };
    }

}

export default authController;