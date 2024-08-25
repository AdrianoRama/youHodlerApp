import { makeAutoObservable } from 'mobx';
import { ICrypto } from '@/interfaces/ICrypto';
import axios from 'axios';

class CryptoStore {
    cryptos: ICrypto[] = [];
    loading: boolean = false;
    error: string | null = null;
    searchQuery: string = '';
    sortBy: 'rate' | 'diff24h' | null = 'rate';
    expandedId: string | null = null;
    selectedItem: ICrypto | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchCryptos() {
        this.loading = true;
        try {
            const response = await axios.get('https://app.youhodler.com/api/v3/rates/extended');
            const data = response.data?.['ada'];

            const cryptosArray: ICrypto[] = Object.keys(data).map(key => ({
                id: key,
                symbol: key,
                rate: parseFloat(data[key]?.rate) || 0,
                ask: parseFloat(data[key]?.ask) || 0,
                bid: parseFloat(data[key]?.bid) || 0,
                diff24h: parseFloat(data[key]?.diff24h) || 0,
            }));

            this.cryptos = cryptosArray.filter(crypto => crypto.rate > 0);
        } catch (error) {
            console.error('Error fetching cryptos:', error);
            this.error = 'Failed to load cryptocurrency data.';
        } finally {
            this.loading = false;
        }
    }

    setSearchQuery(query: string) {
        this.searchQuery = query;
    }

    setSortBy(criteria: 'rate' | 'diff24h' | null) {
        this.sortBy = criteria;
    }

    toggleExpand(id: string) {
        this.expandedId = this.expandedId === id ? null : id;
    }

    selectItem(item: ICrypto) {
        this.selectedItem = item;
    }

    get filteredCryptos() {
        return this.cryptos
            .filter(crypto => crypto.symbol.toLowerCase().includes(this.searchQuery.toLowerCase()))
            .sort((a, b) => {
                if (this.sortBy === 'rate') return b.rate - a.rate;
                if (this.sortBy === 'diff24h') return b.diff24h - a.diff24h;
                return 0;
            });
    }
}

export const cryptoStore = new CryptoStore();
