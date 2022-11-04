const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('items are shuffled', () => {
        const arr1 = [2, 4, 6, 8, 10, 12]

        expect(shuffleArray(arr1)).not.toEqual(arr1)
    })
    test('have same length', () => {
        const arr2 = [4, 5, 6, 2, 3, 8, 9]

        expect(shuffleArray(arr2)).toHaveLength(7)
    })
    test('same items should still be in the array', () => {
        const arr3 = [12, 3, 453, 354, 5645, 6566]

        expect(shuffleArray(arr3)).toEqual(expect.arrayContaining(arr3))
    })
})