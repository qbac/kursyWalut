export class ExchangeService {
    
    supportedCurrency = ['EUR', 'GBP', 'USD'];

    private exchangeRates = {
        'USD/GBP':0.70,
        'USD/EUR':1.30,
        'EUR/USD':1.10,
        'GBP/EUR':1.24,
        'GBP/USD':1.42
    }

    getExchangeRate(baseCurrency: string, targetCurrency: string){
        return this.exchangeRates[baseCurrency + '/' + targetCurrency];
    }
}