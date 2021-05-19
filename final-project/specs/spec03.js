const assert = require('assert')
const mainPage = require('../page/main.page.js')
const searchPage = require('../page/search.page.js')
const enterprisePage = require('../page/enterprise.page.js')
const joinPage = require('../page/join.page.js')
const trialPage = require('../page/trial.page.js')
const careersPage = require('../page/careers.page.js')
const { uniqueNamesGenerator, adjectives, colors, animals, names, starWars, NumberDictionary } = require('unique-names-generator');
const emails = require('email-generator');
const organizationsPage = require('../page/organizations.page.js');

        const userName1 = uniqueNamesGenerator({ dictionaries: [names, starWars] }); // big_red_donkey
        const userName2 = uniqueNamesGenerator({
            dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
            length: 2,
            separator: '-'
        }); // big-donkey
        const userName3 = uniqueNamesGenerator({
            dictionaries: [names, colors, NumberDictionary.generate({ min: 1, max: 99 })],
            length: 3,
            separator: '-',
            style: 'capital'
        }); // DangerousSnake123
        const userName4 = uniqueNamesGenerator({
            dictionaries: [names, colors],
            length: 2,
            separator: '@'
        });
        const userPhone = uniqueNamesGenerator({
            dictionaries: ["+", NumberDictionary.generate({ min: 100, max: 700 }), NumberDictionary.generate({ min: 10000000, max: 9999999 })],
            length: 3,
            separator: ''
        });



describe('Final Home Project. SPEC#3', () => {

    it('Test case #1. Testing of Search form', () => {
        browser.url('https://github.com')                                //Step 1
        mainPage.searchInput.addValue("webdriver.io")                    //Step 2
        browser.pause(1000)
        mainPage.searchInputButton.click()                               //Step3
        browser.pause(1000)
        searchPage.typeScriptLoc.click()                                //Step4
        browser.pause(2000)
        searchPage.firstLink.click()                                    //Step5
        const findWebdriverio = $("//*[contains(text(),'webdriver.io')]").isEnabled()   //Step6       
        console.log("Text 'webdriver.io' is enabled on this page: " + findWebdriverio)
        browser.pause(1000)
    })

    it('Test case #2. Testing of "Get started with GitHub Enterprise" (Enterprise Cloud) ', () => {
        browser.url('https://github.com/enterprise')                                //Step 1
        enterprisePage.startAFree.click()                                           //Step 2
        browser.pause(1000)
        organizationsPage.enterpriseCloud.click()                                   //Step 3
        joinPage.setUserName(userName2)                                             //Step 4
        joinPage.setUserEmail(emails.generateEmail().replace(/(^")|("$)/g, ''))      
        joinPage.setUserPassword(userName3)  
        browser.pause(3000)
    })

    it('Test case #3. Testing of "Get started with GitHub Enterprise" (Enterprise Server)  ', () => {
        browser.url('https://github.com/enterprise')                                //Step 1
        enterprisePage.startAFree.click()                                           //Step 2
        browser.pause(1000)
        organizationsPage.enterpriseServer.click()                                   //Step 3
        trialPage.setUserName(userName2)                                             //Step 4
        trialPage.setCompanyName(userName1) 
        trialPage.setUserEmail(emails.generateEmail().replace(/(^")|("$)/g, ''))      
        trialPage.setPhone(userPhone)  
        trialPage.radio1.click()                                                    //Step 5
        trialPage.questionYes.click()                                               //Step 6
        trialPage.acceptCheck.click()                                               //Step 7
        browser.pause(10000)
    })

    it('Test case #1. Testing of Search form', () => {
        browser.url('https://github.com')                                  //Step 1
        mainPage.careersLink.click()                                       //Step 2
        careersPage.openPosLink.click()                                    //Step3
        browser.pause(1000)


        var strColumntext = [] ;
        var table = browser.$('[class="pb-md-6"]');

        table.$$('h3').map(function(element){
            strColumntext.push(element.getText());
            });
        console.log("______________________________________________________________________________________ ")        
        console.log("LIST OF OPEN POSITIONS: " + strColumntext)

        //[0-2] ______________________________________________________________________________________
        //[0-2] LIST OF OPEN POSITIONS: Business Systems,Customer Success,Design,Engineering,Finance,Human Resources,
        //Internal Communications,Legal,Marketing,Policy,Product,Sales,Security,Services,Solutions Engineering,Support,Workplace
    
 
    })

})