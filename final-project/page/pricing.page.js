class PricingPage {


    
    get joinForFree(){
        return $('//a[text()="Join for free"][@class="d-block btn-mktg btn-outline-mktg"]')
    }



}

module.exports = new PricingPage()