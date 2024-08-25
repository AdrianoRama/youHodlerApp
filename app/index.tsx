import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite';
import { CryptoItem, LoadingScreen, ScreenWrapper } from '@/components';
import { cryptoStore } from '@/stores/CryptoStore';
import cryptoScreenStyles from '../styles/cryptoScreenStyles';
import { Colors } from '@/constants/Colors';

const CryptosScreen = observer(() => {
    useEffect(() => {
        cryptoStore.fetchCryptos();
    }, []);

    const [forceRender, setForceRender] = useState(false);

    const toggleExpand = useCallback((id: string) => {
        cryptoStore.toggleExpand(id);
        setForceRender(prev => !prev);
    }, []);

    if (cryptoStore.error) {
        return (
            <View style={cryptoScreenStyles.errorContainer}>
                <Text style={cryptoScreenStyles.errorText}>{cryptoStore.error}</Text>
            </View>
        );
    }

    return (
        <ScreenWrapper>
            <View style={cryptoScreenStyles.headerContainer}>
                <Image
                    source={require('../assets/images/icon.png')}
                    style={cryptoScreenStyles.logo}
                    resizeMode='contain'
                />
                <Text style={cryptoScreenStyles.title}>Cryptocurrency Rates</Text>
                <Text style={cryptoScreenStyles.description}>
                    Tap on any cryptocurrency to expand and view detailed information.
                </Text>
                <TextInput
                    style={cryptoScreenStyles.searchBar}
                    placeholder="Search..."
                    placeholderTextColor="#888"
                    value={cryptoStore.searchQuery}
                    onChangeText={(text) => cryptoStore.setSearchQuery(text)}
                    clearButtonMode='while-editing'
                />
                <View style={cryptoScreenStyles.sortButtonsContainer}>
                    <TouchableOpacity
                        onPress={() => cryptoStore.setSortBy('rate')}
                        style={[cryptoScreenStyles.sortButton, { backgroundColor: cryptoStore.sortBy === 'rate' ? Colors.dark.skyBlue : '#444' }]}
                    >
                        <Text style={cryptoScreenStyles.sortButtonText}>Sort by Rate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => cryptoStore.setSortBy('diff24h')}
                        style={[cryptoScreenStyles.sortButton, { backgroundColor: cryptoStore.sortBy === 'diff24h' ? Colors.dark.skyBlue : '#444' }]}
                    >
                        <Text style={cryptoScreenStyles.sortButtonText}>Sort by 24h Change</Text>
                    </TouchableOpacity>
                </View>
                <Text onPress={() => cryptoStore.setSortBy(null)} style={cryptoScreenStyles.sortButtonText}>Clear Sorting</Text>
            </View>
            {cryptoStore.loading ? <LoadingScreen /> : <FlatList
                data={cryptoStore.filteredCryptos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CryptoItem
                        item={item}
                        expanded={cryptoStore.expandedId === item.id}
                        onPress={() => toggleExpand(item.id)}
                        href={{
                            pathname: '/detailsScreen',
                        }}
                        onPressMoreInfo={() => cryptoStore.selectItem(item)}
                    />
                )}
                onRefresh={() => cryptoStore.fetchCryptos()}
                refreshing={cryptoStore.loading}
                automaticallyAdjustsScrollIndicatorInsets
            />}
        </ScreenWrapper>
    );
});

export default CryptosScreen;
