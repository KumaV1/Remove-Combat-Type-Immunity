import '../assets/Logo.png'
import { TranslationManager } from './translation/TranslationManager';

export async function setup(ctx: Modding.ModContext) {
    console.log("Test");
    TranslationManager.register();
    console.log("Test2");
}