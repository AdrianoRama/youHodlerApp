import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1f1f1f',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1f1f1f',
    },
    errorText: {
        color: '#f00',
        fontSize: 16,
    },
    headerContainer: {
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 24,
    },
    logo: {
        width: 120,
        height: 80,
        marginBottom: 12,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.dark.skyBlue,
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 18,
        color: '#aaa',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: '#ccc',
        textAlign: 'center',
        marginBottom: 16,
    },
    cryptoItem: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginVertical: 8,
        borderRadius: 8,
        backgroundColor: '#1f1f1f',
    },
    cryptoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cryptoSymbolContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cryptoSymbol: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
    cryptoRateContainer: {
        alignItems: 'flex-end',
    },
    cryptoRate: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.dark.skyBlue,
    },
    cryptoDetails: {
        marginTop: 10,
        paddingLeft: 10,
        borderTopWidth: 1,
        borderTopColor: '#444',
    },
    detailText: {
        color: '#aaa',
        fontSize: 16,
        marginTop: 5,
    },
    moreInfoLink: {
        marginTop: 10,
    },
    moreInfoText: {
        color: '#1e90ff',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
    },
    detailValue: {
        color: Colors.dark.skyBlue,
    },
    searchBar: {
        backgroundColor: '#333',
        color: '#fff',
        padding: 10,
        marginVertical: 10,
        borderRadius: 8,
        width: '100%'
    },
    sortButtonsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    sortButton: {
        padding: 10,
        borderRadius: 8,
    },
    sortButtonText: {
        color: '#fff',
        fontWeight: '600',
    },
});
