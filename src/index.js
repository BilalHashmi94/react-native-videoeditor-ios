// import { NativeModules, Platform } from 'react-native';

// const LINKING_ERROR =
//   `The package 'react-native-videoeditor-ios' doesn't seem to be linked. Make sure: \n\n` +
//   Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
//   '- You rebuilt the app after installing the package\n' +
//   '- You are not using Expo Go\n';

// // @ts-expect-error
// const isTurboModuleEnabled = global.__turboModuleProxy != null;

// const VideoeditorIosModule = isTurboModuleEnabled
//   ? require('./NativeVideoeditorIos').default
//   : NativeModules.VideoeditorIos;

// const VideoeditorIos = VideoeditorIosModule
//   ? VideoeditorIosModule
//   : new Proxy(
//       {},
//       {
//         get() {
//           throw new Error(LINKING_ERROR);
//         },
//       }
//     );

// export function multiply(a: number, b: number): Promise<number> {
//   return VideoeditorIos.multiply(a, b);
// }

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  NativeEventEmitter,
  NativeModules,
  ActivityIndicator,
} from 'react-native';
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Video from 'react-native-video';
import { showEditor } from 'react-native-video-trim';

const index = forwardRef(({ uri, filters }, ref) => {
  const trimVideoRef = useRef(null);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [paused, setPaused] = useState(false);
  const [trimLoading, setTrimLoding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState(uri);

  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(NativeModules.VideoTrim);
    const subscription = eventEmitter.addListener(
      'VideoTrim',
      async (event) => {
        switch (event.name) {
          case 'onShow': {
            setTrimLoding(false);
            console.warn('onShowListener', event);
            break;
          }
          case 'onHide': {
            console.warn('onHide', event);
            break;
          }
          case 'onStartTrimming': {
            console.warn('onStartTrimming', event);
            break;
          }
          case 'onFinishTrimming': {
            setVideo(event.outputPath);

            // setVideo(newVid.uri);
            console.warn('onFinishTrimming', event);
            break;
          }
          case 'onCancelTrimming': {
            console.warn('onCancelTrimming', event);
            break;
          }
          case 'onError': {
            console.warn('onError', event);
            break;
          }
        }
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  useImperativeHandle(ref, () => ({
    async completeEditing() {
      const res = await trimVideoRef.current.save();
      return res;
    },
  }));

  console.warn('video', video);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        // alignItems: 'center',
        // justifyContent: 'center',
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          // alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        <Video
          key={video.length}
          ref={trimVideoRef}
          filterEnabled={true}
          filter={selectedFilter}
          source={{ uri: video }}
          controls={true}
          // ref={(ref) => {
          //   this.player = ref;
          // }}
          repeat={true}
          paused={paused}
          resizeMode="cover"
          onReadyForDisplay={() => {
            console.log('onReadyForDisplay');
            setLoading(false);
          }}
          onBuffer={() => {
            console.log('onBuffer');
            setLoading(true);
          }}
          onLoad={() => {
            console.log('onLoad');
            setPaused(false);
          }}
          onProgress={async () => {
            console.log('onProgress ==');
            // await trimVideoRef.current.save();
            setLoading(false);
          }}
          onError={() => {
            // alert('Error occured');
          }}
          style={[
            styles.backgroundVideo,
            StyleSheet.absoluteFill,
            // { marginBottom: 120 },
          ]}
        />

        {/* <Text>hello</Text> */}
        {/* <Text>hello</Text> */}
      </View>
      <View
        style={{
          width: '100%',
          paddingVertical: 10,
          backgroundColor: 'black',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          onPress={async () => {
            setTrimLoding(true);
            const newVid = await trimVideoRef.current.save();
            showEditor(newVid.uri);
            // console.warn('show');
          }}
        >
          {trimLoading ? (
            <ActivityIndicator size={'small'} color={'white'} />
          ) : (
            <Image
              source={require('./assets/trim.png')}
              style={{
                resizeMode: 'contain',
                width: 30,
                height: 30,
                tintColor: 'white',
              }}
            />
          )}
          {/* <Ionicons name="cut" size={30} color={'white'} /> */}
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 20 }}>
        <FlatList
          data={filters}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 5,
                }}
              >
                <TouchableOpacity
                  onPress={() => setSelectedFilter(item.type)}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 44 / 2,
                    backgroundColor: item.color,
                    // backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 5,
                  }}
                >
                  {item.icon ? (
                    <Image
                      source={{ uri: item.icon }}
                      style={{
                        resizeMode: 'stretch',
                        width: 44,
                        height: 44,
                        borderRadius: 44 / 2,
                      }}
                    />
                  ) : (
                    <Text>{item.text}</Text>
                  )}
                </TouchableOpacity>
                <Text style={{ color: 'white' }}>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
});

var styles = StyleSheet.create({
  backgroundVideo: {
    // flex: 1,
    backgroundColor: 'black',
    position: 'absolute',
  },
});

export default index;
