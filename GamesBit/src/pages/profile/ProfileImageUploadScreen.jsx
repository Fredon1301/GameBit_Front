import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import httpService from '../../services/httpService';

const ProfileImageUploadScreen = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      uploadImage(result);
    }
  };

  const uploadImage = async (result) => {
    const formData = new FormData();
    formData.append('profileImage', {
      uri: result.uri,
      type: 'image/jpeg',
      name: 'profileImage.jpg',
    });

    try {
      const response = await httpService.createProfile(formData);

      if (response.ok) {
        const data = await response.json();
        console.log('Image uploaded:', data);
      } else {
        console.error('Error uploading image. Server response:', response.status);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <View>
      <Button title="Escolher Imagem" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default ProfileImageUploadScreen;
