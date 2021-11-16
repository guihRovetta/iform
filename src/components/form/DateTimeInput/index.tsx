import React, { useState } from 'react';
import DateTimePickerModal, {
  DateTimePickerProps,
} from 'react-native-modal-datetime-picker';

import ErrorMessage from '../ErrorMessage';
import {
  CalendarIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '../FormFieldStatusIcons/styles';
import Label from '../Label';
import { Container, PlaceholderDate, SelectedDate } from './styles';

type Props = DateTimePickerProps & {
  label: string;
  touched?: boolean;
  error?: string;
  placeholder: string;
  formattedDate?: string;
};

const DateTimeInput = ({
  label,
  touched = false,
  error,
  placeholder,
  formattedDate,
  ...rest
}: Props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = (date: Date) => {
    setDatePickerVisibility(false);
    rest?.onChange(date);
  };

  const handleConfirm = (date: Date) => {
    hideDatePicker(date);
  };

  return (
    <>
      <Label>{label}</Label>

      <Container
        formStatus={
          touched && error ? 'error' : touched && !error ? 'success' : 'normal'
        }
        onPress={showDatePicker}
      >
        {formattedDate ? (
          <SelectedDate>{formattedDate}</SelectedDate>
        ) : (
          <PlaceholderDate>{placeholder}</PlaceholderDate>
        )}

        <CalendarIcon name="calendar" />
        {touched && error && <XCircleIcon name="x-circle" />}
        {touched && !error && <CheckCircleIcon name="check-circle" />}
      </Container>

      {touched && error && <ErrorMessage>{error}</ErrorMessage>}

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={rest?.mode ? rest?.mode : 'date'}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        cancelTextIOS={rest?.cancelTextIOS ? rest?.cancelTextIOS : 'Cancelar'}
        confirmTextIOS={
          rest?.confirmTextIOS ? rest?.confirmTextIOS : 'Confirmar'
        }
        locale="pt-BR"
      />
    </>
  );
};

export default DateTimeInput;
