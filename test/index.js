import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

const expect = chai.expect

chai.use(sinonChai);

import errorLog from '../src/index'

describe('Test for npm module error-log', function () {

  it('errorLog should be a function', function () {
    expect(errorLog).to.be.a('function')
  })

  it('errorLog should be a function', function () {
    const spy = sinon.spy(errorLog)
    spy('my error message ...')

    expect(spy).to.be.calledOnce
    expect(spy).to.be.calledWith('my error message ...')
    })
})
