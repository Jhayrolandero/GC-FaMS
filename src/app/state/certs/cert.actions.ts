import { createAction, props } from "@ngrx/store";
import { Certifications } from "../../services/Interfaces/certifications";

export const loadCert = createAction('[Certificate Global] Load Certificate');
export const loadCertSuccess = createAction(
    '[Certificate Global] Certificate Load Success',
    props<{ certs: Certifications[] }>()
);
export const loadCertsFailure = createAction(
    '[Certificate Global] Certificate Load Success',
    props<{ error: string }>()
);