
This repo is created using the tutorial instructions here https://developers.sap.com/group.luigi-app.html

## Run first the standalone UI5 app and then run the base luigi application which contains a link to a React app also

### Step 1

```

cd ui5-mf

npm install

npm start

```

Access http://localhost:8086/index.html to see the standalone ui5 application

### Step 2

```
Pre-step: keep "Purchase Order" OData service runnning in 4004 port as it is configured in the manifest.json(repo https://github.wdf.sap.corp/spp/PurchaseOrderCAP)

cd openfe-minimal

npm install

npm run proxy in one window -> to run proxy in 8080

npm start -> to start app in 8081


```

Access http://localhost:8081/index.html to see the standalone fiori elements application


### Step 3

```

cd react-core-mf

npm install

npm run start


```

Access  http://localhost:3000/ to see 3 app links on the side bar

This app is also the base app for the micro front end.
