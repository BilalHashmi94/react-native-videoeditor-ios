# react-native-videoeditor-ios

Empower iOS developers to take their video editing capabilities to the next level with our comprehensive React Native npm library. Our package offers a versatile suite of features to crop, trim, add filters, overlay images, text, shapes, and GIFs seamlessly onto videos within your React Native iOS applications. Whether you're building a social media app, a video-sharing platform, or enhancing user-generated content, our library simplifies the integration of advanced video editing functionality, saving you valuable development time and effort.

Key Features:

Video Trimming: Trim videos to achieve the desired length.

Filters and Effects: Apply a wide range of filters and effects to enhance video aesthetics and creativity.

iOS Compatibility: Tailored specifically for iOS applications, ensuring optimal performance and compatibility.

User-Friendly API: Intuitive and well-documented API for easy integration and customization.

Real-time Preview: Enable users to see edits in real-time before finalizing changes.

High-Quality Output: Deliver edited videos in a variety of resolutions and formats while maintaining video quality.

Whether you're building a video editing app, a platform for user-generated content, or simply need to enhance your iOS app with video editing capabilities, our React Native Video Editing Toolkit empowers you to create compelling and engaging video experiences for your users. Get started today and unlock the full potential of video editing in your iOS applications.

In Future Release:

- Image Overlays: Superimpose images onto videos to add logos, watermarks, or visual elements.
- Text Overlays: Embed dynamic text overlays with customizable fonts, colors, and animations to convey messages or captions.
- Shapes and Graphics: Enhance videos with geometric shapes, lines, and custom graphics for creative expression.
- GIF Integration: Seamlessly integrate GIFs into videos to create captivating, dynamic content.
- Android Support

## Installation

```sh
npm install react-native-videoeditor-ios
```

or

```sh
yarn add install react-native-videoeditor-ios
```

```sh
pod install
```

## Usage

```js
import VideoEditor from 'react-native-videoeditor-ios';

// ...

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

// just remove whatever filters you don't want from the array

const videoEditingRef = React.useRef(null); // create ref to save the edited video

await videoEditingRef.current.completeEditing() // call this to save the edited video

<VideoEditor ref={videoEditingRef} uri={video} filters={filters} /> // add video from the gallery or phone camera
```
## Free Palestine
## Save Palesting
## Support Palestine
## Love Palestine
## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
