import React from 'react'
import { KeyboardAvoidingView, Platform, StatusBar, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { IScreenWrapper } from '../../interfaces/IScreenWrapper'
import styles from './styles'

export default function ScreenWrapper({ children, backButton, onPressBack }: IScreenWrapper) {

    const goBack = () => router.back()

    return (
        <View style={styles.container}>
            <StatusBar barStyle='default' />
            <View style={styles.appBar} />
            {backButton && <TouchableOpacity style={styles.backButton}>
                <Ionicons size={30} name='arrow-back' onPress={onPressBack || goBack} color={Colors.dark.skyBlue} />
            </TouchableOpacity>}
            <KeyboardAvoidingView
                enabled
                behavior={Platform.select({
                    ios: undefined || 'padding',
                    android: 'padding',
                })}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 100}
                style={styles.keyboardAvoidingView}
            >
                {children}
            </KeyboardAvoidingView>
        </View>
    )
}
