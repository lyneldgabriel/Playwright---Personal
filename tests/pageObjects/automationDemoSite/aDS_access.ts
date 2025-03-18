import { Page, expect } from "@playwright/test"
import { BasePage } from "./basePage"
import access from "../../testData/automationDemoSite/aDS_access.json"

export class Navigate extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    async navigateToADS() {
        await this.page.goto(access.aDS.url)
    }
}