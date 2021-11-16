import * as ImagePicker from 'expo-image-picker';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';
import React, { useEffect } from 'react';

import ErrorMessage from '../ErrorMessage';
import Label from '../Label';
import {
  AvatarImage,
  CameraIcon,
  Container,
  IconWrapper,
  UserIcon,
} from './styles';

type Props = {
  label: string;
  touched?: boolean;
  error?: string;
  onChange: (result: ImageInfo) => void;
  value?: ImageInfo;
};

const AvatarPicker = ({
  label,
  touched = false,
  error,
  onChange,
  value,
}: Props) => {
  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== 'granted') {
        alert(
          'Desculpe! Precisamos da permissão para poder selecionar a imagem!'
        );
      }
    })();
  }, []);

  const handleSelectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      onChange(result as ImageInfo);
    }
  };

  return (
    <>
      <Label>{label}</Label>

      <Container
        status={
          touched && error ? 'error' : touched && !error ? 'success' : 'normal'
        }
        onPress={handleSelectImage}
      >
        {value ? (
          <AvatarImage source={{ uri: value?.uri }} />
        ) : (
          <UserIcon name="user" />
        )}

        <IconWrapper>
          <CameraIcon name="camera" />
        </IconWrapper>
      </Container>

      {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default AvatarPicker;
