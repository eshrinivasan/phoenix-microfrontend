Luigi.setConfig({
  routing: {
    // uses hash-based navigation if set to true
    useHashRouting: true,
    nodeParamPrefix: '~',
    showModalPathInUrl: true,
    modalPathParam: 'modal',
    skipRoutingForUrlPatterns: [/access_token=/, /id_token=/]
  },
  navigation: {
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: 'http://localhost:8081/index.html',
        loadingIndicator: {
          enabled: false
        },
        children: [
          {
            pathSegment: "products",
            label: "Products - React App",
            icon: "product",
            viewUrl: "/sampleapp.html#/microfrontend/products",
            keepSelectedForChildren: true,
            children: [{
              pathSegment: ':id',
              viewUrl: '/sampleapp.html#/microfrontend/productDetail/:id',
              context: { id: ':id' }
            }]
          },
          {
            pathSegment: 'order',
            label: 'Order History - UI5 App',
            icon: 'history',
            viewUrl: 'http://localhost:8086/index.html'
          },
          {
            viewUrl: 'http://localhost:8081/index.html',
            pathSegment: 'list-report',
            loadingIndicator: { enabled: false },
            label: 'SAP Fiori elements'
          },
          {
            viewUrl: 'http://localhost:4200/index.html',
            pathSegment: 'ng-list-report',
            loadingIndicator: { enabled: false },
            label: '(ANG)SAP Fiori elements'
          },
          // {
          //   pathSegment: 'sample1',
          //   label: 'First',
          //   icon: 'nutrition-activity',
          //   viewUrl: '/sampleapp.html/#/microfrontend/sample1'
          // },
          // {
          //   pathSegment: 'sample2',
          //   label: 'Second',
          //   icon: 'paper-plane',
          //   viewUrl: '/sampleapp.html/#/microfrontend/sample2'
          // },
          // {
          //   category: { label: 'Links', icon: 'cloud' },
          //   label: 'Luigi Project',
          //   externalLink: {
          //     url: 'https://luigi-project.io/'
          //   }
          // },
          // {
          //   category: 'Links',
          //   label: 'React.js',
          //   externalLink: {
          //     url: 'https://reactjs.org/'
          //   }
          // }
        ]
      }
    ]
  },
  settings: {
    header: {
      title: 'Home',
      logo: 'sap-logo.png'
    },
    responsiveNavigation: 'simpleMobileOnly',
    customTranslationImplementation: myTranslationProvider,
  },
  lifecycleHooks: {
    luigiAfterInit: () => {
      Luigi.i18n().setCurrentLocale(defaultLocale);
    },
  },
  communication: {
    customMessagesListeners: {
      "set-language": (msg) => {
        Luigi.i18n().setCurrentLocale(msg.locale);
      },
    },
  },
});

var defaultLocale = "en-US";
function myTranslationProvider() {
  var dict = {
    "en-US": { PRODUCTS: "Products", ORDERHISTORY: "Order History", SAPFE : 'SAP Fiori elements' },
  };
  return {
    getTranslation: function (label, interpolation, locale) {
      const local = locale || Luigi.i18n().getCurrentLocale() || defaultLocale
      return (
        dict[local][label] || label
      );
    },
  };
}