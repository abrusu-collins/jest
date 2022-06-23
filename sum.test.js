let sum =require("./sum");
//NB: Teas and it are the same
//it means individual test
//Basic testing
it("should add 1 and 2 to give 3",()=>{
    let result =sum(1,2);
    expect(result).toBe(3)
});

//OR

test("should add 1 and 2 to give 3",()=>{
    let result =sum(1,2);
    expect(result).toBe(3)
});

//describe used to group tests

describe("description of tests",()=>{

    it("must sum up to 5",()=>{

        let result= sum(1,4);
        expect(result).toBe(5);
    });
    test("must sum up to 9",()=>{
        expect(sum(4,5)).toBe(9)
    });

});
//truthy and falsy and not

describe(" must be truthy",()=>{
    let result= sum(1,1);
    it("truthy",()=>{
        expect(result).toBeTruthy();

    })
    //OR
    it("not falsy",()=>{
        expect(result).not.toBeFalsy();

    })})

//toBe vs toEqual