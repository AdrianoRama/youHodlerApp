import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { observer } from 'mobx-react-lite';
import { ScreenWrapper } from '@/components';
import { cryptoStore } from '@/stores/CryptoStore';
import { Colors } from '@/constants/Colors';
import detailsScreenStyles from '../styles/detailsScreenStyles';

const DetailsScreen = observer(() => {
    const cryptoDetail = cryptoStore.selectedItem;

    if (!cryptoDetail) {
        return (
            <ScreenWrapper backButton>
                <View style={detailsScreenStyles.container}>
                    <Text style={detailsScreenStyles.errorText}>No details available.</Text>
                </View>
            </ScreenWrapper>
        );
    }

    const simulateData = (change: number) => {
        const baseValue = cryptoDetail.rate;
        return Array.from({ length: 10 }, (_, i) => baseValue + (change * (i - 5)));
    };

    const data = {
        labels: ["0h", "2h", "4h", "6h", "8h", "10h", "12h", "14h", "16h", "18h"],
        datasets: [
            {
                data: simulateData(cryptoDetail.diff24h),
                color: () => '#FF6F00',
                strokeWidth: 3,
            }
        ],
        legend: ["Price Trend"],
    };

    return (
        <ScreenWrapper backButton>
            <ScrollView contentContainerStyle={detailsScreenStyles.scrollContainer}>
                <View style={detailsScreenStyles.header}>
                    <Text style={detailsScreenStyles.title}>{cryptoDetail.symbol.toUpperCase()}</Text>
                </View>
                <View style={detailsScreenStyles.graphContainer}>
                    <LineChart
                        data={data}
                        width={320}
                        height={220}
                        chartConfig={{
                            backgroundGradientFrom: Colors.dark.darkBlue,
                            backgroundGradientTo: Colors.dark.skyBlue,
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            strokeWidth: 3,
                            useShadowColorFromDataset: false,
                        }}
                        bezier
                        style={detailsScreenStyles.graph}
                    />
                </View>
                <View style={detailsScreenStyles.detailsContainer}>
                    <Text style={detailsScreenStyles.detailText}>
                        Rate: <Text style={detailsScreenStyles.detailValue}>${cryptoDetail.rate.toFixed(2)}</Text>
                    </Text>
                    <Text style={detailsScreenStyles.detailText}>
                        Ask: <Text style={detailsScreenStyles.detailValue}>${cryptoDetail.ask.toFixed(2)}</Text>
                    </Text>
                    <Text style={detailsScreenStyles.detailText}>
                        Bid: <Text style={detailsScreenStyles.detailValue}>${cryptoDetail.bid.toFixed(2)}</Text>
                    </Text>
                    <Text style={detailsScreenStyles.detailText}>
                        24h Change: <Text style={detailsScreenStyles.detailValue}>{cryptoDetail.diff24h}%</Text>
                    </Text>
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
});

export default DetailsScreen;
