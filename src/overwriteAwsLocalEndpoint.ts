import * as AWS from 'aws-sdk';
if (process.env.APP_ENV === 'dev') {
  AWS.config.sns = { endpoint: 'http://localhost:4566' };
  AWS.config.kms = { endpoint: 'http://localhost:4566' };
  AWS.config.cloudwatch = { endpoint: 'http://localhost:4566' };
}