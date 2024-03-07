<script lang="ts">
    import { goto } from "$app/navigation";
    import Scanner from "$lib/Scanner.svelte";
    import { type CodeDetection } from "@pixelverse/strichjs-sdk";

    function onDetected(codeDetections: CodeDetection[]) {
        window.alert(`Scanned code: ${codeDetections[0].data}`);
        goto('/');
    }
</script>

<main class="wrapper">
    <header class="top-bar">
        <h3>Single Barcode Scan</h3>
        <a href="/">EXIT</a>
    </header>

    <Scanner detected={onDetected}></Scanner>
</main>

<style>
</style>
