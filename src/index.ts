require('./overwriteAwsLocalEndpoint'); //overwrite aws local endpoint,Please keep it here.
import { SQSEvent, SQSHandler } from 'aws-lambda';

export const handler: SQSHandler = (event: SQSEvent) => {
  console.log(JSON.stringify(event.Records));
}

