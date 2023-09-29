import * as React from 'react';

import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import VideoEditor from 'react-native-videoeditor-ios';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [video, setVideo] = React.useState('');
  const videoEditingRef = React.useRef(null);

  const filters = [
    {
      name: 'Original',
      type: '',
      color: 'white',
      icon: '',
      text: 'O',
    },
    {
      name: 'Invert',
      type: 'CIColorInvert',
      color: 'pink',
      icon: 'https://imgv3.fotor.com/images/blog-richtext-image/a-man-surfing-with-different-filter.png', // (optional) add image uri to show as a filter preview
      text: 'I',
    },
    {
      name: 'Mono',
      type: 'CIColorMonochrome', // dont change the type
      color: 'pink',
      icon: '',
      text: 'M',
    },
    {
      name: 'Posterize',
      type: 'CIColorPosterize',
      color: 'pink',
      icon: '',
      text: 'P',
    },
    {
      name: 'False Color',
      type: 'CIFalseColor',
      color: 'pink',
      icon: '',
      text: 'F',
    },
    {
      name: 'Max Gray',
      type: 'CIMaximumComponent',
      color: 'pink',
      icon: '',
      text: 'MC',
    },
    {
      name: 'Min Gray',
      type: 'CIMinimumComponent',
      color: 'pink',
      icon: '',
      text: 'MC',
    },
    {
      name: 'Chrome',
      type: 'CIPhotoEffectChrome',
      color: 'pink',
      icon: '',
      text: 'C',
    },
    {
      name: 'Fade',
      type: 'CIPhotoEffectFade',
      color: 'pink',
      icon: '',
      text: 'F',
    },
    {
      name: 'Instant',
      type: 'CIPhotoEffectInstant',
      color: 'pink',
      icon: '',
      text: 'I',
    },
    {
      name: 'Gray Scale',
      type: 'CIPhotoEffectMono',
      color: 'pink',
      icon: '',
      text: 'EM',
    },
    {
      name: 'Noir',
      type: 'CIPhotoEffectNoir',
      color: 'pink',
      icon: '',
      text: 'N',
    },
    {
      name: 'Process',
      type: 'CIPhotoEffectProcess',
      color: 'pink',
      icon: '',
      text: 'P',
    },
    {
      name: 'Tonal',
      type: 'CIPhotoEffectTonal',
      color: 'pink',
      icon: '',
      text: 'T',
    },
    {
      name: 'Transfer',
      type: 'CIPhotoEffectTransfer',
      color: 'pink',
      icon: '',
      text: 'T',
    },
    {
      name: 'Sapia',
      type: 'CISepiaTone',
      color: 'pink',
      icon: '',
      text: 'S',
    },
  ];

  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      {video ? (
        <>
          <VideoEditor ref={videoEditingRef} uri={video} filters={filters} />
          <TouchableOpacity
            onPress={async () => {
              const res = await videoEditingRef.current.completeEditing();
              console.warn('res', res);
            }}
            style={{
              width: '100%',
              height: 60,
              borderRadius: 10,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>
              Complete Editing
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={{ marginTop: 90 }}>
          <Button
            title="Edit Video"
            onPress={async () => {
              const result = await launchImageLibrary({ mediaType: 'video' });
              console.warn('res', result.assets[0]?.uri);

              setVideo(result.assets[0]?.uri);
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
