import sinon from 'auto-release-sinon';
import expect from 'expect.js';
import ngMock from 'ngMock';

import StubbedSearchSourceProvider from 'fixtures/stubbed_search_source';

import SegmentedRequestProvider from '../segmented';

describe('ui/courier/fetch/request/segmented/_createQueue', () => {

  let Promise;
  let $rootScope;
  let SegmentedReq;
  let MockSource;

  require('testUtils/noDigestPromises').activateForSuite();

  beforeEach(ngMock.module('kibana'));
  beforeEach(ngMock.inject((Private, $injector) => {
    Promise = $injector.get('Promise');
    $rootScope = $injector.get('$rootScope');
    SegmentedReq = Private(SegmentedRequestProvider);

    MockSource = class {
      constructor() {
        return $injector.invoke(StubbedSearchSourceProvider);
      }
    };
  }));

  it('manages the req._queueCreated flag', async function () {
    const req = new SegmentedReq(new MockSource());
    req._queueCreated = null;

    const promise = req._createQueue();
    expect(req._queueCreated).to.be(false);
    await promise;
    expect(req._queueCreated).to.be(true);
  });

  it('relies on indexPattern.toDetailedIndexList to generate queue', async function () {
    const source = new MockSource();
    const ip = source.get('index');
    const indices = [1,2,3];
    sinon.stub(ip, 'toDetailedIndexList').returns(Promise.resolve(indices));

    const req = new SegmentedReq(source);
    const output = await req._createQueue();
    expect(output).to.equal(indices);
  });

  it('tells the index pattern its direction', async function () {
    const source = new MockSource();
    const ip = source.get('index');
    const req = new SegmentedReq(source);
    sinon.stub(ip, 'toDetailedIndexList').returns(Promise.resolve([1,2,3]));

    req.setDirection('asc');
    await req._createQueue();
    expect(ip.toDetailedIndexList.lastCall.args[2]).to.be('asc');

    req.setDirection('desc');
    await req._createQueue();
    expect(ip.toDetailedIndexList.lastCall.args[2]).to.be('desc');
  });
});
