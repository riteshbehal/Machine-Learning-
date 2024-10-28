# Create S3 Bucket

```

$RANDOM_ID = (aws secretsmanager get-random-password `
  --exclude-punctuation `
  --exclude-uppercase `
  --password-length 6 `
  --require-each-included-type `
  --output text `
  --query RandomPassword)

```
`aws s3api create-bucket --bucket demos3bucket-$RANDOM_ID `



# Create Kinesis Stream
`aws kinesis create-stream --stream-name demodatastream --shard-count 1 `

# Validate its creation
`aws kinesis describe-stream-summary --stream-name demodatastream`

# Cleanup
`aws kinesis delete-stream --stream-name demodatastream `

`aws s3api delete-bucket --bucket demos3bucket-$RANDOM_ID `