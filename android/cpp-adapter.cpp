#include <jni.h>
#include "react-native-videoeditor-ios.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_videoeditorios_VideoeditorIosModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return videoeditorios::multiply(a, b);
}
