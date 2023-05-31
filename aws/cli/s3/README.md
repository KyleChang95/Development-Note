aws s3
===

```bash
# get folder size of s3 bucket
aws s3 ls s3://${path}/ --recursive --human-readable --summarize

# 取的某個資料夾中的物件數量
aws s3 ls s3://aws-cloudtrail-ims-prd-oregon/AWSLogs/948608138159/CloudTrail/us-west-2/2023/05/07/ --recursive | wc -l

# 取得某個資料夾中大小最大的物件
aws s3api list-objects-v2 --bucket 'aws-cloudtrail-ims-prd-oregon' --prefix 'AWSLogs/948608138159/CloudTrail/us-west-2/2023/05/07/' --query 'sort_by(Contents, &Size)[-1].{Key: Key, Size: Size}' --output json
```