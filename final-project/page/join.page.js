class JoinPage {


    get userNameInput(){
        return $('#user_login')
    }

    setUserName (value){
        this.userNameInput.addValue(value)
    }

    get userEmailInput(){
        return $('#user_email')
    }

    setUserEmail (value){
        this.userEmailInput.addValue(value)
    }

    get userPasswordInput(){
        return $('#user_password')
    }

    setUserPassword (value){
        this.userPasswordInput.addValue(value)
    }
    
    get userEmailPreferences(){
        return $('#all_emails')
    }




}

module.exports = new JoinPage()