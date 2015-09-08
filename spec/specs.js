describe('factorial', function(){
    it("is \"1\" if the number is \"0\"", function(){
        expect(factorial(0)).to.equal(1);
    });

    it("returns the product of all whole numbers less than the input number", function(){
        expect(factorial(7)).to.equal(5040);
    });
});
