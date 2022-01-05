import React, { createRef, useRef, useState } from 'react';
import { TextInput } from 'react-native';

import FormFieldWrapper from '../FormFieldWrapper';
import Input from '../Input';
import Label from '../Label';
import { Container, InputWrapper } from './styles';

type Props = {
  length: number;
  onChangeValue: (inputArray: string[]) => void;
};

const CodeInputGroup = ({ length, onChangeValue }: Props) => {
  const generatedArray = Array.from({ length }, (_) => '');
  const inputRefsArray = useRef<React.RefObject<TextInput>[]>(
    generatedArray?.map(() => createRef())
  );

  const [codeGroup, setCodeGroup] = useState<string[]>(generatedArray);

  const handleChangeText = (inputValue: string, index: number) => {
    const newArray = [...codeGroup];
    newArray?.splice(index, 1, inputValue);
    setCodeGroup(newArray);
    onChangeValue(newArray);
    if (inputValue) handleFocusNextInput(index);
  };

  const handleFocusNextInput = (index: number) => {
    const nextInputIndex = index + 1;
    if (nextInputIndex < length) {
      inputRefsArray?.current[index + 1]?.current?.focus();
    }
  };

  return (
    <FormFieldWrapper>
      <Label>{`Informe o código de ${length} digitos que você recebeu`}</Label>
      <Container>
        {generatedArray?.map((_, index) => (
          <InputWrapper key={`code-input-${index}`}>
            <Input
              onChangeText={(inputValue) => handleChangeText(inputValue, index)}
              keyboardType="number-pad"
              maxLength={1}
              ref={inputRefsArray?.current[index]}
              textAlign="center"
            />
          </InputWrapper>
        ))}
      </Container>
    </FormFieldWrapper>
  );
};

export default CodeInputGroup;
