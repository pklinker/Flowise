import { INodeParams, INodeCredential } from '../src/Interface'

class MesaAICredential implements INodeCredential {
    label: string
    name: string
    version: number
    description: string
    inputs: INodeParams[]

    constructor() {
        this.label = 'MESA API'
        this.name = 'mesaAIApi'
        this.version = 1.0
        this.description = 'You can get your API key from the MESA team.'
        this.inputs = [
            {
                label: 'MESA API Key',
                name: 'mesaAIAPIKey',
                type: 'password'
            }
        ]
    }
}

module.exports = { credClass: MesaAICredential }
