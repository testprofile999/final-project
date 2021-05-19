class MainPage {


    get searchSignUp(){
        return $('[class*="Header"][data-target*="nux-signup"]')
    }
    
    get scrollToTheFooterLink(){
        return $('//*[text()="Make your contribution"]')
    }

    get signUpForGitHub(){
        return $('[href*="Sign+up+for+GitHub"]')
    }

    get signInLocator(){
        return $('a[href="/login"]')
    }

    get checkAvatar(){
        return $('[data-ga-click="Header, show menu, icon:avatar"]')
    }

    get avaClick(){
        return $('summary[class="Header-link"][data-ga-click*="show"]')
    }

    get goToProfile(){
        return $('a[class="dropdown-item"][data-ga-click*="go to profile"]')
    }

    get nickName(){
        return $('[itemprop="additionalName"]')
    }

    get messageIncorrect(){
        return $('[class="flash flash-full flash-error "]')
    }

    get signOutLocator(){
        return $('[class="dropdown-item dropdown-signout"]')
    }

    get whyGitHub(){
        return $('//*[contains(text(),"Why GitHub")]')
    }

    get dropDownMenuWhy(){
        return $('[class="dropdown-menu flex-auto rounded px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]')
    }

    get explore(){
        return $('//header//summary[contains(text(),"Explore")]')
    }

    get dropDownMenuExplore(){
        return $('[class="dropdown-menu flex-auto rounded px-0 pt-2 pb-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]')
    }

    get pricing(){
        return $('//header//summary[contains(text(),"Pricing")]')
    }

    get dropDownMenuPricing(){
        return $('[class="pb-2 lh-condensed-ultra d-block Link--primary no-underline h5 Bump-link--hover"]')
    }

    get plansLink(){
        return $('[href="/pricing"][class*="pb-2"]')
    }




//#3
    get searchInput(){
        return $('//input[@placeholder="Search GitHub"]')
    }

    get searchInputButton(){
        return $('//*[@title="Search"][@class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search"]')
    }

    get careersLink(){
        return $('[href="/about/careers"]')
    }


}

module.exports = new MainPage()