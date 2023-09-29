#ifdef __cplusplus
#import "react-native-videoeditor-ios.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNVideoeditorIosSpec.h"

@interface VideoeditorIos : NSObject <NativeVideoeditorIosSpec>
#else
#import <React/RCTBridgeModule.h>

@interface VideoeditorIos : NSObject <RCTBridgeModule>
#endif

@end
