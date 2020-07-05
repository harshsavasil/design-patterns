class Phone {
    constructor(props) {
        this.serialNumber = props.serialNumber;
        this.configuration = {
            _model: props.model || 'generic',
            _processor: props.processor || 'generic',
            _ram: props.ram || '2 gb',
            _width: props.width || 67.3,
            _height: props.height || 138.4,
            _depth: props.depth || 7.3,
            _resolution: props.resolution || '750 * 1334'
        };
    }

    dial(number) {
        console.log(`Now Dialing ${number}`);
    }

    displayConfig() {
        console.log(this.configuration);
    }
}

module.exports = Phone;