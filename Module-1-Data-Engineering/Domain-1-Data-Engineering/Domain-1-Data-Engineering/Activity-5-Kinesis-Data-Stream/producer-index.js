import json
import boto3
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger()

# Initialize AWS clients
s3 = boto3.client('s3', region_name='us-east-1')
kinesis = boto3.client('kinesis', region_name='us-east-1')

def lambda_handler(event, context):
    logger.info(json.dumps(event))

    bucket_name = event['Records'][0]['s3']['bucket']['name']
    key_name = event['Records'][0]['s3']['object']['key']

    try:
        data = s3.get_object(Bucket=bucket_name, Key=key_name)
        data_string = data['Body'].read().decode('utf-8')

        payload = {
            'data': data_string
        }

        send_to_kinesis(payload, key_name)

    except Exception as e:
        logger.error(e)

def send_to_kinesis(payload, partition_key):
    params = {
        'Data': json.dumps(payload),
        'PartitionKey': partition_key,
        'StreamName': 'demo-data-stream'
    }

    try:
        response = kinesis.put_record(**params)
        logger.info(response)
    except Exception as e:
        logger.error(e)
