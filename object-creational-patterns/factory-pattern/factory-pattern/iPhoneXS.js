const Phone = require('../Phone');

class iPhoneXS {
    constructor(serialNumber) {
        return new Phone({
            serialNumber,
            model: 'iPhone XS',
            processor: 'A13 Bionic',
            ram: '4 GB',
            width: 85.7,
            height: 155.9,
            depth: 6.3,
            resolution: '1024 * 1440',
        });
    }
}

module.exports = iPhoneXS;