class walletManager {
    getWalletByUser(userId) {
        //TODO redis, apache ignite
        var wallet = {
            userId: userId,
            assets: [
                { name: 'tokenA', available: 100, inOrder: 0, address: '', updateTime: new Date() },
                { name: 'tokenB', available: 100, inOrder: 0, address: '', updateTime: new Date() },
                { name: 'tokenC', available: 100, inOrder: 0, address: '', updateTime: new Date() },
            ],    
        };
        return wallet;
    }
}