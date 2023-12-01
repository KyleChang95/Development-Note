# AWS CLI

## How login SSO
 - Install [AWS CLI v2](https://docs.aws.amazon.com/zh_tw/cli/latest/userguide/getting-started-install.html)
 - Configure SSO profile (~/.aws/config) or use `aws configure sso`.
    ```lni
    [profile prd]
    region = us-west-2
    output = json
    sso_session = kyle-sso
    sso_account_id = {account-id}
    sso_role_name = {role-name}
    sso_region = {sso-region}
    sso_start_url = {sso-start-url}
    ``` 
 - Login SSO
    ```bash
    aws sso login --profile prd
    ```
