import {Page} from "@playwright/test"
import { CommonLocators } from "./sL_commonLocators"

export class BasePage {
    readonly page: Page
    protected commonLocators: CommonLocators

    constructor(page: Page) {
        this.page = page
        this.commonLocators = new CommonLocators(page)
    }

    async waitForNUmberOfSeconds(timeInSeconds: number){
        await this.page.waitForTimeout(timeInSeconds * 1000)
    }
}