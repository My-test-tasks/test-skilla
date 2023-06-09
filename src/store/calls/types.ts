import { FETCH_CALLS_REQUEST, FETCH_CALLS_SUCCESS, FETCH_CALLS_FAILURE } from './actionTypes';

interface IOperator {
  person_name: string;
  person_surname: string;
  person_mango_phone: string;
  duration: string;
  disconnect_reason: string;
}

interface IAbuse {
  date: string;
  person_name: string;
  message: string;
  support_read_status: number;
  support_answer_status: number;
  answers: IAnswer[];
}

interface IAnswer {
  message: string;
  from_support: number;
  support_read_status: number;
  person_read_status: number;
}

interface IResult {
  type: string;
  title: string;
  tooltip: string;
}

export interface ICall {
  id: number;
  partnership_id: string;
  partner_data: {
    id: string;
    name: string;
    phone: string;
  };
  date: string;
  date_notime: string;
  time: number;
  from_number: string;
  from_extension: string;
  to_number: string;
  to_extension: string;
  is_skilla: number;
  status: string;
  record: string;
  line_number: string;
  in_out: number;
  from_site: number;
  source: string;
  errors: string[];
  disconnect_reason: string;
  results: IResult[];
  stages: IOperator[];
  abuse: IAbuse[];
  contact_name: string;
  contact_company: string;
  person_id: number;
  person_name: string;
  person_surname: string;
  person_avatar: string;
}

export interface CallsResponse {
  total_rows: number;
  results: ICall[];
}

export interface CallsState {
  pending: boolean;
  calls: ICall[];
  error: string | null;
}

export interface FetchCallsSuccessPayload {
  calls: ICall[];
}

export interface FetchCallsFailurePayload {
  error: string;
}

export interface FetchCallsRequest {
  type: typeof FETCH_CALLS_REQUEST;
}

export type FetchCallsSuccess = {
  type: typeof FETCH_CALLS_SUCCESS;
  payload: FetchCallsSuccessPayload;
};

export type FetchCallsFailure = {
  type: typeof FETCH_CALLS_FAILURE;
  payload: FetchCallsFailurePayload;
};

export type CallsActions = FetchCallsRequest | FetchCallsSuccess | FetchCallsFailure;
