<script lang="ts">
    import { goto } from "$app/navigation";
    import Scanner from "#lib/Scanner.svelte";
    import { type CodeDetection } from "@pixelverse/strichjs-sdk";

    function onDetected(codeDetections: CodeDetection[]) {
        window.alert(`Scanned code: ${codeDetections[0].data}`);
        goto('/');
    }
</script>

<main class="wrapper">
    <header class="top-bar">
        <h1>Single Barcode Scan</h1>
        <a href="/">EXIT</a>
    </header>

    <Scanner detected={onDetected}></Scanner>
</main>

<style>
    h1 {
        font-size: 1.2em;
    }
</style>
