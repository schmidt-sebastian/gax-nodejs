/**
 * Copyright 2019 Google LLC
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

// Code automatically generated by gapic-generator. DO NOT EDIT
// Copied from gax-nodejs/system-test/fixtures/google-gax-packaging-test-app/test/gapic-v1beta1.js

import * as assert from 'assert';
import * as through2 from 'through2';
import * as EchoClient from '../fixtures/google-gax-packaging-test-app/src/v1beta1/echo_client';

describe('Run unit tests of echo client', () => {
  interface GoogleError extends Error {
    code: number;
  }
  const FAKE_STATUS_CODE = 1;
  const error = new Error() as GoogleError;
  error.code = FAKE_STATUS_CODE;
  const authStub = {
    getRequestHeaders() {
      return {Authorization: 'Bearer SOME_TOKEN'};
    },
  };

  describe('echo', () => {
    it('invokes echo without error', done => {
      const client = new EchoClient({
        auth: authStub,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const content = 'content951530617';
      const expectedResponse = {
        content,
      };

      // Mock Grpc layer
      client._innerApiCalls.echo = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.echo(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes echo with error', done => {
      const client = new EchoClient({
        auth: authStub,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.echo = mockSimpleGrpcMethod(request, null, error);

      client.echo(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('expand', () => {
    it('invokes expand without error', done => {
      const client = new EchoClient({
        auth: authStub,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const content = 'content951530617';
      const expectedResponse = {
        content,
      };

      // Mock Grpc layer
      client._innerApiCalls.expand = mockServerStreamingGrpcMethod(
        request,
        expectedResponse
      );

      const stream = client.expand(request);
      stream.on('data', response => {
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
      stream.on('error', err => {
        done(err);
      });

      stream.write();
    });

    it('invokes expand with error', done => {
      const client = new EchoClient({
        auth: authStub,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.expand = mockServerStreamingGrpcMethod(
        request,
        null,
        error
      );

      const stream = client.expand(request);
      stream.on('data', () => {
        assert.fail();
      });
      stream.on('error', err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });

      stream.write();
    });
  });

  describe('pagedExpand', () => {
    it('invokes pagedExpand without error', done => {
      const client = new EchoClient({
        auth: authStub,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const nextPageToken = '';
      const responsesElement = {};
      const responses = [responsesElement];
      const expectedResponse = {
        nextPageToken,
        responses,
      };

      // Mock Grpc layer
      client._innerApiCalls.pagedExpand = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.responses);
      };

      client.pagedExpand(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.responses);
        done();
      });
    });

    it('invokes pagedExpand with error', done => {
      const client = new EchoClient({
        auth: authStub,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.pagedExpand = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.pagedExpand(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('chat', () => {
    it('invokes chat without error', done => {
      const client = new EchoClient({
        auth: authStub,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const content = 'content951530617';
      const expectedResponse = {
        content,
      };

      // Mock Grpc layer
      client._innerApiCalls.chat = mockBidiStreamingGrpcMethod(
        request,
        expectedResponse
      );

      const stream = client
        .chat()
        .on('data', response => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', err => {
          done(err);
        });

      stream.write(request);
    });

    it('invokes chat with error', done => {
      const client = new EchoClient({
        auth: authStub,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.chat = mockBidiStreamingGrpcMethod(
        request,
        null,
        error
      );

      const stream = client
        .chat()
        .on('data', () => {
          assert.fail();
        })
        .on('error', err => {
          assert(err instanceof Error);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });

      stream.write(request);
    });
  });

  describe('wait', () => {
    it('invokes wait without error', done => {
      const client = new EchoClient({
        auth: authStub,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const content = 'content951530617';
      const expectedResponse = {
        content,
      };

      // Mock Grpc layer
      client._innerApiCalls.wait = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .wait(request)
        .then(responses => {
          const operation = responses[0];
          return operation.promise();
        })
        .then(responses => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it('invokes wait with error', done => {
      const client = new EchoClient({
        auth: authStub,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.wait = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .wait(request)
        .then(responses => {
          const operation = responses[0];
          return operation.promise();
        })
        .then(() => {
          assert.fail();
        })
        .catch(err => {
          assert(err instanceof Error);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });

    it('has longrunning decoder functions', () => {
      const client = new EchoClient({
        auth: authStub,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.wait.responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.wait.metadataDecoder instanceof Function
      );
    });
  });
});

function mockSimpleGrpcMethod(expectedRequest, response, error?) {
  return (actualRequest, options, callback) => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}

function mockServerStreamingGrpcMethod(expectedRequest, response, error?) {
  return actualRequest => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    const mockStream = through2.obj((chunk, enc, callback) => {
      if (error) {
        callback(error);
      } else {
        callback(null, response);
      }
    });
    return mockStream;
  };
}

function mockBidiStreamingGrpcMethod(expectedRequest, response, error?) {
  return () => {
    const mockStream = through2.obj((chunk, enc, callback) => {
      assert.deepStrictEqual(chunk, expectedRequest);
      if (error) {
        callback(error);
      } else {
        callback(null, response);
      }
    });
    return mockStream;
  };
}

function mockLongRunningGrpcMethod(expectedRequest, response, error?) {
  return request => {
    assert.deepStrictEqual(request, expectedRequest);
    const mockOperation = {
      promise() {
        return new Promise((resolve, reject) => {
          if (error) {
            reject(error);
          } else {
            resolve([response]);
          }
        });
      },
    };
    return Promise.resolve([mockOperation]);
  };
}
