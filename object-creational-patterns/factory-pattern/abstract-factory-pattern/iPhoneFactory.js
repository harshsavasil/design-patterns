const iPhoneXR = require('../factory-pattern/iPhoneXR');
const iPhoneXS = require('../factory-pattern/iPhoneXS');

class iPhoneFactory {
     create(type, serialNumber) {
        switch(type) {
            case 'iPhone Xr':
                return new iPhoneXR(serialNumber);
            case 'iPhone Xs':
                return new iPhoneXS(serialNumber);
            default:
                console.log('Unknown iPhone type');
        }
    }
}

module.exports = new iPhoneFactory();