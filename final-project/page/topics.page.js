class TopicsPage {


    
    get topicsLink(){
        return $('//a[@href="/topics"][contains(text(),"Topics")][@data-hydro-click]')
    }

    get topicsText(){
        return $('//h1[text()="Topics"]')
    }




}

module.exports = new TopicsPage()