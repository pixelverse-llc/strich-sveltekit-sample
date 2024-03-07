

<main>
    <header><h2>STRICH SvelteKit Sample</h2></header>
    <p>
        Enabled symbologies: <b>Code 128, QR</b>.
    </p>
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

<style>
    main {
        padding: 16px;
    }
    section {
        margin-top: 16px;
    }
</style>
