import { TokenManager } from '../src/services/TokenManager';

describe('Token manager service tests', () => {
    let tokenManager = new TokenManager();

    //
    beforeEach(() => {
        tokenManager = new TokenManager()
    });

    test("Must generate a valid JWT token", () => {

        const plainText = "testData";
        const token = tokenManager.generate(plainText);

        expect(token).toBeDefined();

        //Checks if the token is valid
        const decodedData = tokenManager.getData(token);

        expect(decodedData).toBe(plainText)
    });

    test("Should throw an error when checking for an invalid token", () => {

        const invalidToken = 'invalidToken'

        expect(() => {
            tokenManager.getData(invalidToken);
        }).toThrow()
    });

})