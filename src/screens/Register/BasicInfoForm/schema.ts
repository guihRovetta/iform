import * as yup from 'yup';

import {
  MAX_CHAR_MESSAGE,
  MIN_CHAR_MESSAGE,
  NAME_REGEX,
  REQUIRED_FIELD_MESSAGE,
  VALID_FIELD_MESSAGE,
} from '../../../utils/formHelpers';

export const schema = yup
  .object({
    name: yup
      .string()
      .required(REQUIRED_FIELD_MESSAGE)
      .matches(NAME_REGEX, VALID_FIELD_MESSAGE)
      .min(3, ({ min }) => {
        return `${MIN_CHAR_MESSAGE} ${min} caracteres`;
      })
      .max(25, ({ max }) => {
        return `${MAX_CHAR_MESSAGE} ${max} caracteres`;
      }),
  })
  .required();
