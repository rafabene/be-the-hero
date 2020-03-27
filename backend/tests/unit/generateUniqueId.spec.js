const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
    it('should generate a unique id', () => {
        expect(generateUniqueId()).toHaveLength(8)
    })
})