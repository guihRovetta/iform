import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import React, { useState } from 'react';
import DateTimePickerModal, {
  DateTimePickerProps,
  ReactNativeModalDateTimePickerProps,
} from 'react-native-modal-datetime-picker';

import ErrorMessage from '../ErrorMessage';
import {
  CalendarIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '../FormFieldStatusIcons/styles';
import Label from '../Label';
import { Container, PlaceholderDate, SelectedDate } from './styles';

type Props = Omit<DateTimePickerProps, 'onConfirm' | 'onCancel'> &
  Readonly<
    Omit<ReactNativeModalDateTimePickerProps, 'onConfirm' | 'onCancel'>
  > & {
    label: string;
    touched?: boolean;
    error?: string;
    placeholder: string;
    dateFormat?: string;
    disabled?: boolean;
  };

const DateTimeInput = ({
  label,
  touched = false,
  error,
  placeholder,
  dateFormat = 'dd/MM/yyyy',
  disabled = false,
  ...rest
}: Props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = (newDate: Date) => {
    setDatePickerVisibility(false);
    rest?.onChange(newDate);
    if (newDate) {
      setFormattedDate(format(newDate, dateFormat, { locale: ptBR }));
    }
  };

  const handleConfirm = (newDate: Date) => {
    hideDatePicker(newDate);
  };

  return (
    <>
      <Label>{label}</Label>

      <Container
        formStatus={
          touched && error ? 'error' : touched && !error ? 'success' : 'normal'
        }
        onPress={showDatePicker}
        disabled={disabled}
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
        isVisible={isDatePickerVisible && !disabled}
        mode={rest?.mode ? rest?.mode : 'date'}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        cancelTextIOS={rest?.cancelTextIOS ? rest?.cancelTextIOS : 'Cancelar'}
        confirmTextIOS={
          rest?.confirmTextIOS ? rest?.confirmTextIOS : 'Confirmar'
        }
        locale="pt-BR"
        {...rest}
      />
    </>
  );
};

export default DateTimeInput;
