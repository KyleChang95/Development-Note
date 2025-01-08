# CloudWatch agent ([Refs](https://docs.aws.amazon.com/zh_tw/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html))

1. Ensure the EC2 Role has the `CloudWatchAgentServerPolicy` permission
2. Ensure the aws cli is installed
    ```bash
    sudo apt install -y unzip
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
    unzip awscliv2.zip
    sudo ./aws/install
    ```
3. Configure profile for cloudwatch agent
    ```bash
    aws configure --profile AmazonCloudWatchAgent
    ```
4. Install CloudWatch agent
    ```bash
    wget https://amazoncloudwatch-agent.s3.amazonaws.com/ubuntu/amd64/latest/amazon-cloudwatch-agent.deb
    sudo dpkg -i -E ./amazon-cloudwatch-agent.deb
    ```
5. Configure CloudWatch agent
    Edit `/opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json`
    ```json
    {
      "agent": {
        "metrics_collection_interval": 60,
        "run_as_user": "root",
        "region": "ap-northeast-1",
        "hostname": "dify"
      },
      "metrics": {
        "namespace": "Dify",
        "aggregation_dimensions": [
          [
            "InstanceId"
          ]
        ],
        "append_dimensions": {
          "InstanceId": "${aws:InstanceId}"
        },
        "metrics_collected": {
          "disk": {
            "resources": [
              "/"
            ],
            "measurement": [
              "free",
              "total",
              "used",
              "used_percent"
            ],
            "metrics_collection_interval": 60
          },
          "diskio": {
            "resources": [
              "/"
            ],
            "measurement": [
              "read_bytes",
              "write_bytes",
              "read_time",
              "write_time"
            ],
            "metrics_collection_interval": 60
          },
          "mem": {
            "measurement": [
              "free",
              "total",
              "used",
              "used_percent"
            ],
            "metrics_collection_interval": 60
          }
        }
      }
    }
    ```
6. Start CloudWatch agent
    ```bash
    sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c file:/opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json
    ```
