<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { BarcodeReader, type CodeDetection, type Configuration } from "@pixelverse/strichjs-sdk";
    import { ensureSDKInitialized } from "$lib";

    // callback for other components/pages
    export let detected: (detections: CodeDetection[]) => void | undefined;

    let hostElement: HTMLElement;
    let barcodeReader: BarcodeReader | undefined;

    // initialize the BarcodeReader when the component mounts (added to DOM)
    onMount(async () => {
        await ensureSDKInitialized();
        const configuration: Configuration = {
            selector: hostElement,
            engine: {
                symbologies: ['code128', 'qr']
            },
            locator: {
                regionOfInterest: {
                    left: 0.05, right: 0.05, top: 0.3, bottom: 0.3
                }
            }
        }
        barcodeReader = new BarcodeReader(configuration);
        await barcodeReader.initialize();
        barcodeReader.detected = (codeDetections) => {
            if (detected) {
                detected(codeDetections);
            }
        }
        await barcodeReader.start();

        // Normally, it is possible to return a function in onMount() that will be called
        // when the component unmounts. Because were are in an async function, that will
        // not work because async will wrap the returned value in a Promise. Instead, we
        // register an unmount callback explicitly through onDestroy().
    });

    // destroy BarcodeReader when component unmounts
    onDestroy(async () => {
        await barcodeReader?.destroy();
    });

    // export start/stop functions to pause/resume scanning
    export async function start() {
        await barcodeReader?.start();
    }

    export async function stop() {
        await barcodeReader?.stop();
    }
</script>

<div class="barcode-scanner" bind:this={hostElement}>
    <!-- STRICH BarcodeReader instantiated here -->
</div>

<style>
    .barcode-scanner {
        position: relative;
        background-color: black;
        height: 100%;
    }
</style>
