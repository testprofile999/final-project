class SearchPage {


    get typeScriptLoc(){
        return $('//a[@href="/search?l=TypeScript&q=webdriver.io&type=Repositories"]')
    }
    
    get firstLink(){
        return $('//a[@class="v-align-middle"]')
    }

}

module.exports = new SearchPage()