class ExplorePage {


    
    get exploreGitH(){
        return $('//header//a[@href="/explore"][contains(text(),"Explore GitHub ")]')
    }
  



}

module.exports = new ExplorePage()