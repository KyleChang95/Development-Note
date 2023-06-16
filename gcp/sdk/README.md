# GCP SDK

- [GitHub](https://github.com/googleapis/google-cloud-node/tree/main)

## Prepare
1. [Select or create a Cloud Platform project](https://console.cloud.google.com/project)
2. [Enable billing for your project](https://support.google.com/cloud/answer/6293499#enable-billing)
3. [Enable the Google Cloud Resource Manager API API](https://console.cloud.google.com/flows/enableapi?apiid=cloudresourcemanager.googleapis.com)

## Setup authentication with a service account
1. [Create a service account key](https://cloud.google.com/iam/docs/keys-create-delete#creating)
2. Assign [roles/iam.serviceAccountTokenCreator](https://cloud.google.com/docs/authentication/provide-credentials-adc#service-account) to service account
3. [Assign the role required by the SDK](https://cloud.google.com/iam/docs/granting-changing-revoking-access#required-permissions)