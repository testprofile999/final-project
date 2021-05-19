const assert = require('assert')
const mainPage = require('../page/main.page.js')
const joinPage = require('../page/join.page.js')
const pricingPage = require('../page/pricing.page.js')
const explorePage = require('../page/explore.page.js')
const topicsPage = require('../page/topics.page.js')
const { uniqueNamesGenerator, adjectives, colors, animals, names, starWars, NumberDictionary } = require('unique-names-generator');
const emails = require('email-generator');

        const userName2 = uniqueNamesGenerator({
            dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
            length: 2,
            separator: '-'
        }); // big-donkey
        //console.log("userName2 = " + userName2)
        
        const userName3 = uniqueNamesGenerator({
            dictionaries: [names, colors, NumberDictionary.generate({ min: 1, max: 99 })],
            length: 3,
            separator: '-',
            style: 'capital'
        }); // DangerousSnake123
        //console.log("userName3 = " + userName3)
        const userName4 = uniqueNamesGenerator({
            dictionaries: [names, colors],
            length: 2,
            separator: '@'
        });



describe('Final Home Project. SPEC#2', () => {

    it('Test case #1. Mouse HOVER "Why GitHub?" ', () => {
        browser.url('https://github.com')                               //Step 1
        mainPage.whyGitHub.moveTo()                                     //Step 2
        browser.pause(2000)
        const dropDow1 = mainPage.dropDownMenuWhy.isDisplayed()          //Step3
        console.log("Check if dropdown menu is displayed: " + dropDow1)
        browser.reloadSession()
    })

    it('Test case #2. Mouse HOVER "Explore" ', () => {
        browser.url('https://github.com')                               //Step 1
        browser.pause(1000)
        mainPage.explore.moveTo()                                     //Step 2
        browser.pause(2000)
        const dropDow2 = mainPage.dropDownMenuExplore.isDisplayed()          //Step3
        console.log("Check if dropdown menu is displayed: " + dropDow2)
        browser.reloadSession()
    })

    it('Test case #3. Mouse HOVER "Pricing" ', () => {
        browser.url('https://github.com')                               //Step 1
        browser.pause(1000)
        mainPage.pricing.moveTo()                                     //Step 2
        browser.pause(2000)
        const dropDow3 = mainPage.dropDownMenuPricing.isDisplayed()          //Step3
        console.log("Check if dropdown menu is displayed: " + dropDow3)
        browser.reloadSession()
    })

    it('Test case #4. "Pricing" - "Plans" - "Join for free" ', () => {
        browser.url('https://github.com')                               //Step 1
        browser.pause(1000)
        mainPage.pricing.moveTo()                                       //Step 2
        browser.pause(1000)
        mainPage.plansLink.click()                                      //Step3

        browser.pause(1000)
        pricingPage.joinForFree.click()
        browser.pause(1000)
        joinPage.setUserName(userName2)                                  //Step 4
        joinPage.setUserEmail(emails.generateEmail().replace(/(^")|("$)/g, ''))      
        joinPage.setUserPassword(userName3)  
        browser.pause(3000)               
        browser.reloadSession()
    })

    it('Test case #5. "Explore" - "Explore GitHub" ', () => {
        browser.url('https://github.com')                               //Step 1
        browser.pause(1000)
        mainPage.explore.moveTo()                                       //Step 2
        browser.pause(2000)
        explorePage.exploreGitH.click()                                     //Step4
        browser.pause(2000)
        topicsPage.topicsLink.click()     
        const topic = topicsPage.topicsText.isDisplayed()                 //Step5
        console.log("Check if <h1>Topics</h1> is displayed: " + topic)
        browser.reloadSession()
    })


 




})