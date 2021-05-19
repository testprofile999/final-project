class CareersPage {


    get openPosLink(){
        return $('[href="#positions"]')
    }

    get openPosList(){
        return $('[class="clearfix border-bottom color-border-tertiary"]')
    }




}

module.exports = new CareersPage()