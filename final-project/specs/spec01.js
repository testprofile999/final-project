const assert = require('assert')
const mainPage = require('../page/main.page.js')
const joinPage = require('../page/join.page.js')
const loginPage = require('../page/login.page.js')
const pwresetPage = require('../page/pwreset.page.js')
const { uniqueNamesGenerator, adjectives, colors, animals, names, starWars, NumberDictionary } = require('unique-names-generator');
const emails = require('email-generator');
const testProfileUserName = 'testprofile999';
const testProfilePassword = '123tp999'


const userName1 = uniqueNamesGenerator({ dictionaries: [names, starWars] }); // big_red_donkey
        //console.log("userName1 = " + userName1)

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



describe('Final Home Project. SPEC#1', () => {

    it('Test case #1. Registration', () => {
        browser.url('https://github.com')                   //Step 1
        mainPage.searchSignUp.click()                       //Stap 2
        joinPage.setUserName(userName2)                     //Step 3
        joinPage.setUserEmail(emails.generateEmail().replace(/(^")|("$)/g, ''))       //Step 4 + Replacing all quotes
        joinPage.setUserPassword(userName3)                 //Step 5
        joinPage.userEmailPreferences.click()               //Step 6
 
        browser.pause(2000);
    })

    it('Test case #2. Registration (bottom registration form)', () => {
        browser.url('https://github.com')                   //Step 1
        mainPage.scrollToTheFooterLink.scrollIntoView()     //Step 2
        browser.pause(1000)   
        mainPage.signUpForGitHub.click()                    //Step 3
        joinPage.setUserName(userName2)                     //Step 4
        joinPage.setUserEmail(emails.generateEmail().replace(/(^")|("$)/g, ''))       //Step 5 + Replacing all quotes
        joinPage.setUserPassword(userName3)                 //Step 6

        browser.pause(5000);
    })

    it('Test case #3. Sign in testing', () => {
        browser.url('https://github.com')                                //Step 1
        mainPage.signInLocator.click()   
        browser.pause(500)                                               //Stap 3
        loginPage.signInUserName(testProfileUserName)                     //Step 4
        loginPage.signInFillUserPassword(testProfilePassword)             //Step 5
        browser.pause(500)
        loginPage.signInButton.click()                                    //Step 6
        const isEnabled = mainPage.checkAvatar.isEnabled();          //Step 7. Checking if element with locator is displayed
        console.log("Successfully logged in = " + isEnabled)           //expected TRUE
        browser.pause(500)
        mainPage.avaClick.click()
        browser.pause(1500)
        mainPage.goToProfile.click()                                     //Step 8
        const nickName = mainPage.nickName.isDisplayed();                //Step 9. checking if element with locator is displayed
        console.log("Is Profile Name visible?: " + nickName)             // Expected TRUE
        browser.pause(2000);
        mainPage.avaClick.click()
        mainPage.signOutLocator.click()                                   //Step 10
        browser.pause(2000)
    })

    it('Test case #4. Sign in testing - NOT VALID Password (empty space)', () => {
        browser.url('https://github.com')                                //Step 1
        mainPage.signInLocator.click()   
        browser.pause(500)                                               //Stap 3
        loginPage.signInUserName(testProfileUserName)                     //Step 4
        loginPage.signInFillUserPassword("")                             //Step 5
        browser.pause(500)
        loginPage.signInButton.click()                                    //Step 6

        const incorrect = mainPage.messageIncorrect.isDisplayed();        // Step 7. Checking if element with locator is displayed
        console.log("\"Incorrect username or password.\" message = " + incorrect)     //expected TRUE
        
        browser.pause(2000);
    })

    it('Test case #5. Sign in testing - NOT VALID Password (letters and digits)', () => {
        browser.url('https://github.com')                                //Step 1
        mainPage.signInLocator.click()   
        browser.pause(500)                                               //Stap 3
        loginPage.signInUserName(testProfileUserName)                     //Step 4
        loginPage.signInFillUserPassword(userName3)                       //Step 5
        browser.pause(500)
        loginPage.signInButton.click()                                    //Step 6

        const incorrect = mainPage.messageIncorrect.isDisplayed();        // Step 7. Checking if element with locator is displayed
        console.log("\"Incorrect username or password.\" message = " + incorrect)     //expected TRUE
        
        browser.pause(2000);
    })

    it('Test case #6. Sign in testing (Forgot password?) - NOT VALID (symbols with @ but without \'.\' and domain name) ', () => {
        browser.url('https://github.com')                                //Step 1
        mainPage.signInLocator.click()   
        browser.pause(500)                                               //Stap 3
        loginPage.signInUserName(testProfileUserName)                     //Step 4
        loginPage.forgotPassword.click()                                  //Step 5
        pwresetPage.insertEmail(userName4)                                  //Step 6
        
        browser.pause(2000);
    })



})