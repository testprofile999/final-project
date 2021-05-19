class OrganizationsPage {


    get enterpriseCloud(){
        return $('[class="currency-container col-12 signup-plan-column js-details-container mr-sm-2 "]')
    }

    get enterpriseServer(){
        return $('[class="currency-container col-12 signup-plan-column js-details-container"]')
    }
    




}

module.exports = new OrganizationsPage()