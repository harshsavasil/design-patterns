const iPhoneFactory = require('./iPhoneFactory');

const iPhoneXr = iPhoneFactory.create('iPhone Xr', 'IPXR-0001');
const iPhoneXs = iPhoneFactory.create('iPhone Xs', 'IPXS-0001');

iPhoneXr.displayConfig();
iPhoneXs.displayConfig();
