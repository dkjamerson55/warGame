var expect = chai.expect;

describe ('Myfunctions', function (){
    describe('#makeDeck', function(){
        it('should create deck of 52 cards w/ suits, values & faces.', function(){
            var values = [2,3,4,5,6,7,8,9,10,"J","Q", "K", "A"];
            var suits = ["♣", "♥", "♠", "♦"];
            var deck = [];
            
            expect(array).to.have.lengthOf(14);
        });

        it('should throw an error if deck array != 14', ()=>{
            expect(function (){
                makeDeck();
            }).to.throw(Error);
        });
    });
});


/**
 * the mocha chai test will throw an error at the end of the match if you add extra cards to the value [].
 */