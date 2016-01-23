'use strict';

import ThreadsGet from '../aws/lambda/ThreadsGet';

export function setup(server) {
  server.route({
    method: 'GET',
    path: '/api/ThreadsGet',
    config: {
      handler: (request, reply) => {
        ThreadsGet.handler(server.getEvent(request), server.getContext(reply));
      }
    }
  });
};
