import { Colors } from '@/constants/Colors';
import { Platform, StyleSheet } from 'react-native';

const APP_BAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
        padding: 16
    },
    appBar: {
        height: APP_BAR_HEIGHT,
        backgroundColor: Colors.dark.background,
    },
    backButton: { width: 40 },
    keyboardAvoidingView: { flex: 1 }
});
