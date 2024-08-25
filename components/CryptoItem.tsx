import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import cryptoScreenStyles from '../styles/cryptoScreenStyles';
import { ICryptoItem } from '@/interfaces/ICryptoItem';
import { observer } from 'mobx-react-lite';

const CryptoItem = observer(({ item, expanded, onPress, href, onPressMoreInfo }: ICryptoItem) => {
    return (
        <Pressable style={cryptoScreenStyles.cryptoItem} onPress={onPress}>
            <View style={cryptoScreenStyles.cryptoRow}>
                <View style={cryptoScreenStyles.cryptoSymbolContainer}>
                    <Text style={cryptoScreenStyles.cryptoSymbol}>{item.symbol.toUpperCase()}</Text>
                </View>
                <View style={cryptoScreenStyles.cryptoRateContainer}>
                    <Text style={cryptoScreenStyles.cryptoRate}>${item.rate.toFixed(2)}</Text>
                </View>
            </View>
            {expanded && (
                <View style={cryptoScreenStyles.cryptoDetails}>
                    <Text style={cryptoScreenStyles.detailText}>Ask: <Text style={cryptoScreenStyles.detailValue}>${item.ask.toFixed(2)}</Text></Text>
                    <Text style={cryptoScreenStyles.detailText}>Bid: <Text style={cryptoScreenStyles.detailValue}>${item.bid.toFixed(2)}</Text></Text>
                    <Text style={cryptoScreenStyles.detailText}>24h Change: <Text style={cryptoScreenStyles.detailValue}>{item.diff24h}%</Text></Text>
                    <Link
                        href={href}
                        style={cryptoScreenStyles.moreInfoLink}
                        onPress={onPressMoreInfo}
                    >
                        <Text style={cryptoScreenStyles.moreInfoText}>More Info</Text>
                    </Link>
                </View>
            )}
        </Pressable>
    );
})

export default CryptoItem;
