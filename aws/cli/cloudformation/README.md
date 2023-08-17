AWS CLI - CloudFormation
========================

## List stacks
```bash
aws cloudformation list-stacks

# Print result in table format.
aws cloudformation list-stacks --output table

# Filtering the response.
aws cloudformation list-stacks --output=table --query "StackSummaries[?StackStatus != 'DELETE_COMPLETE'].{StackName:StackName, CreationTime:CreationTime, Status:StackStatus}"
```