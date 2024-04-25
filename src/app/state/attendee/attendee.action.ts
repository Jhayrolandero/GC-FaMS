import { createAction, props } from "@ngrx/store";
import { Dictionary } from "../../services/Interfaces/dictionary";
import { Attendee } from "../../services/Interfaces/attendee";

export const getAttendeeNumber = createAction('[Attendee] Fetch Attendee Number',
  props<{ id: number }>()
)

export const getAttendeeNumberSuccess = createAction('[Attendee] Fetch Attendee Number Success',
  props<{ attendees: Dictionary<number> }>()
)

export const getAttendeeNumberFailure = createAction('[Attendee] Fetch Attendee Number Failure',
  props<{ error: string }>()
)


export const getAttendee = createAction('[Attendee] Fetch Attendee',
  props<{ id: number }>()
)

export const getAttendeeSuccess = createAction('[Attendee] Fetch Attendee',
  props<{ attendees: Dictionary<Attendee[]> }>()
)

export const getAttendeeFailure = createAction('[Attendee] Fetch Attendee',
  props<{ error: string }>()
)
