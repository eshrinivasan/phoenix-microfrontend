
This repo is created using the tutorial instructions here https://developers.sap.com/group.luigi-app.html

## Run first apps in Step 1, 2, 3 and then run the base luigi application

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
cd angular-mf

npm install

npm run start

```
Access http://localhost:4200/index.html to see standalone angular application


### Step 4

```

cd react-core-mf

npm install

npm run start


```


To see Luigi in action, Access  http://localhost:3000/ to see app links on the side bar
Note: This app is also the base app(in React) for the micro front end.
