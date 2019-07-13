let { should } = require('should')
let assert = require('assert')
// (5).should.be.exactly(5)

describe('Array', function() {
    describe('#indexOf()', function() {
      it('should return -1 when the value is not present', function() {
        assert.equal([1, 2, 3].indexOf(4), -1);
      })
    })
  })

describe('BDD style', function() {
    before(function() {
      // excuted before test suite
    })
  
    after(function() {
      // excuted after test suite
    })
  
    beforeEach(function() {
      // excuted before every test
    })
  
    afterEach(function() {
      // excuted after every test
    })
    
    describe('#example', function() {
      it('this is a test.', function() {
        let a = 22
        a++
        console.log(a)
      })
    })

    describe('#example1', function() {
      it('joonha', function() {
      })
    })
  })