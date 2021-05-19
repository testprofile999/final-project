class TrialePage {

    get userNameInput(){
        return $('#contact_request_name')
    }

    setUserName (value){
        this.userNameInput.addValue(value)
    }

    get userEmailInput(){
        return $('#contact_request_email')
    }

    setUserEmail (value){
        this.userEmailInput.addValue(value)
    }

    get userCompanyInput(){
        return $('#contact_request_organization_name')
    }

    setCompanyName (value){
        this.userCompanyInput.addValue(value)
    }

    get userPhoneInput(){
        return $('#contact_request_phone')
    }

    setPhone (value){
        this.userPhoneInput.addValue(value)
    }

    get radio1(){
        return $('[value="gcp"]')
    }
    
    get questionYes(){
        return $('#questions_yes')
    }
    
    get acceptCheck(){
        return $('#contact_request_agreed_to_terms')
    }


}

module.exports = new TrialePage()