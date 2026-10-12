<script lang="ts">
    import { ensureSDKInitialized } from "#lib";
    import { type CodeDetection, PopupScanner } from "@pixelverse/strichjs-sdk";

    let popupScannerResult = $state<CodeDetection>();
    let popupScannerResultDialog: HTMLDialogElement;

    async function scanWithPopup() {
        await ensureSDKInitialized();
        const detectedCodes = await PopupScanner.scan({ symbologies: ['code128', 'qr'] });
        if (detectedCodes) {
            popupScannerResult = detectedCodes[0];
            popupScannerResultDialog.showModal();
        }
    }

    function popupScanDone() {
        popupScannerResultDialog.close();
    }
</script>

<main>
    <header><h2>STRICH SvelteKit Sample</h2></header>
    <p>
        Enabled symbologies: <b>Code 128, QR</b>.
    </p>
    <section>
        <header><h3>Popup Scanner</h3></header>
        <p>Scan a single code using the PopupScanner.</p>
        <button onclick={scanWithPopup}>Scan with Popup</button>
    </section>
    <section>
        <header><h3>Single Scan</h3></header>
        <p>Scan a single barcode and return here.</p>
        <a href="/scan-single">Start Single</a>
    </section>
    <section>
        <header><h3>Repeated Scans</h3></header>
        <p>Repeatedly scan barcodes, pausing and resuming the scanner until done.</p>
        <a href="/scan-repeated">Start Repeated</a>
    </section>
    <section>
        <header><h3>Multiple Scans</h3></header>
        <p>Scan continuously until a number of distinct barcodes are scanned.</p>
        <a href="/scan-multiple">Start Multiple</a>
    </section>
</main>

<!-- dialog for displaying popup scanner result -->
<dialog bind:this={popupScannerResultDialog}>
    {#if popupScannerResult}
        <p>Scanned code: <b>{popupScannerResult.data}</b></p>
    {/if}

    <div class="button-bar">
        <button onclick={scanWithPopup}>SCAN AGAIN</button>
        <button onclick={popupScanDone}>DONE</button>
    </div>
</dialog>

<style>
    main {
        padding: 16px;
    }
    section {
        margin-top: 16px;
    }
    dialog {
        margin: auto;
    }
    .button-bar {
        margin-top: 8px;
        display: flex;
        flex-direction: row;
        gap: 8px;
    }
</style>
