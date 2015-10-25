import request from 'superagent';

export function receiveTexts () {
  return request.get('/api/cms');
};