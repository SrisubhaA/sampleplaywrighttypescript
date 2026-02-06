import {expect, test} from '@playwright/test'
import {JetCookBookHomePage} from "../src/pages/JetCookBookHomePage";
import {JetDemoFormsPage} from "../src/pages/JetDemoFormsPage";

    test('Open JET Cookbook URL, validate demo collections List Item and click', async ({page}, testInfo)=>{
       const home = new JetCookBookHomePage(page);
       await home.goto(testInfo.project.use.baseURL as string);

       const demoCollectionsListItemLayOut = home.demoCollectionsListItemLayOut();
       if(demoCollectionsListItemLayOut){
           console.log('List Item Layout icon is visible');
           await demoCollectionsListItemLayOut.scrollIntoViewIfNeeded();
           await demoCollectionsListItemLayOut.click();
           console.log('List Item Layout icon is clicked');
       }

       await expect(page.getByRole('heading',{name:'List Item Layout'})).toBeVisible();
       console.log('List Item Layout Page is visible');
    });

    test('Navigate to Forms page and verify the response status', async ({page, request}, testInfo) =>{

        const baseURL = testInfo.project.use.baseURL as string;

        const nav =new JetDemoFormsPage(page, request);
        const formsUrl = nav.formsUrl(baseURL);

        await page.goto(formsUrl);
        const status = await nav.expectstatus200(formsUrl);

        await expect(page).toHaveURL(/component=home.*demo=rootForms/);
        console.log('Forms page is loaded with ', status, ` ${formsUrl}`);
    });