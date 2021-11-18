import { sub } from 'date-fns';
import * as yup from 'yup';

import {
  EIGHTEEN_YEARS_DATE_MESSAGE,
  HUNDRED_YEARS_DATE_MESSAGE,
  INVALID_FORM_MESSAGE,
  MAX_CHAR_MESSAGE,
  MIN_CHAR_MESSAGE,
  NAME_REGEX,
  REQUIRED_FIELD_MESSAGE,
  VALID_FIELD_MESSAGE,
} from '../../../utils/formHelpers';

const TODAY_DATE = new Date();
const EIGHTEEN_YEARS_DATE = sub(TODAY_DATE, { years: 18 });
const HUNDRED_YEARS_DATE = sub(TODAY_DATE, { years: 100 });

export const schema = yup
  .object({
    name: yup
      .string()
      .typeError(INVALID_FORM_MESSAGE)
      .required(REQUIRED_FIELD_MESSAGE)
      .matches(NAME_REGEX, VALID_FIELD_MESSAGE)
      .min(3, ({ min }) => {
        return `${MIN_CHAR_MESSAGE} ${min} caracteres`;
      })
      .max(25, ({ max }) => {
        return `${MAX_CHAR_MESSAGE} ${max} caracteres`;
      }),
    dateOfBirth: yup
      .date()
      .typeError(INVALID_FORM_MESSAGE)
      .required(REQUIRED_FIELD_MESSAGE)
      .max(EIGHTEEN_YEARS_DATE, EIGHTEEN_YEARS_DATE_MESSAGE)
      .min(HUNDRED_YEARS_DATE, HUNDRED_YEARS_DATE_MESSAGE),
    cellphone: yup
      .string()
      .typeError(INVALID_FORM_MESSAGE)
      .required(REQUIRED_FIELD_MESSAGE)
      .length(11, VALID_FIELD_MESSAGE),
    cpf: yup
      .string()
      .typeError(INVALID_FORM_MESSAGE)
      .required(REQUIRED_FIELD_MESSAGE)
      .length(11, VALID_FIELD_MESSAGE),
    maritalStatus: yup
      .string()
      .typeError(INVALID_FORM_MESSAGE)
      .required(REQUIRED_FIELD_MESSAGE),
    avatar: yup.object().shape({
      uri: yup
        .string()
        .typeError(INVALID_FORM_MESSAGE)
        .required(REQUIRED_FIELD_MESSAGE),
      base64: yup
        .string()
        .typeError(INVALID_FORM_MESSAGE)
        .required(REQUIRED_FIELD_MESSAGE),
    }),
  })
  .required();
