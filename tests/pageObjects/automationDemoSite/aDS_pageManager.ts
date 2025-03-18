import { Page } from "@playwright/test";

import { Navigate } from "./aDS_access";
import { Register } from "./aDS_Register";

export class PageManager {
    private readonly page: Page
    private readonly navigate:Navigate
    private readonly register:Register

    constructor (page:Page){
        this.page = page
        this.navigate = new Navigate(this.page)
        this.register = new Register(this.page)
    }

    navigateToADS (){
        return this.navigate
    }

    registerFunctionality (){
        return this.register
    }
}
