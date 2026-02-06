import { APIRequestContext, expect, Page} from "@playwright/test";

export class JetDemoFormsPage {

    constructor(
        private page: Page,
        private request: APIRequestContext
    ){}

    formsUrl(baseURL: string) :string {
        const url = new URL(baseURL);
        url.searchParams.set("component", 'home');
        url.searchParams.set('demo', 'rootForms')
        return url.toString();
    }

    async expectstatus200(url: string): Promise<string>{
        const resp = await this.request.get(url);
        expect(resp.status(),`Expected status 200 for ${url} but got ${resp.status()}`).toBe(200);
        return resp.status().toString();
    }

}