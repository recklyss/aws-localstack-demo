# aws-localstack-demo
A nice demo to guide you to run LocalStack locally.

## Call SNS locally to try it

```shell
aws --endpoint-url=http://localhost:4566 sns publish --topic-arn arn:aws:sns:ap-southeast-2:000000000000:demo-topic --region ap-southeast-2 --message "Hello SNS - SQS - Lambda"
```
