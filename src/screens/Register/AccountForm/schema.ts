import * as yup from 'yup';

import {
  CONFIRM_PASSWORD_FIELD_MESSAGE,
  EMAIL_FIELD_MESSAGE,
  INVALID_FORM_MESSAGE,
  MIN_CHAR_MESSAGE,
  PASSWORD_FIELD_MESSAGE,
  PASSWORD_REGEX,
  REQUIRED_FIELD_MESSAGE,
} from '../../../utils/formHelpers';

export const schema = yup
  .object({
    email: yup
      .string()
      .typeError(INVALID_FORM_MESSAGE)
      .required(REQUIRED_FIELD_MESSAGE)
      .email(EMAIL_FIELD_MESSAGE),
    password: yup
      .string()
      .typeError(INVALID_FORM_MESSAGE)
      .required(REQUIRED_FIELD_MESSAGE)
      .min(6, ({ min }) => {
        return `${MIN_CHAR_MESSAGE} ${min} caracteres`;
      })
      .matches(PASSWORD_REGEX, PASSWORD_FIELD_MESSAGE),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], CONFIRM_PASSWORD_FIELD_MESSAGE),
  })
  .required();
