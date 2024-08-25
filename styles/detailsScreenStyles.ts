import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 16,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    header: {
        marginBottom: 16,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#fff',
        textTransform: 'uppercase',
    },
    detailText: {
        color: '#e0e0e0',
        fontSize: 18,
        marginBottom: 10,
    },
    detailValue: {
        color: Colors.dark.skyBlue,
        fontWeight: 'bold',
    },
    errorText: {
        color: '#f44336',
        fontSize: 16,
        textAlign: 'center',
    },
    graphContainer: {
        marginVertical: 20,
        alignItems: 'center',
    },
    graph: {
        borderRadius: 16,
    },
    detailsContainer: {
        paddingHorizontal: 16,
    },
});
