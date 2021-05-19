class PwresetPage {


    get resetEmailnput(){
        return $('#email_field')
    }

    insertEmail (value) {
        this.resetEmailnput.addValue(value)
    }

  



}

module.exports = new PwresetPage()