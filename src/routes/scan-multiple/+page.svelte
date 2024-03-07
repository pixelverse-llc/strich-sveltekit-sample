<script lang="ts">
    import Scanner from "$lib/Scanner.svelte";
    import { type CodeDetection } from "@pixelverse/strichjs-sdk";

    let numScannedCodes = 0;
    let scannedCodes: string[] = ['-', '-', '-', '-'];

    function onDetected(codeDetections: CodeDetection[]) {
        if (numScannedCodes < 4 && scannedCodes.indexOf(codeDetections[0].data) === -1) {
            scannedCodes[numScannedCodes] = codeDetections[0].data;
            numScannedCodes++;
        }
    }
</script>

<main class="wrapper">
    <header class="top-bar">
        <h3>Multiple Scans</h3>
        <a href="/">EXIT</a>
    </header>
    <Scanner detected={onDetected}></Scanner>
    <section class="barcode-grid">
        <div>{ scannedCodes[0] }</div>
        <div>{ scannedCodes[1] }</div>
        <div>{ scannedCodes[2] }</div>
        <div>{ scannedCodes[3] }</div>
    </section>
</main>

<style>
    .barcode-grid {
        display: grid;
        padding: 8px;
        gap: 20px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
</style>
