<script lang="ts">
    import Scanner from "$lib/Scanner.svelte";
    import { type CodeDetection } from "@pixelverse/strichjs-sdk";
    import { goto } from "$app/navigation";

    let codesScanned = 0;
    let data = '';
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
        <h3>Repeated Scans</h3>
        <a href="/">EXIT</a>
    </header>
    <Scanner detected={onDetected} bind:this={scanner}></Scanner>
</main>

<dialog bind:this={confirmScanDialog}>
    <p>You have scanned { codesScanned } barcodes.</p>
    <p>Scanned code: <b>{ data }</b></p>

    <div class="button-bar">
        <button on:click={continueScanning}>CONTINUE</button>
        <button on:click={finishScanning}>FINISH</button>
    </div>
</dialog>


<style>
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
