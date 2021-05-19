class EnterprisePage {


    
    get startAFree(){
        return $('//*[text()="Start a free trial"]')
    }
  



}

module.exports = new EnterprisePage()