const candies = (children, candy) =>
 {
    const eaten = Math.floor(candy / children);
    return eaten * children;
 };

candies(3, 10);


/**
* Test Suite 
// */
// describe('candies()', () => {
//     it('returns amount of total equal candy to be eaten', () => {
//         // arrange
//         const children = 3;
//         const candy = 10;
        
//         // act
//         const result = candies(children, candy);

//         // log
//         console.log("result: ", result);
        
//         // assert
//         expect(result).toBe(9);
//     });