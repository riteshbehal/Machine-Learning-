# Create Kinesis Stream
`aws kinesis create-stream --stream-name demoawsml --shard-count 1`

# Validate its creation
`aws kinesis describe-stream-summary --stream-name demoawsml`

# Send the record to stream
aws kinesis put-record --stream-name demoawsml `
    --partition-key 111 `
    --cli-binary-format raw-in-base64-out `
    --data '{\"Data\":\"1\"}'

# Validate in Kinesis Data Stream in console

# Cleanup
`aws kinesis delete-stream --stream-name demoawsml`

# SHARDS
Each Shard --> 5 txns per second for reads, Read rate - 2 MB per second
Write Rate - 1 MB per second - 1000 records per second
