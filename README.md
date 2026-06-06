# heron-app2

A simple Adobe App Builder sample app with:

- 1 Runtime web action: `hello`
- 1 static webpage that calls the action

## Files

- `/manifest.yml` — App Builder manifest with one runtime action
- `/actions/hello/index.js` — runtime action implementation
- `/web/index.html` — static page for calling the action

## Run tests

```bash
npm test
```

## Deploy action (Adobe App Builder)

Deploy this project using your App Builder tooling/workspace so the `hello` action is exposed as a web action.

## Use the static webpage

1. Open `/web/index.html` in a browser (or serve the `web` folder with any static server).
2. Paste the deployed `hello` web action URL.
3. Optionally provide a `name`.
4. Click **Call runtime action** to invoke the action and view the JSON response.