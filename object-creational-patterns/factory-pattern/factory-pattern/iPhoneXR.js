const Phone = require('../Phone');

class iPhoneXR {
    constructor(serialNumber) {
        return new Phone({
            serialNumber,
            model: 'iPhone Xr',
            processor: 'A12 Bionic',
            ram: '3 GB',
            width: 75.7,
            height: 150.9,
            depth: 8.3,
            resolution: '828 * 1792',
        });
    }
}

module.exports = iPhoneXR;