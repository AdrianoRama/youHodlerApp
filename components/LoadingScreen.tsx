import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Colors } from '@/constants/Colors';
import cryptoScreenStyles from '../styles/cryptoScreenStyles';

const LoadingScreen = () => {
    return (
        <View style={cryptoScreenStyles.loadingContainer}>
            <ActivityIndicator size="large" color={Colors.dark.skyBlue} />
        </View>
    );
};

export default LoadingScreen;
