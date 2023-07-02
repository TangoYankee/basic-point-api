# basic-point-map
Node HTTP api to serve a single geojson point to a leaflet client

## Local setup instructions

### API setup
- Navigate to api directory: `cd api`
- Install Node version listed in [.nvmrc file](/api/.nvmrc)
    - (Recommend managing node versions with [nvm](https://github.com/nvm-sh/nvm))
    - If using `nvm`, run `nvm install` to use correct node version 
- Start the api server: `npm run start:dev`

### Client setup
- Copy the full path to the `index.html` file within the `client` directory
- Paste the full path into a web browser
