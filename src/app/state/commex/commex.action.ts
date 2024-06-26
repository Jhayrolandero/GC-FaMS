import { createAction, props } from "@ngrx/store";
import { CommunityExtension } from "../../services/Interfaces/community-extension";

export const getCommex = createAction('[Commex] Fetch Commex',
props<{ refresh: boolean }>()
)

export const getCommexSuccess = createAction('[Commex] Fetch Commex Success',
  props<{ commexs: CommunityExtension[] }>()
)

export const getCommexFailure = createAction('[Commex] Fetch Commex Failure',
  props<{ error: string }>()
)
export const setLoading = createAction('[Commex] Set Load',
  props<{ status: boolean }>()
)

export const getCollegeCommex = createAction('[College Commex] Fetch Commex',
  props<{ uri: string, refresh: boolean }>()
)
export const getCollegeCommexSuccess = createAction('[College Commex] Fetch Commex Success',
  props<{ commexs: CommunityExtension[] }>()
)

export const getCollegeCommexFailure = createAction('[College Commex] Fetch Commex Failure',
  props<{ error: string }>()
)

export const setCollegeLoading = createAction('[College Commex] Set Load',
  props<{ status: boolean }>()
)

export const postCommex = createAction('[Commex] Post Commex',
  props<{ commex: FormData }>()
)

export const postCommexSuccess = createAction('[Commex] Post Commex Success',
  props<{ commex: CommunityExtension }>()
)

export const postCommexFailure = createAction('[Commex] Post Commex Failure',
  props<{ error: string }>()
)

export const editCommex = createAction('[Commex] Edit Commex',
  props<{ commex: any, commex_ID: number }>()
)

export const editCommexSuccess = createAction('[Commex] Edit Commex Success')

export const editCommexFailure = createAction('[Commex] Edit Commex Failure',
  props<{ error: string }>()
)

export const deleteCommex = createAction('[Commex] Delete Commex',
  props<{ commex_ID: number, view: 'college' | 'faculty' }>()
)

export const deleteCommexSuccess = createAction('[Commex] Delete Commex Success',
  props<{ commex_ID: number }>()
)

export const deleteCommexFailure = createAction('[Commex] Delete Commex Failure',
  props<{ error: string }>()
)

export const deleteCollegeCommexSuccess = createAction('[College Commex] Delete Commex Success',
  props<{ commex_ID: number }>()
)

export const deleteCollegeCommexFailure = createAction('[College Commex] Delete Commex Failure',
  props<{ error: string }>()
)

export const flushCommexState = createAction('[Commex] Flush Commex');
export const flushCollegeCommexState = createAction('[College Commex] Flush College Commex');
