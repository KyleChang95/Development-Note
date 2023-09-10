AWS CLI - EC2
=============

## List instances.
```bash
aws ec2 describe-instances
```

## List instances and only print instance id, Tag: Name, state.

```bash
aws ec2 describe-instances --query "Reservations[].Instances[].[InstanceId, Tags[?Key=='Name'].Value|[0], State.Name]"
```

## Get instance information.
```bash
aws ec2 describe-instances --instance-ids {instance-id}
```

## Start instance.
```bash
aws ec2 start-instances --instance-ids {instance-id}
```

## Stop instance.
```bash
aws ec2 stop-instances --instance-ids {instance-id}
```
