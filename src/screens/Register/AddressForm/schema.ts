import * as yup from 'yup';

import {
  INVALID_FORM_MESSAGE,
  MAX_CHAR_MESSAGE,
  MIN_CHAR_MESSAGE,
  REQUIRED_FIELD_MESSAGE,
  VALID_FIELD_MESSAGE,
} from '../../../utils/formHelpers';

export const schema = yup
  .object({
    address: yup.array().of(
      yup.object().shape({
        zipcode: yup
          .string()
          .typeError(INVALID_FORM_MESSAGE)
          .required(REQUIRED_FIELD_MESSAGE)
          .length(8, VALID_FIELD_MESSAGE),
        street: yup
          .string()
          .typeError(INVALID_FORM_MESSAGE)
          .required(REQUIRED_FIELD_MESSAGE),
        number: yup
          .string()
          .typeError(INVALID_FORM_MESSAGE)
          .required(REQUIRED_FIELD_MESSAGE),
        complement: yup
          .string()
          .typeError(INVALID_FORM_MESSAGE)
          .notRequired()
          .min(2, ({ min }) => {
            return `${MIN_CHAR_MESSAGE} ${min} caracteres`;
          })
          .max(25, ({ max }) => {
            return `${MAX_CHAR_MESSAGE} ${max} caracteres`;
          }),
        neighborhood: yup
          .string()
          .typeError(INVALID_FORM_MESSAGE)
          .required(REQUIRED_FIELD_MESSAGE),
        city: yup
          .string()
          .typeError(INVALID_FORM_MESSAGE)
          .required(REQUIRED_FIELD_MESSAGE),
        state: yup
          .string()
          .typeError(INVALID_FORM_MESSAGE)
          .required(REQUIRED_FIELD_MESSAGE),
      })
    ),
  })
  .required();
