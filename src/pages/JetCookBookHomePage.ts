import {Page, FrameLocator, Locator} from "@playwright/test";
import {BasePage} from "./BasePage";

export class JetCookBookHomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async goto(baseURL: string){
        await this.page.goto(baseURL);
        console.log('The JET COOKBOOK URL is launched - '+this.page.url());
    }

    demoCollectionsListItemLayOut(): Locator{
     return this.page.locator('li#listItemLayoutAll_category').getByText('List Item Layout');
    }
}