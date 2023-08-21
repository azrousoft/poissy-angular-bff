// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  host : "http://localhost",
  hostSec : "https://localhost",  
  santePort: 9181,
  statusUrlClientApi: "/api/v1/clients/status",
  statusUrlSanteBff: "/api/v1/sante/public/clients",
  clientUrl: "/api/v1/clients/",
  clientPort: 9082,

  //****************************** */
  contratUrl: "/api/v1/contrats",
  contratPort: 9083,
  contratConsultationUrl:"/api/v1/consultation/contrats/",
  contratPagingConsultationUrl: "/api/v1/consultation/contrats/paging",
  contratSearchConsultationUrl: "/api/v1/consultation/contrats/search",
  //********************************************* */
  elementsPerPage: 15
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
