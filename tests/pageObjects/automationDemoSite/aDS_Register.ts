import { Page, expect } from "@playwright/test"
import { BasePage } from "./basePage"
import register from "../../testData/automationDemoSite/aDS_register.json"

export class Register extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    async registerToADS () {
        const commonLocators = await this.commonLocators
        commonLocators.populateTextboxViaNgModel('Full Name* ','FirstName',register.aDS.fName)
        commonLocators.populateTextboxViaNgModel('Full Name* ','LastName',register.aDS.lName)
    }

    // async scrollingFlowTitle () {
    //     const commonLocators = this.commonLocators
    //     const pageTitle = this.page.locator("xpath=//div/span[text()='Scrolling Flow Title']")

    //     const pageTitleText = await pageTitle.textContent()
    //     console.log(pageTitleText)
    //     await expect(pageTitleText).toEqual(flowDemo.scrollingFlowTitle.pageTitle)

    //     await commonLocators.populateTextbox('Navn:','b6-Input_ItemId','Risperdal')
    //     await commonLocators.populateTextbox('Vare nr.:','b6-Input_ItemName','000005')
    //     await commonLocators.clickButton('Søg')
    //     await this.waitForNUmberOfSeconds (1)
    //     await commonLocators.clickButton('OpenCustomPopup')
    //     await commonLocators.verifyText('Filtrer')
    //     await commonLocators.selectRadioButton('Option 1')
    //     await commonLocators.selectRadioButton('Option 2')
    //     await commonLocators.selectRadioButton('Option 3')
    //     await commonLocators.clickPopupIcon('b14-closePopup')
    //     await commonLocators.clickButton('OpenStandardPopup')
    //     await commonLocators.verifyPopupText(flowDemo.scrollingFlowTitle.standardPopupTitle)
    //     await commonLocators.verifyPopupText(flowDemo.scrollingFlowTitle.standardPopupMessage)
    //     await commonLocators.clickPopupIcon('b16-Close')
    //     await commonLocators.clickButton('Next Step')
    //     await commonLocators.clickButton('Next Step')
    //     await commonLocators.verifyTextViaID('Input_TextVar_DescribedBy','This field is required.')
    //     await commonLocators.verifyTextViaID('Input_DecimalVar_DescribedBy','This field is required.')
    //     await commonLocators.populateTextbox('Generic Text Input','Input_TextVar',flowDemo.scrollingFlowTitle.genericTextInput)
    //     await commonLocators.populateTextbox('Generic Number Input','Input_DecimalVar',flowDemo.scrollingFlowTitle.genericNumberInput)
    //     await commonLocators.clickButton('Next Step')
    //     await commonLocators.selectRadioButton('Color')
    //     await commonLocators.selectRadioButton('Other Color')
    //     await commonLocators.populateTextbox('Other Color Input','Input_RadioColor',flowDemo.scrollingFlowTitle.otherColorInput)
    //     await commonLocators.selectRadioButton('Other Details')
    //     await commonLocators.populateTextarea('TextArea_RadioTextArea', flowDemo.scrollingFlowTitle.otherDetails)
    //     await commonLocators.selectRadioButton('Item List')
    //     await commonLocators.clickButton('Next Step')
    //     await commonLocators.clickButton('Next Step')
    //     await commonLocators.validateFeedbackMessage()
    //     await commonLocators.textContentFeedbackMessage('Submitted')
    //     await commonLocators.clickFeedbackMessage()

    //     console.log("scrollingFlowTitle - PASSED")
    // }
}
