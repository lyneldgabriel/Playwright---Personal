import {test} from "@playwright/test"
import { PageManager } from "../../pageObjects/automationDemoSite/aDS_pageManager"

test.slow()

let pageManager:PageManager

test('Navigate to Automation Demo Site', async({page}) => {
    pageManager = new PageManager(page)
    await pageManager.navigateToADS().navigateToADS()
    await pageManager.registerFunctionality().registerToADS()
})