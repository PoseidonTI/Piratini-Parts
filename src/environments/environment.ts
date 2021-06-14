// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { homolog } from './environment.homolog';
import { prod } from './environment.prod';
import { local } from './environment.local';

export const environment = {
  local: true,
  production: false,
  homolog: false,
  api: '',
};

if (environment.local) {
  environment.api = local.api;
  // environment.consultaHoteis = local.consultaHoteis;
} else if (environment.homolog) {
  environment.api = homolog.api;
  // environment.consultaHoteis = homolog.consultaHoteis;
} else if (environment.production) {
  environment.api = prod.api;
  // environment.consultaHoteis = prod.consultaHoteis;
}
