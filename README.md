# STRICH SDK SvelteKit sample code

This repository shows to integrate STRICH SDK into a SvelteKit 4 project.
You need a valid license key to run this sample. To get started with STRICH SDK, check out to the [Getting Started](https://docs.strich.io/getting-started.html) guide.

The project was created using `npm create svelte@latest strich-sveltekit-sample`.

## Running the Sample

To start the development server, run `npm install` followed by `npm run dev`. This will start a Vite development server on http://localhost:5173/.

There is a [PDF test sheet](test-sheet.pdf) included in this repository for testing. If you need to create your own barcodes,  use [Barcode.new](https://barcode.new) or an alternative barcode generator.

## Testing with a Smartphone

You are likely developing a smartphone app, and since the development server is only available on localhost, you will have trouble connecting to it.

We recommend using tools like [Ngrok](https://ngrok.com) that expose your local development server on a public address that you can access from your smartphone, see our section [Testing on a Smartphone](https://docs.strich.io/getting-started.html#testing-on-a-smartphone).
