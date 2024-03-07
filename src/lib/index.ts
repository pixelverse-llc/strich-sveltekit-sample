import { StrichSDK } from "@pixelverse/strichjs-sdk";

export async function ensureSDKInitialized(): Promise<void> {
    if (StrichSDK.isInitialized()) {
        return;
    }
    const licenseKey = '<your license key>';
    await StrichSDK.initialize(licenseKey);
}
