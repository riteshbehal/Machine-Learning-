FROM public.ecr.aws/lambda/python:3.7

RUN pip3 install --upgrade pip

RUN pip3 install keras_image_helper --no-cache-dir
RUN pip3 install https://raw.githubusercontent.com/manifoldailearning/awsml-certification-content/main/tflite_runtime-2.2.0-cp37-cp37m-linux_x86_64.whl --no-cache-dir
COPY catdog-model.tflite catdog-model.tflite
COPY lambda_function.py lambda_function.py

CMD [ "lambda_function.lambda_handler" ]