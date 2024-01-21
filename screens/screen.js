import { $ } from '@wdio/globals';

export default class Screen {
    constructor(selector) {
        if (!selector) {
            throw new Error('Selector is required');
        }
        this.selector = selector;
    }

    async isVisible() {
        const element = await $(this.selector);
        return await element.isDisplayed();
    }
}