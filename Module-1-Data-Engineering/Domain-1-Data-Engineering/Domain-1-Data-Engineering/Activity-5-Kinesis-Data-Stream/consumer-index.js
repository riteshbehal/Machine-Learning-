import base64
import json

def lambda_handler(event, context):
    print(json.dumps(event))

    for record in event['Records']:
        data = json.loads(base64.b64decode(record['kinesis']['data']).decode('utf-8'))
        print('This is consumer - 1', data)
