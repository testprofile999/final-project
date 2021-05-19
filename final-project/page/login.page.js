class LoginPage {


    get signInUserLogin(){
        return $('#login_field')
    }
    signInUserName (value) {
        this.signInUserLogin.addValue(value)
    }

    get signInUserPassword(){
        return $('#password')
    }
    signInFillUserPassword (value) {
        this.signInUserPassword.addValue(value)
    }

    value="Sign in"
    get signInButton(){
        return $('[value="Sign in"]')
    }

    get forgotPassword(){
        return $('//*[text()="Forgot password?"]')
    }




}

module.exports = new LoginPage()