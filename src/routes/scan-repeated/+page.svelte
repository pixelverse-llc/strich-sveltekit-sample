<script lang="ts">
    import Scanner from "#lib/Scanner.svelte";
    import { type CodeDetection } from "@pixelverse/strichjs-sdk";
    import { goto } from "$app/navigation";

    let codesScanned = $state(0);
    let data = $state('');
    let confirmScanDialog: HTMLDialogElement;
    let scanner: Scanner;

    function onDetected(codeDetections: CodeDetection[]) {
        data = codeDetections[0].data;
        codesScanned++;
        scanner.stop();
        confirmScanDialog?.showModal();
    }

    function continueScanning() {
        confirmScanDialog?.close();
        scanner.start();
    }

    function finishScanning() {
        goto('/');
    }
</script>

<main class="wrapper">
    <header class="top-bar">
        <h1>Repeated Scans</h1>
        <a href="/">EXIT</a>
    </header>
    <Scanner detected={onDetected} bind:this={scanner}></Scanner>
</main>

<dialog bind:this={confirmScanDialog}>
    <p>You have scanned { codesScanned } barcodes.</p>
    <p>Scanned code: <b>{ data }</b></p>

    <div class="button-bar">
        <button onclick={continueScanning}>CONTINUE</button>
        <button onclick={finishScanning}>FINISH</button>
    </div>
</dialog>


<style>
    h1 {
        font-size: 1.2em;
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
