```plantuml
@startuml
!define AWSPuml https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/v15.0/dist
!include AWSPuml/AWSCommon.puml
!include AWSPuml/AWSSimplified.puml
!include AWSPuml/AWSC4Integration.puml
!include AWSPuml/Groups/AWSCloud.puml
!include AWSPuml/Groups/Region.puml
!include AWSPuml/Groups/AvailabilityZone.puml
!include AWSPuml/GroupIcons/CorporateDataCenter.puml

hide stereotype
skinparam linetype ortho

AWSCloudGroup(cloud) {
    RegionGroup(region, "Region") {
        AvailabilityZoneGroup(az_3, "Availability Zone 3") {
            CorporateDataCenter(datacenter3, "Datacenter", "")
        }
        AvailabilityZoneGroup(az_2, "Availability Zone 2") {
            CorporateDataCenter(datacenter2, "Datacenter", "")
        }
        AvailabilityZoneGroup(az_1, "Availability Zone 1") {
            CorporateDataCenter(datacenter1, "Datacenter", "")
        }
    }
}
@enduml
```
