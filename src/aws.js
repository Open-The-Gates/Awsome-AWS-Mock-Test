const questions = [
  {
    text: "Which set of Amazon S3 features helps to prevent and recover from accidental data loss?",
    options: [
      "Object lifecycle and service access logging.",
      "Object versioning and Multi-factor authentication.",
      "Access controls and server-side encryption.",
      "Website hosting and Amazon S3 policies.",
    ],
    answerId: [1],
    answer: "Object versioning and Multi-factor authentication.",
    explanation:
      "Object versioning allows you to preserve, retrieve, and restore every version of every object stored in S3, which helps to recover from accidental deletions or overwrites. Multi-factor authentication (MFA) adds an extra layer of security to prevent unauthorized access or deletion of objects. The other options, while important for data management and security, do not directly address recovery from accidental data loss in the same way.",
  },
  {
    text: "What is the minimum time Interval for the data that Amazon CloudWatch receives and aggregates?",
    options: [
      "One second.",
      "Five seconds.",
      "One minute.",
      "Three minutes.",
      "Five minutes.",
    ],
    answerId: [2],
    answer: "One minute.",
    explanation:
      "Amazon CloudWatch has a minimum data aggregation interval of one minute for custom metrics. This means CloudWatch aggregates and processes metric data at one-minute intervals. Shorter intervals are not supported, making one minute the minimum interval for monitoring and aggregating data.",
  },
  {
    text: "A user has launched an EC2 instance. The instance got terminated as soon as it was launched. Which of the below mentioned options is not a possible reason for this?",
    options: [
      "The user account has reached the maximum volume limit.",
      "The AMI is missing. It is the required part.",
      "The snapshot is corrupt.",
      "The user account has reached the maximum EC2 instance limit.",
    ],
    answerId: [3],
    answer: "The user account has reached the maximum EC2 instance limit.",
    explanation:
      "The instance being terminated immediately is unlikely to be due to reaching the maximum EC2 instance limit, as this typically results in a failure to launch rather than an immediate termination. Issues like a missing AMI, a corrupt snapshot, or hitting volume limits are more plausible causes for such behavior. Checking the instance launch logs or CloudWatch metrics can provide more insight into the exact cause.",
  },
  {
    text: "Your website is serving on-demand training videos to your workforce. Videos are uploaded monthly in high resolution MP4 format. Your workforce is distributed globally often on the move and using company-provided tablets that require the HTTP Live Streaming (HLS) protocol to watch a video. Your company has no video transcoding expertise and it required you may need to pay for a consultant. How do you implement the most cost-efficient architecture without compromising high availability and quality of video delivery?",
    options: [
      "A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.",
      "Elastic Transcoder to transcode original high-resolution MP4 videos to HLS.",
      "EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.",
      "Amazon S3 to host videos with Lifecycle Management to archive original files to Glacier after a few days. CloudFront to serve HLS transcoded videos from S3.",
      "A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. S3 to host videos with Lifecycle Management to archive all files to Glacier after a few days. CloudFront to serve HLS transcoded videos from Glacier.",
    ],
    answerId: [1],
    answer:
      "Elastic Transcoder to transcode original high-resolution MP4 videos to HLS.",
    explanation:
      "Elastic Transcoder is a fully managed service that simplifies the process of converting video formats, including HLS. It offers a cost-effective and scalable solution without requiring extensive expertise or additional infrastructure management. The other options involve more complex setups with EC2 and EBS or S3 lifecycle management, which might increase costs and management overhead.",
  },
  {
    text: "You are designing an intrusion detection prevention (IDS/IPS) solution for a customer web application in a single VPC. You are considering the options for implementing IDS IPS protection for traffic coming from the Internet. Which of the following options would you consider? (Choose 2 answers)",
    options: [
      "Implement IDS/IPS agents on each Instance running in VPC.",
      "Configure an instance in each subnet to switch its network interface card to promiscuous mode and analyze network traffic.",
      "Implement Elastic Load Balancing with SSL listeners in front of the web applications.",
      "Implement a reverse proxy layer in front of web servers and configure IDS/IPS agents on each reverse proxy server.",
    ],
    answerId: [0, 3],
    answer:
      "Implement IDS/IPS agents on each Instance running in VPC. Implement a reverse proxy layer in front of web servers and configure IDS/IPS agents on each reverse proxy server.",
    explanation:
      "Deploying IDS/IPS agents on each instance ensures that every part of your infrastructure is monitored for malicious activity. Using a reverse proxy with IDS/IPS agents helps to protect the web servers themselves and can analyze traffic before it reaches the internal network. The other options, such as configuring promiscuous mode or using Elastic Load Balancing, do not provide the same level of direct traffic inspection or threat detection.",
  },
  {
    text: "Which of the following are valid statements about Amazon S3? (Choose 2 answers)",
    options: [
      "Amazon S3 provides read-after-write consistency for any type of PUT or DELETE.",
      "Consistency is not guaranteed for any type of PUT or DELETE.",
      "A successful response to a PUT request only occurs when a complete object is saved.",
      "Partially saved objects are immediately readable with a GET after an overwrite PUT.",
      "S3 provides eventual consistency for overwrite PUTS and DELETE.",
    ],
    answerId: [2, 4],
    answer:
      "A successful response to a PUT request only occurs when a complete object is saved. S3 provides eventual consistency for overwrite PUTS and DELETE.",
    explanation:
      "S3 ensures that a PUT request is successful only when the entire object has been saved, and it provides eventual consistency for overwrite PUTS and DELETE operations, meaning there might be a delay before the changes are fully reflected. The other statements are incorrect regarding the consistency model and immediate readability of partially saved objects.",
  },
  {
    text: "How can the domain's zone apex, for example, 'myzoneapexdomain.com', be pointed towards an Elastic Load Balancer?",
    options: [
      "By using an Amazon Route 53 Alias record.",
      "By using an AAAA record.",
      "By using an Amazon Route 53 CNAME record.",
      "By using an A record.",
    ],
    answerId: [0],
    answer: "By using an Amazon Route 53 Alias record.",
    explanation:
      "Amazon Route 53 Alias records allow you to point the apex of a domain (e.g., myzoneapexdomain.com) directly to AWS resources like Elastic Load Balancers. CNAME records are not allowed at the zone apex, and AAAA or A records are not appropriate for this purpose in this context.",
  },
  {
    text: "When should I choose Provisioned IOPS over Standard RDS storage?",
    options: [
      "If you have batch-oriented workloads.",
      "If you use production online transaction processing (OLTP) workloads.",
      "If you have workloads that are not sensitive to consistent performance.",
    ],
    answerId: [1],
    answer:
      "If you use production online transaction processing (OLTP) workloads.",
    explanation:
      "Provisioned IOPS is ideal for workloads requiring high performance and consistent I/O operations, such as production OLTP workloads, where performance is critical. Batch-oriented workloads or those not sensitive to consistent performance might not require the higher performance provided by Provisioned IOPS.",
  },
  {
    text: "Your department creates regular analytics reports from your company's log files. All log data is collected in Amazon S3 and processed by daily Amazon Elastic MapReduce (EMR) jobs that generate daily PDF reports and aggregated tables in CSV format for an Amazon Redshift data warehouse. Which of the following alternatives will lower costs without compromising average performance of the system or data integrity for the raw data?",
    options: [
      "Use reduced redundancy storage (RRS) for all data in S3. Use a combination of Spot Instances and Reserved Instances for Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.",
      "Use reduced redundancy storage (RRS) for PDF and .csv data in S3. Add Spot Instances to EMR jobs. Use Spot Instances for Amazon Redshift.",
      "Use reduced redundancy storage (RRS) for PDF and .csv data in Amazon S3. Add Spot Instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.",
      "Use reduced redundancy storage (RRS) for all data in Amazon S3. Add Spot Instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.",
    ],
    answerId: [2],
    answer:
      "Use reduced redundancy storage (RRS) for PDF and .csv data in Amazon S3. Add Spot Instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.",
    explanation:
      "Using RRS for non-critical data like PDF and CSV files helps reduce storage costs, while Spot Instances for EMR jobs and Reserved Instances for Redshift provide cost savings and performance consistency. Using RRS for all data or Spot Instances for Redshift could impact performance or data durability.",
  },
  {
    text: "Because of the extensibility limitations of striped storage attached to Windows Server, Amazon RDS does not currently support increasing storage on a [...] DB Instance.",
    options: ["SQL Server.", "MySQL.", "Oracle."],
    answerId: [0],
    answer: "SQL Server.",
    explanation:
      "Amazon RDS does not support increasing storage for SQL Server instances due to limitations related to the extensibility of striped storage in Windows Server. MySQL and Oracle do not have this specific restriction. Always check the latest AWS documentation for updates on supported features.",
  },
  {
    text: "In regards to IAM you can edit user properties later, but you cannot use the console to change the [...].",
    options: ["user name.", "password.", "default group."],
    answerId: [0],
    answer: "user name.",
    explanation:
      "In AWS Identity and Access Management (IAM), you can change certain user properties such as passwords and group memberships through the console. However, the username of an IAM user cannot be changed once it has been created. This is a design choice to ensure that IAM user identities are consistent and to avoid issues with dependent policies or permissions. To change a username, you would need to create a new user with the desired username and transfer the necessary permissions.",
  },
  {
    text: "In Amazon EC2 Container Service, are other container types supported?",
    options: [
      "Yes, EC2 Container Service supports any container service you need.",
      "Yes, EC2 Container Service also supports Microsoft container service.",
      "No, Docker is the only container platform supported by EC2 Container Service presently.",
      "Yes, EC2 Container Service supports Microsoft container service and Openstack.",
    ],
    answerId: [2],
    answer:
      "No, Docker is the only container platform supported by EC2 Container Service presently.",
    explanation:
      "Amazon EC2 Container Service (ECS) currently supports Docker containers exclusively. ECS is designed to manage and orchestrate Docker containers, and while it integrates with Docker well, it does not natively support other container runtimes or platforms. AWS Fargate, a compute engine for ECS, also supports Docker containers. For other container types or platforms, you might consider using different services or orchestrators.",
  },
  {
    text: "Content and Media Server is the latest requirement that you need to meet for a client. The client has been very specific about his requirements such as low latency, high availability, durability, and access control. Potentially there will be millions of views on this server and because of 'spiky' usage patterns, operations teams will need to provision static hardware, network, and management resources to support the maximum expected need. The Customer base will be initially low but is expected to grow and become more geographically distributed. Which of the following would be a good solution for content distribution?",
    options: [
      "Amazon S3 as both the origin server and for caching.",
      "AWS Storage Gateway as the origin server and Amazon EC2 for caching.",
      "AWS CloudFront as both the origin server and for caching.",
      "Amazon S3 as the origin server and Amazon CloudFront for caching.",
    ],
    answerId: [3],
    answer: "Amazon S3 as the origin server and Amazon CloudFront for caching.",
    explanation:
      "Amazon S3 is ideal for storing static content like videos or media files due to its durability and scalability. Amazon CloudFront, a content delivery network (CDN), is designed to cache and deliver content with low latency and high availability across the globe. Using S3 as the origin server combined with CloudFront for caching provides a cost-effective solution that meets the requirements for high availability, low latency, and scalability without the need for managing static hardware or network resources.",
  },
  {
    text: "Name the disk storage supported by Amazon Elastic Compute Cloud (EC2)",
    options: [
      "None of these.",
      "Amazon AppStream store.",
      "Amazon SNS store.",
      "Amazon Instance Store.",
    ],
    answerId: [3],
    answer: "Amazon Instance Store.",
    explanation:
      "Amazon EC2 supports several types of disk storage, including Amazon EBS (Elastic Block Store) and Amazon Instance Store. Instance Store provides temporary block-level storage for instances, which is physically attached to the host machine. It is often used for temporary data or cache storage. The other options listed are not relevant disk storage types for EC2 instances.",
  },
  {
    text: "After an Amazon VPC instance is launched, can I change the VPC security groups it belongs to?",
    options: [
      "Only if the tag 'VPC_Change_Group' is true.",
      "Yes. You can.",
      "No. You cannot.",
      "Only if the tag 'VPC Change Group' is true.",
    ],
    answerId: [1],
    answer: "Yes. You can.",
    explanation:
      "In Amazon VPC, you can modify the security groups associated with an EC2 instance after it has been launched. This flexibility allows you to adapt your security posture as needed based on changing requirements or to apply different security rules to instances. Changes to security groups do not require instance restart, and you can apply multiple security groups to an instance as needed.",
  },
  {
    text: "If I want an instance to have a public IP address, which IP address should I use?",
    options: [
      "Elastic IP Address.",
      "Class B IP Address.",
      "Class A IP Address.",
      "Dynamic IP Address.",
    ],
    answerId: [0],
    answer: "Elastic IP Address.",
    explanation:
      "An Elastic IP Address (EIP) is a static, public IP address designed for dynamic cloud computing. Elastic IPs are used to ensure that an EC2 instance can be reached from the internet with a static IP, even if the instance is stopped and restarted. Class A, B, or dynamic IP addresses are not specifically used in the context of AWS EC2 instances for assigning public IP addresses.",
  },
  {
    text: "Amazon RDS supports SOAP only through [...].",
    options: ["HTTP or HTTPS.", "TCP/IP.", "HTTP.", "HTTPS."],
    answerId: [3],
    answer: "HTTPS.",
    explanation:
      "Amazon RDS supports SOAP web services, but they are accessible only through HTTPS. This ensures secure communication between clients and the RDS service. TCP/IP and HTTP are not used for SOAP in this context, and HTTPS provides the necessary encryption and security for transmitting sensitive data.",
  },
  {
    text: "Which of the following services natively encrypts data at rest within an AWS region? (Choose 2 answers)",
    options: [
      "AWS Storage Gateway.",
      "Amazon DynamoDB.",
      "Amazon CloudFront.",
      "Amazon Glacier.",
      "Amazon Simple Queue Service.",
    ],
    answerId: [0, 3],
    answer: "AWS Storage Gateway. Amazon Glacier.",
    explanation:
      "AWS Storage Gateway and Amazon Glacier both support native encryption of data at rest. AWS Storage Gateway provides a hybrid cloud storage service that securely integrates on-premises environments with cloud storage, including encryption capabilities. Amazon Glacier is a low-cost storage service for data archiving and backup with built-in encryption for data at rest. Amazon DynamoDB and SQS offer encryption, but they are not primarily focused on encryption of data at rest within a specific region. Amazon CloudFront is a CDN that does not provide encryption for data at rest but rather for data in transit.",
  },
  {
    text: "Which one of the following can't be used as an origin server with Amazon CloudFront?",
    options: [
      "A web server running in your infrastructure.",
      "Amazon S3.",
      "Amazon Glacier.",
      "A web server running on Amazon EC2 instances.",
    ],
    answerId: [2],
    answer: "Amazon Glacier.",
    explanation:
      "Amazon Glacier is a long-term archival storage service and is not suitable as an origin server for Amazon CloudFront. CloudFront requires origin servers that can serve data quickly, such as Amazon S3 or web servers running on EC2 instances. Amazon Glacier is designed for infrequent access to data and is not intended for use as a live, accessible origin server for a CDN.",
  },
  {
    text: "Select the most correct The device name /dev/sdal (within Amazon EC2) is [...].",
    options: [
      "possible for EBS volumes.",
      "reserved for the root device.",
      "recommended for EBS volumes.",
      "recommended for instance store volumes.",
    ],
    answerId: [1],
    answer: "reserved for the root device.",
    explanation:
      "In Amazon EC2, device names like /dev/sdal are reserved for the root device of an instance. Typically, device names in the /dev/sd* range are associated with instance store volumes. EBS volumes usually use device names in the /dev/xvd* range. Therefore, /dev/sdal is not recommended for EBS volumes and is specifically reserved for the root device.",
  },
  {
    text: "How can I change the security group membership for interfaces owned by other AWS, such as Elastic Load Balancing?",
    options: [
      "By using the service specific console or APICLI commands.",
      "None of these.",
      "Using Amazon EC2 API/CLI.",
      "Using all these methods.",
    ],
    answerId: [0],
    answer: "By using the service specific console or APICLI commands.",
    explanation:
      "To change security group membership for interfaces owned by AWS services like Elastic Load Balancing, you must use the specific service's console or API/CLI commands. AWS services that manage their own resources, such as ELB, require service-specific tools for configuration. The EC2 API/CLI is used primarily for instances and resources directly under EC2 management, not for other AWS service components.",
  },
  {
    text: "You have created a Route 53 latency record set from your domain to a machine in Northern Virginia and a similar record to a machine in Sydney. When a user located in the US visits your domain, he will be routed to",
    options: [
      "Northern Virginia.",
      "Sydney.",
      "Both, Northern Virginia and Sydney.",
      "Depends on the Weighted Resource Record Sets.",
    ],
    answerId: [0],
    answer: "Northern Virginia.",
    explanation:
      "Amazon Route 53 latency-based routing directs user requests to the AWS region that provides the lowest latency for that particular user. Since the user is located in the US, the latency record set for Northern Virginia, which is geographically closer to the user, will offer lower latency compared to Sydney. Route 53 evaluates latency in real time and routes the traffic to the endpoint that responds the fastest, which in this case is Northern Virginia.",
  },
  {
    text: "In the context of MySQL, version numbers are organized as MySQL version = X.Y.Z. What does X denote here?",
    options: [
      "Release level.",
      "Minor version.",
      "Version number.",
      "Major version.",
    ],
    answerId: [3],
    answer: "Major version.",
    explanation:
      "In MySQL versioning, X represents the major version number. This is the primary version identifier that indicates significant changes or new features in the MySQL software. The Y represents the minor version, which indicates smaller updates or new features, while Z represents the patch number for bug fixes or minor improvements. For instance, in version 8.0.22, '8' is the major version.",
  },
  {
    text: "Which one of the below doesn't affect Amazon CloudFront billing?",
    options: [
      "Distribution Type.",
      "Data Transfer Out.",
      "Dedicated IP SSL Certificates.",
      "Requests.",
    ],
    answerId: [0],
    answer: "Distribution Type.",
    explanation:
      "Amazon CloudFront billing is influenced by several factors including data transfer out (the amount of data delivered from CloudFront to end users), the number of requests made to CloudFront, and the use of dedicated IP SSL certificates for secure connections. However, the distribution type itself (whether it is a web or RTMP distribution) does not impact the billing directly. Billing is primarily based on the amount of data transferred, the number of requests, and the use of additional features.",
  },
  {
    text: "Just when you thought you knew every possible storage option on AWS you hear someone mention Reduced Redundancy Storage (RRS) within Amazon S3. What is the ideal scenario to use Reduced Redundancy Storage (RRS)?",
    options: [
      "Huge volumes of data.",
      "Sensitive data.",
      "Non-critical or reproducible data.",
      "Critical data.",
    ],
    answerId: [2],
    answer: "Non-critical or reproducible data.",
    explanation:
      "Reduced Redundancy Storage (RRS) in Amazon S3 is designed for non-critical, reproducible data that does not require the same level of durability as standard storage. RRS provides lower durability compared to standard S3 storage (99.99% vs. 99.999999999%), and is therefore suitable for data that can be easily regenerated or is less critical. For highly important data or data requiring high durability, Amazon S3 Standard or other more robust storage classes should be used.",
  },
  {
    text: "$ aws sqs receive-message –queue-url <https://queue.amazonaws.com/546419318123/Test>",
    options: ["3.", "4.", "2.", "1."],
    answerId: [0],
    answer: "3.",
    explanation:
      "The `receive-message` command in AWS SQS returns up to 10 messages by default per request. However, if you have configured your SQS queue to use a specific visibility timeout or if the queue has received fewer messages, the number of messages returned could be less. The default maximum is 10, but if we are given the number '3' in this context, it suggests that 3 messages were available in the queue.",
  },
  {
    text: "When running my DB Instance as a Multi-AZ deployment, can I use the standby for read or write operations?",
    options: [
      "Yes.",
      "Only with MSSQL based RDS.",
      "Only for Oracle RDS instances.",
      "No.",
    ],
    answerId: [3],
    answer: "No.",
    explanation:
      "In a Multi-AZ deployment in Amazon RDS, the standby instance is used solely for failover purposes and cannot be used for read or write operations. The standby is a replica of the primary database and is kept synchronized with it. Its purpose is to provide high availability by automatically taking over if the primary instance fails. For read operations, you can use Read Replicas, but the standby in a Multi-AZ deployment is not available for this purpose.",
  },
  {
    text: "In the Launch DB Instance Wizard, where can I select the backup and maintenance options?",
    options: [
      "Under DB INSTANCE DETAILS.",
      "Under REVIEW.",
      "Under MANAGEMENT OPTIONS.",
      "Under ENGINE SELECTION.",
    ],
    answerId: [2],
    answer: "Under MANAGEMENT OPTIONS.",
    explanation:
      "During the launch of a new DB instance using the AWS RDS Launch DB Instance Wizard, backup and maintenance options are configured under the 'Management Options' section. This includes settings for automated backups, maintenance windows, and other management-related configurations. The other sections of the wizard are focused on instance details, review of the configurations, and engine-specific selections.",
  },
  {
    text: "What is the network performance offered by the c4.8xlarge instance in Amazon EC2?",
    options: [
      "20 Gigabit.",
      "10 Gigabit.",
      "Very High but variable.",
      "5 Gigabit.",
    ],
    answerId: [1],
    answer: "10 Gigabit.",
    explanation:
      "The c4.8xlarge instance type in Amazon EC2 offers 10 Gigabit network performance. The c4 instances are optimized for compute-intensive tasks and provide a high level of network performance suited for applications that require high throughput and low latency. Other instance types may offer different network performance levels based on their intended use cases and configurations.",
  },
  {
    text: "In Amazon EC2, if your EBS volume stays in the detaching state, you can force the detachment by clicking [...].",
    options: [
      "Force Detach.",
      "Detach Instance.",
      "AttachVolume.",
      "AttachInstance.",
    ],
    answerId: [0],
    answer: "Force Detach.",
    explanation:
      "When an EBS volume remains in the 'detaching' state and does not complete the detachment process, you can forcefully detach it using the 'Force Detach' option. This action will forcibly detach the volume from the instance, which can be necessary if the normal detachment process fails or hangs. The other options listed are not used for managing EBS volume detachment.",
  },
  {
    text: "What does Amazon DynamoDB provide?",
    options: [
      "A predictable and scalable MySQL database.",
      "A fast and reliable PL/SQL database cluster.",
      "A standalone Cassandra database, managed by Amazon Web Services.",
      "A fast, highly scalable managed NoSQL database service.",
    ],
    answerId: [3],
    answer: "A fast, highly scalable managed NoSQL database service.",
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. It is designed to handle large amounts of unstructured data and offers high availability and durability. DynamoDB is not a MySQL, PL/SQL, or Cassandra database but is a NoSQL solution that meets different needs compared to traditional relational databases.",
  },
  {
    text: "Security groups act like a firewall at the instance level, whereas [...] are an additional layer of security that act at the subnet level.",
    options: ["DB Security Groups.", "VPC Security Groups.", "network ACLs."],
    answerId: [2],
    answer: "network ACLs.",
    explanation:
      "In Amazon VPC, security groups act as a virtual firewall for your EC2 instances, controlling inbound and outbound traffic at the instance level. In contrast, network ACLs (Access Control Lists) provide an additional layer of security at the subnet level. They control traffic entering and leaving the subnet and apply to all resources within the subnet, providing broader control compared to security groups.",
  },
  {
    text: "You have been asked to tighten up the password policies in your organization after a serious security breach, so you need to consider every possible security measure. Which of the following is not an account password policy for IAM Users that can be set?",
    options: [
      "Force IAM users to contact an account administrator when the user has allowed his or her password to expire.",
      "A minimum password length.",
      "Force IAM users to contact an account administrator when the user has entered his password incorrectly.",
      "Prevent IAM users from reusing previous passwords.",
    ],
    answerId: [2],
    answer:
      "Force IAM users to contact an account administrator when the user has entered his password incorrectly.",
    explanation:
      "In AWS IAM, password policies can enforce rules such as a minimum password length, preventing password reuse, and requiring users to contact an administrator if their password expires. However, requiring users to contact an administrator after entering a password incorrectly is not a configurable password policy in IAM. The password policies are designed to strengthen security but do not include user interactions for incorrect password entries.",
  },
  {
    text: "Multi-AZ deployment [...] supported for Microsoft SQL Server DB Instances.",
    options: [
      "is not currently.",
      "is as of 2013.",
      "is planned to be in 2014.",
      "will never be.",
    ],
    answerId: [0],
    answer: "is not currently.",
    explanation:
      "As of the latest updates, Amazon RDS Multi-AZ deployments do not support Microsoft SQL Server instances. Multi-AZ deployments are available for certain database engines like MySQL, MariaDB, PostgreSQL, and Oracle, providing high availability and failover support. However, Microsoft SQL Server does not support this feature within Amazon RDS, so it’s essential to look for alternative high availability solutions if using SQL Server.",
  },
  {
    text: "What does Amazon Elastic Beanstalk provide?",
    options: [
      "A scalable storage appliance on top of Amazon Web Services.",
      "An application container on top of Amazon Web Services.",
      "A service by this name doesn't exist.",
      "A scalable cluster of EC2 instances.",
    ],
    answerId: [1],
    answer: "An application container on top of Amazon Web Services.",
    explanation:
      "Amazon Elastic Beanstalk is a Platform-as-a-Service (PaaS) offering that simplifies deploying and managing applications on AWS. It provides an environment for running applications (referred to as application containers) and automatically handles the deployment, from capacity provisioning and load balancing to application health monitoring. It does not provide storage appliances or simply scale EC2 instances; rather, it focuses on application deployment and management.",
  },
  {
    text: "You need to quickly set up an email-sending service because a client needs to start using it in the next hour. Amazon Simple Email Service (Amazon SES) seems to be the logical choice but there are several options available to set it up. Which of the following options to set up SES would best meet the needs of the client?",
    options: [
      "Amazon SES console.",
      "AWS CloudFormation.",
      "SMTP Interface.",
      "AWS Elastic Beanstalk.",
    ],
    answerId: [0],
    answer: "Amazon SES console.",
    explanation:
      "For a quick setup of Amazon Simple Email Service (SES), the Amazon SES console is the best option. It provides a straightforward, user-friendly interface for configuring and managing SES settings. AWS CloudFormation and Elastic Beanstalk can be used for infrastructure setup and application deployment but may be more complex and time-consuming for immediate SES configuration. The SMTP interface is used for sending emails but doesn’t provide the same level of immediate setup and configuration as the console.",
  },
  {
    text: "A user is observing the EC2 CPU utilization metric on CloudWatch. The user has observed some interesting patterns while filtering over the 1 week period for a particular hour. The user wants to zoom that data point to a more granular period. How can the user do that easily with CloudWatch?",
    options: [
      "The user can zoom a particular period by selecting that period with the mouse and then releasing the mouse.",
      "The user can zoom a particular period by specifying the aggregation data for that period.",
      "The user can zoom a particular period by double clicking on that period with the mouse.",
      "The user can zoom a particular period by specifying the period in the Time Range.",
    ],
    answerId: [0],
    answer:
      "The user can zoom a particular period by selecting that period with the mouse and then releasing the mouse.",
    explanation:
      "In Amazon CloudWatch, users can interactively zoom in on specific periods of data by selecting the desired time range directly on the graph. This is done by clicking and dragging the mouse over the desired time range, which then updates the graph to show more granular details for that selected period. This feature allows users to easily examine detailed metrics for specific intervals without having to manually input time ranges or adjust settings.",
  },
  {
    text: "A company is running a batch analysis every hour on their main transactional DB. running on an RDS MySQL instance to populate their central Data Warehouse running on Redshift During the execution of the batch their transactional applications are very slow When the batch completes they need to update the top management dashboard with the new data The dashboard is produced by another system running on-premises that is currently started when a manually-sent email notifies that an update is required The on-premises system cannot be modified because is managed by another team. How would you optimize this scenario to solve performance issues and automate the process as much as possible?",
    options: [
      "Replace RDS with Redshift for the batch analysis and SNS to notify the on-premises system to update the dashboard.",
      "Replace ROS with Redshift for the batch analysis and SQS to send a message to the on-premises system to update the dashboard.",
      "Create an RDS Read Replica for the batch analysis and SNS to notify the on-premises system to update the dashboard.",
      "Create an RDS Read Replica for the batch analysis and SQS to send a message to the on-premises system to update the dashboard.",
    ],
    answerId: [0],
    answer:
      "Replace RDS with Redshift for the batch analysis and SNS to notify the on-premises system to update the dashboard.",
    explanation:
      "To optimize performance and automate the process, replacing RDS with Amazon Redshift for batch analysis would be effective as Redshift is designed for large-scale data analysis and can handle complex queries more efficiently. Using Amazon SNS (Simple Notification Service) to send notifications to the on-premises system can automate the update process for the dashboard. This approach improves performance during batch analysis and ensures timely updates to the management dashboard without manual intervention.",
  },
  {
    text: "You are configuring a new VPC for one of your clients for a cloud migration project, and only a public VPN will be in place. After you created your VPC, you created a new subnet, a new internet gateway, and attached your internet gateway to your VPC. When you launched your first instance into your VPC, you realized that you aren't able to connect to the instance, even if it is configured with an elastic IP. What should be done to access the instance?",
    options: [
      "A route should be created as 0.0.0.0/0 and your internet gateway as target.",
      "Attach another ENI to the instance and connect via new ENI.",
      "A NAT instance should be created and all traffic should be forwarded to NAT instance.",
      "A NACL should be created that allows all outbound traffic.",
    ],
    answerId: [0],
    answer:
      "A route should be created as 0.0.0.0/0 and your internet gateway as target.",
    explanation:
      "To ensure that your EC2 instance in a VPC is accessible from the internet, you need to configure the route table for the subnet to direct traffic to the internet gateway. Specifically, you should create a route with the destination `0.0.0.0/0` and set the internet gateway as the target. This route allows all outbound traffic to the internet and ensures that inbound traffic can reach your instance through the public IP (Elastic IP) assigned to it.",
  },
  {
    text: "You have been asked to build a database warehouse using Amazon Redshift. You know a little about it, including that it is a SQL data warehouse solution, and uses industry standard ODBC and JDBC connections and PostgreSQL drivers. However you are not sure about what sort of storage it uses for database tables. What sort of storage does Amazon Redshift use for database tables?",
    options: [
      "InnoDB Tables.",
      "NDB data storage.",
      "Columnar data storage.",
      "NDB CLUSTER Storage.",
    ],
    answerId: [2],
    answer: "Columnar data storage.",
    explanation:
      "Amazon Redshift uses columnar data storage for database tables. This storage format stores data in columns rather than rows, which is optimized for query performance and allows for more efficient data compression. Columnar storage is particularly effective for analytic queries and large-scale data processing, making Redshift a powerful choice for data warehousing and business intelligence applications.",
  },
  {
    text: "A user has attached 1 EBS volume to a VPC instance. The user wants to achieve the best fault tolerance of data possible. Which of the below mentioned options can help achieve fault tolerance?",
    options: [
      "Attach one more volume with RAID 1 configuration.",
      "Attach one more volume with RAID 0 configuration.",
      "Connect multiple volumes and stripe them with RAID.",
      "Use the EBS volume as a root device.",
    ],
    answerId: [0],
    answer: "Attach one more volume with RAID 1 configuration.",
    explanation:
      "To achieve the best fault tolerance for data with EBS volumes, using RAID 1 (mirroring) configuration is ideal. RAID 1 provides redundancy by duplicating data across multiple volumes, ensuring that if one volume fails, the data remains available on the other. RAID 0, on the other hand, does not provide fault tolerance as it only stripes data across volumes without redundancy. Using EBS volumes as root devices or stripe configurations do not offer the same level of fault tolerance as RAID 1.",
  },
  {
    text: "Which features can be used to restrict access to data in S3? (Choose 2 answers)",
    options: [
      "Set an S3 ACL on the bucket or the object.",
      "Create a CloudFront distribution for the bucket.",
      "Set an S3 bucket policy.",
      "Enable IAM Identity Federation.",
      "Use S3 Virtual Hosting.",
    ],
    answerId: [0, 2],
    answer: [
      "Set an S3 ACL on the bucket or the object.",
      "Set an S3 bucket policy.",
    ],
    explanation:
      "To restrict access to data in Amazon S3, you can use both S3 ACLs (Access Control Lists) and S3 bucket policies. ACLs allow you to set permissions on individual objects and buckets, while bucket policies enable more comprehensive access control at the bucket level. Creating a CloudFront distribution or enabling IAM Identity Federation are not direct methods for restricting S3 data access, and S3 Virtual Hosting pertains to URL formats rather than access control.",
  },
  {
    text: "You are in the process of creating a Route 53 DNS failover to direct traffic to two EC2 zones. Obviously, if one fails, you would like Route 53 to direct traffic to the other region. Each region has an ELB with some instances being distributed. What is the best way for you to configure the Route 53 health check?",
    options: [
      "Route 53 doesn't support ELB with an internal health check. You need to create your own Route 53 health check of the ELB.",
      "Route 53 natively supports ELB with an internal health check. Turn 'Evaluate target health' off and 'Associate with Health Check' on and R53 will use the ELB's internal health check.",
      "Route 53 doesn't support ELB with an internal health check. You need to associate your resource record set for the ELB with your own health check.",
      "Route 53 natively supports ELB with an internal health check. Turn 'Evaluate target health' on and 'Associate with Health Check' off and R53 will use the ELB's internal health check.",
    ],
    answerId: [3],
    answer:
      "Route 53 natively supports ELB with an internal health check. Turn 'Evaluate target health' on and 'Associate with Health Check' off and R53 will use the ELB's internal health check.",
    explanation:
      "Route 53 can integrate with Elastic Load Balancers (ELBs) and use their internal health checks to manage DNS failover. To use this feature, you should enable the 'Evaluate target health' option in Route 53. This setting ensures that Route 53 uses the health status of the ELB’s instances to make routing decisions, rather than requiring a separate Route 53 health check.",
  },
  {
    text: "For each DB Instance class, what is the maximum size of associated storage capacity?",
    options: ["5GB.", "1TB.", "2TB.", "500GB."],
    answerId: [1],
    answer: "1TB.",
    explanation:
      "As of the latest information, the maximum size of associated storage capacity for each DB instance class in Amazon RDS is 1TB. This capacity can vary based on the DB instance class and the specific database engine being used, but 1TB is a common maximum storage limit for many instances.",
  },
  {
    text: "A user is planning a highly available application deployment with EC2. Which of the below mentioned options will not help to achieve HA?",
    options: ["Elastic IP address.", "PIOPS.", "AMI.", "Availability Zones."],
    answerId: [1],
    answer: "PIOPS.",
    explanation:
      "PIOPS (Provisioned IOPS) is a storage option that provides high performance for EBS volumes but does not directly contribute to high availability (HA) for application deployments. Elastic IP addresses, AMIs (Amazon Machine Images), and Availability Zones are components that help achieve HA. Elastic IPs allow for static IP addresses that can be quickly reassigned in case of instance failure, AMIs enable rapid recovery of instances, and deploying across Availability Zones ensures fault tolerance.",
  },
  {
    text: "What does specifying the mapping /dev/sdc=none when launching an instance do?",
    options: [
      "Prevents /dev/sdc from creating the instance.",
      "Prevents /dev/sdc from deleting the instance.",
      "Set the value of /dev/sdc to 'zero'.",
      "Prevents /dev/sdc from attaching to the instance.",
    ],
    answerId: [3],
    answer: "Prevents /dev/sdc from attaching to the instance.",
    explanation:
      "Specifying the mapping `/dev/sdc=none` when launching an instance prevents the device `/dev/sdc` from being attached to the instance. This configuration is used when you want to exclude certain devices from being attached or initialized during instance launch, allowing for more control over the instance’s storage configuration.",
  },
  {
    text: "Which of the following statements is true of tagging an Amazon EC2 resource?",
    options: [
      "You don't need to specify the resource identifier while terminating a resource.",
      "You can terminate, stop, or delete a resource based solely on its tags.",
      "You can't terminate, stop, or delete a resource based solely on its tags.",
      "You don't need to specify the resource identifier while stopping a resource.",
    ],
    answerId: [2],
    answer:
      "You can't terminate, stop, or delete a resource based solely on its tags.",
    explanation:
      "While tagging EC2 resources is a powerful way to organize and manage resources, you cannot directly terminate, stop, or delete an EC2 instance based solely on its tags. Tags are used for categorization and management purposes, but actions like termination or stopping require explicit resource identifiers or commands. Tags help in identifying and managing resources but do not directly control their state or lifecycle.",
  },
  {
    text: "You are deploying an application to collect votes for a very popular television show. Millions of users will submit votes using mobile devices. The votes must be collected into a durable, scalable, and highly available data store for real-time public tabulation. Which service should you use?",
    options: [
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Kinesis",
      "Amazon Simple Queue Service",
    ],
    answerId: [2],
    answer: "Amazon Kinesis",
    explanation:
      "Amazon Kinesis is designed for real-time data streaming and processing, making it ideal for applications that require the collection and processing of large volumes of data in real-time, such as collecting votes from millions of users. It provides a scalable and durable solution for streaming data, which is essential for real-time public tabulation of votes. Amazon DynamoDB is a highly scalable NoSQL database but is more suited for use cases requiring high availability and fast performance for key-value data. Amazon Redshift is used for data warehousing and complex queries, not real-time streaming. Amazon SQS is a message queue service and not ideal for real-time processing of large volumes of data.",
  },
  {
    text: "Are Reserved Instances available for Multi-AZ Deployments?",
    options: [
      "Only for Cluster Compute instances.",
      "Yes for all instance types.",
      "Only for M3 instance types.",
      "No.",
    ],
    answerId: [1],
    answer: "Yes for all instance types.",
    explanation:
      "AWS Reserved Instances can be used with Multi-AZ deployments for all instance types, not limited to specific types or categories. Reserved Instances provide a cost-effective way to reserve capacity and ensure availability while also benefiting from lower prices compared to On-Demand pricing. Multi-AZ deployments ensure high availability and failover support, and Reserved Instances can be applied to instances deployed in this configuration.",
  },
  {
    text: "A [...] for a VPC is a collection of subnets (typically private) that you may want to designate for your backend RDS DB Instances.",
    options: [
      "DB Subnet Set",
      "RDS Subnet Group",
      "DB Subnet Group",
      "DB Subnet Collection",
    ],
    answerId: [2],
    answer: "DB Subnet Group",
    explanation:
      "In AWS, a 'DB Subnet Group' is used to designate a collection of subnets within a VPC that are typically private and intended for use by RDS instances. This grouping ensures that the RDS instances are deployed in subnets that are properly configured for high availability and security. The term 'DB Subnet Group' is specifically used for this purpose, whereas other terms like 'DB Subnet Set' or 'DB Subnet Collection' are not standard AWS terminology.",
  },
  {
    text: "An instance is launched into a VPC subnet with the network ACL configured to allow all inbound traffic and deny all outbound traffic. The instance's security group is configured to allow SSH from any IP address and deny all outbound traffic. What changes need to be made to allow SSH access to the instance?",
    options: [
      "The outbound security group needs to be modified to allow outbound traffic.",
      "The outbound network ACL needs to be modified to allow outbound traffic.",
      "Nothing, it can be accessed from any IP address using SSH.",
      "Both the outbound security group and outbound network ACL need to be modified to allow outbound traffic.",
    ],
    answerId: [1],
    answer:
      "The outbound network ACL needs to be modified to allow outbound traffic.",
    explanation:
      "To enable SSH access to an instance, outbound traffic must be allowed. In this scenario, the network ACL is configured to deny all outbound traffic, which affects the instance's ability to communicate back to the source of the SSH request. While the security group allows inbound SSH traffic, the network ACL must also allow outbound traffic for the SSH session to be established properly. Therefore, modifying the outbound network ACL is necessary to enable SSH access.",
  },
  {
    text: "You can modify the backup retention period; valid values are 0 (for no backup retention) to a maximum of [...] days.",
    options: ["45", "35", "15", "5"],
    answerId: [1],
    answer: "35",
    explanation:
      "For Amazon RDS, the maximum backup retention period you can set is 35 days. This allows you to retain automated backups for up to 35 days, providing sufficient time for point-in-time recovery. Values beyond this are not supported. The backup retention period of 0 means that automated backups are disabled.",
  },
  {
    text: "To serve Web traffic for a popular product your chief financial officer and IT director have purchased 10 m1.large heavy utilization Reserved Instances (RIs) evenly spread across two Availability Zones: Route 53 is used to deliver the traffic to an Elastic Load Balancer (ELB). After several months, the product grows even more popular and you need additional capacity As a result, your company purchases two c3.2xlarge medium utilization RIs You register the two c3.2xlarge instances with your ELB and quickly find that the m1.large instances are at 100% of capacity and the c3.2xlarge instances have significant capacity that's unused Which option is the most cost effective and uses EC2 capacity most effectively?",
    options: [
      "Use a separate ELB for each instance type and distribute load to ELBs with Route 53 weighted round robin.",
      "Configure Autoscaling group and Launch Configuration with ELB to add up to 10 more on-demand m1.large instances when triggered by Cloudwatch shut off c3.2xlarge instances.",
      "Route traffic to EC2 m1.large and c3.2xlarge instances directly using Route 53 latency based routing and health checks shut off ELB.",
      "Configure ELB with two c3.2xlarge Instances and use on-demand Autoscaling group for up to two additional c3.2xlarge instances Shut on m1.large instances.",
    ],
    answerId: [0],
    answer:
      "Use a separate ELB for each instance type and distribute load to ELBs with Route 53 weighted round robin.",
    explanation:
      "Using separate ELBs for each instance type and distributing traffic with Route 53 weighted round robin is the most cost-effective and efficient approach. This method allows you to balance the load more effectively between the different instance types, optimizing the use of available capacity. This approach helps manage the traffic load while ensuring that the new c3.2xlarge instances are utilized properly without disrupting the existing infrastructure. Autoscaling and direct routing methods might not optimize capacity utilization as effectively as using multiple ELBs.",
  },
  {
    text: "An existing application stores sensitive information on a non-boot Amazon EBS data volume attached to an Amazon Elastic Compute Cloud instance. Which of the following approaches would protect the sensitive data on an Amazon EBS volume?",
    options: [
      "Upload your customer keys to AWS CloudHS.",
      "Associate the Amazon EBS volume with AWS CloudHS.",
      "Re-mount the Amazon EBS volume.",
      "Create and mount a new, encrypted Amazon EBS volume. Move the data to the new volume. Delete the old Amazon EBS volume.",
      "Unmount the EBS volume. Toggle the encryption attribute to True. Re-mount the Amazon EBS volume.",
      "Snapshot the current Amazon EBS volume. Restore the snapshot to a new, encrypted Amazon EBS volume. Mount the Amazon EBS volume.",
    ],
    answerId: [3],
    answer:
      "Create and mount a new, encrypted Amazon EBS volume. Move the data to the new volume. Delete the old Amazon EBS volume.",
    explanation:
      "To protect sensitive data on an EBS volume, creating a new, encrypted volume and migrating data to it is the most secure approach. This method ensures that the data is encrypted and the old, unencrypted volume is removed, preventing any potential data leakage. Simply toggling encryption or using snapshots does not fully address the need for secure data storage, as these methods do not encrypt existing data at rest.",
  },
  {
    text: "A user has launched one EC2 instance in the US West region. The user wants to access the RDS instance launched in the US East region from that EC2 instance. How can the user configure the access for that EC2 instance?",
    options: [
      "Configure the IP range of the US West region instance as the ingress security rule of RDS.",
      "It is not possible to access RDS of the US East region from the US West region.",
      "Open the security group of the US West region in the RDS security group's ingress rule.",
      "Create an IAM role which has access to RDS and launch an instance in the US West region with it.",
    ],
    answerId: [0],
    answer:
      "Configure the IP range of the US West region instance as the ingress security rule of RDS.",
    explanation:
      "To allow an EC2 instance in one region to access an RDS instance in another region, you need to configure the RDS security group to allow incoming traffic from the IP range of the EC2 instance. Security groups control access based on IP addresses, so specifying the IP range from the EC2 instance ensures that traffic can be accepted by the RDS instance. IAM roles are not used for this kind of network access configuration.",
  },
  {
    text: "You have been asked to build AWS infrastructure for disaster recovery for your local applications and within that you should use an AWS Storage Gateway as part of the solution. Which of the following best describes the function of an AWS Storage Gateway?",
    options: [
      "Accelerates transferring large amounts of data between the AWS cloud and portable storage devices.",
      "A web service that speeds up distribution of your static and dynamic web content.",
      "Connects an on-premises software appliance with cloud-based storage to provide seamless and secure integration between your on-premises IT environment and AWS's storage infrastructure.",
      "Is a storage service optimized for infrequently used data, or 'cold data'.",
    ],
    answerId: [2],
    answer:
      "Connects an on-premises software appliance with cloud-based storage to provide seamless and secure integration between your on-premises IT environment and AWS's storage infrastructure.",
    explanation:
      "AWS Storage Gateway connects on-premises IT environments with cloud storage, allowing for seamless and secure integration. It supports various storage configurations, including file, volume, and tape gateways, to provide hybrid cloud storage solutions. This service is specifically designed for disaster recovery and data backup by linking on-premises systems with AWS storage services.",
  },
  {
    text: "While creating an Amazon RDS DB, your first task is to set up a DB [...] that controls which IP address or EC2 instance can access your DB Instance.",
    options: [
      "security token pool",
      "security token",
      "security pool",
      "security group",
    ],
    answerId: [3],
    answer: "security group",
    explanation:
      "A 'security group' in Amazon RDS controls access to the DB instance by specifying rules that determine which IP addresses or EC2 instances can connect to it. It acts as a virtual firewall, allowing you to define inbound and outbound traffic rules. Other terms like 'security token pool' or 'security token' are not related to access control for RDS instances.",
  },
  {
    text: "You need to import several hundred megabytes of data from a local Oracle database to an Amazon RDS DB instance. What does AWS recommend you use to accomplish this?",
    options: [
      "Oracle export/import utilities",
      "Oracle SQL Developer",
      "Oracle Data Pump",
      "DBMS_FILE_TRANSFER",
    ],
    answerId: [2],
    answer: "Oracle Data Pump",
    explanation:
      "Oracle Data Pump is a high-performance utility designed for importing and exporting large volumes of data in Oracle databases. It is highly recommended by AWS for moving data to Amazon RDS instances because of its efficiency and support for large datasets. While Oracle export/import utilities and SQL Developer can also be used, Data Pump is specifically optimized for this type of task.",
  },
  {
    text: "In the context of AWS support, why must an EC2 instance be unreachable for 20 minutes rather than allowing customers to open tickets immediately?",
    options: [
      "Because most reachability issues are resolved by automated processes in less than 20 minutes.",
      "Because all EC2 instances are unreachable for 20 minutes every day when AWS does routine maintenance.",
      "Because all EC2 instances are unreachable for 20 minutes when first launched.",
      "Because of all the reasons listed here.",
    ],
    answerId: [0],
    answer:
      "Because most reachability issues are resolved by automated processes in less than 20 minutes.",
    explanation:
      "AWS requires that an EC2 instance be unreachable for 20 minutes before customers can open a support ticket because most reachability issues are automatically resolved within this timeframe by AWS's internal processes. This policy helps ensure that issues are not unnecessarily escalated before giving the automated systems a chance to address them.",
  },
  {
    text: "HTTP Query-based requests are HTTP requests that use the HTTP verb GET or POST and a Query parameter named [...].",
    options: ["Action", "Value", "Reset", "Retrieve"],
    answerId: [0],
    answer: "Action",
    explanation:
      "In HTTP Query-based requests, the query parameter named 'Action' is used to specify the action or request being performed. This parameter is commonly used in AWS API requests to define the desired operation, such as describing instances or listing buckets.",
  },
  {
    text: "A friend tells you he is being charged $100 a month to host his WordPress website, and you tell him you can move it to AWS for him and he will only pay a fraction of that, which makes him very happy. He then tells you he is being charged $50 a month for the domain, which is registered with the same people that set it up, and he asks if it's possible to move that to AWS as well. You tell him you aren't sure, but will look into it. Which of the following statements is true in regards to transferring domain names to AWS?",
    options: [
      "You can't transfer existing domains to AWS.",
      "You can transfer existing domains into Amazon Route 53's management.",
      "You can transfer existing domains via AWS Direct Connect.",
      "You can transfer existing domains via AWS Import/Export.",
    ],
    answerId: [1],
    answer:
      "You can transfer existing domains into Amazon Route 53's management.",
    explanation:
      "You can transfer existing domain names to AWS using Amazon Route 53. Route 53 is a scalable DNS and domain name registration service that allows you to manage your domain names and DNS records. It is possible to transfer domains from other registrars to Route 53, allowing you to consolidate your domain management.",
  },
  {
    text: "While creating the snapshots using the command line tools, which command should I be using?",
    options: [
      "ec2-deploy-snapshot",
      "ec2-fresh-snapshot",
      "ec2-create-snapshot",
      "ec2-new-snapshot",
    ],
    answerId: [2],
    answer: "ec2-create-snapshot",
    explanation:
      "The command `ec2-create-snapshot` is used to create snapshots of Amazon EBS volumes. This command allows you to create a backup of your EBS volume, which is crucial for data protection and disaster recovery.",
  },
  {
    text: "All Amazon EC2 instances are assigned two IP addresses at launch, out of which one can only be reached from within the Amazon EC2 network?",
    options: [
      "Multiple IP address",
      "Public IP address",
      "Private IP address",
      "Elastic IP Address",
    ],
    answerId: [2],
    answer: "Private IP address",
    explanation:
      "Amazon EC2 instances are assigned a private IP address and a public IP address (if configured). The private IP address is used for communication within the EC2 network and is not accessible from the Internet, whereas the public IP address allows access from the Internet.",
  },
  {
    text: "When an EC2 instance that is backed by an S3-based AMI is terminated, what happens to the data on the root volume?",
    options: [
      "Data is automatically saved as an EBS snapshot.",
      "Data is automatically saved as an EBS volume.",
      "Data is unavailable until the instance is restarted.",
      "Data is automatically deleted.",
    ],
    answerId: [3],
    answer: "Data is automatically deleted.",
    explanation:
      "When an EC2 instance is terminated, the data on the root volume that is backed by an S3-based AMI is automatically deleted. This behavior ensures that any temporary or instance-specific data is removed upon instance termination.",
  },
  {
    text: "You've created your first load balancer and have registered your EC2 instances with the load balancer. Elastic Load Balancing routinely performs health checks on all the registered EC2 instances and automatically distributes all incoming requests to the DNS name of your load balancer across your registered, healthy EC2 instances. By default, the load balancer uses the [...] protocol for checking the health of your instances.",
    options: ["HTTPS", "HTTP", "ICMP", "IPv6"],
    answerId: [1],
    answer: "HTTP",
    explanation:
      "By default, Elastic Load Balancing uses the HTTP protocol for health checks to determine the status of your EC2 instances. HTTP health checks are used to verify that the instances are responding to requests properly.",
  },
  {
    text: "Amazon Elastic Load Balancing is used to manage traffic on a fleet of Amazon EC2 instances, distributing traffic to instances across all Availability Zones within a region. Elastic Load Balancing has all the advantages of an on-premises load balancer, plus several security benefits. Which of the following is not an advantage of ELB over an on-premise load balancer?",
    options: [
      "ELB uses a four-tier, key-based architecture for encryption.",
      "ELB offers clients a single point of contact, and can also serve as the first line of defense against attacks on your network.",
      "ELB takes over the encryption and decryption work from the Amazon EC2 instances and manages it centrally on the load balancer.",
      "ELB supports end-to-end traffic encryption using TLS (previously SSL) on those networks that use secure HTTP (HTTPS) connections.",
    ],
    answerId: [0],
    answer: "ELB uses a four-tier, key-based architecture for encryption.",
    explanation:
      "Elastic Load Balancing does not use a four-tier, key-based architecture for encryption. Instead, it provides encryption capabilities through SSL/TLS for secure HTTP connections and manages encryption centrally on the load balancer. Other advantages of ELB include centralized management of encryption and protection against attacks.",
  },
  {
    text: "A web company is looking to implement an external payment service into their highly available application deployed in a VPC Their application EC2 instances are behind a public-facing ELB Auto scaling is used to add additional instances as traffic increases under normal load the application runs 2 instances in the Auto Scaling group but at peak it can scale 3x in size. The application instances need to communicate with the payment service over the Internet which requires whitelisting of all public IP addresses used to communicate with it. A maximum of 4 whitelisting IP addresses are allowed at a time and can be added through an API. How should they architect their solution?",
    options: [
      "Route payment requests through two NAT instances setup for High Availability and whitelist the Elastic IP addresses attached to the NAT instances.",
      "Whitelist the VPC Internet Gateway Public IP and route payment requests through the Internet Gateway.",
      "Whitelist the ELB IP addresses and route payment requests from the Application servers through the ELB.",
      "Automatically assign public IP addresses to the application instances in the Auto Scaling group and run a script on boot that adds each instance's public IP address to the payment validation whitelist API.",
    ],
    answerId: [0],
    answer:
      "Route payment requests through two NAT instances setup for High Availability and whitelist the Elastic IP addresses attached to the NAT instances.",
    explanation:
      "Using NAT instances to handle outgoing requests provides a stable set of public IP addresses, which can be whitelisted by the payment service. This approach ensures that the maximum of 4 IP addresses is managed effectively while maintaining high availability for your application.",
  },
  {
    text: "You are using Amazon SES as an email solution but are unsure of what its limitations are. Which statement below is correct in regards to that?",
    options: [
      "New Amazon SES users who have received production access can send up to 1,000 emails per 24-hour period, at a maximum rate of 10 emails per second.",
      "Every Amazon SES sender has the same set of sending limits.",
      "Sending limits are based on messages rather than on recipients.",
      "Every Amazon SES sender has a unique set of sending limits.",
    ],
    answerId: [3],
    answer: "Every Amazon SES sender has a unique set of sending limits.",
    explanation:
      "Amazon SES sets sending limits on a per-account basis, meaning that each sender has its own unique set of sending limits based on their usage and verification status. This ensures that limits are tailored to individual usage patterns and needs.",
  },
  {
    text: "Your company is getting ready to do a major public announcement of a social media site on AWS. The website is running on EC2 instances deployed across multiple Availability Zones with a Multi-AZ RDS MySQL Extra Large DB Instance. The site performs a high number of small reads and writes per second and relies on an eventual consistency model. After comprehensive tests you discover that there is read contention on RDS MySQL. Which are the best approaches to meet these requirements? (Choose 2 answers)",
    options: [
      "Deploy ElasticCache in-memory cache running in each Availability Zone.",
      "Implement sharding to distribute load to multiple RDS MySQL instances.",
      "Increase the RDS MySQL Instance size and Implement provisioned IOPS.",
      "Add an RDS MySQL read replica in each Availability Zone.",
    ],
    answerId: [0, 3],
    answer:
      "Deploy ElasticCache in-memory cache running in each Availability Zone. Add an RDS MySQL read replica in each Availability Zone.",
    explanation:
      "To address read contention, deploying ElasticCache (such as Redis or Memcached) provides an in-memory cache that can offload frequent read requests from RDS. Additionally, adding RDS read replicas helps distribute read traffic and reduce contention on the primary database instance.",
  },
  {
    text: "What does a 'Domain' refer to in Amazon SWF?",
    options: [
      "A security group in which only tasks inside can communicate with each other.",
      "A special type of worker.",
      "A collection of related Workflows.",
      "The DNS record for the Amazon SWF service.",
    ],
    answerId: [2],
    answer: "A collection of related Workflows.",
    explanation:
      "In Amazon SWF (Simple Workflow Service), a 'Domain' is a logical namespace for managing related workflows and activities. It allows you to group workflows together for easier management and organization.",
  },
  {
    text: "The SQL Server [...] feature is an efficient means of copying data from a source database to your DB Instance. It writes the data that you specify to a data file, such as an ASCII file.",
    options: ["bulk copy", "group copy", "dual copy", "mass copy"],
    answerId: [0],
    answer: "bulk copy",
    explanation:
      "The SQL Server 'bulk copy' feature (often referred to as BCP) is used to efficiently copy large amounts of data from one database to another. It supports exporting data to data files and importing data into SQL Server databases.",
  },
  {
    text: "Any person or application that interacts with AWS requires security credentials. AWS uses these credentials to identify who is making the call and whether to allow the requested access. You have just set up a VPC network for a client and you are now thinking about the best way to secure this network. You set up a security group called vpcsecuritygroup. Which following statement is true in respect to the initial settings that will be applied to this security group if you choose to use the default settings for this group?",
    options: [
      "Allow all inbound traffic and allow no outbound traffic.",
      "Allow no inbound traffic and allow all outbound traffic.",
      "Allow inbound traffic on port 80 only and allow all outbound traffic.",
      "Allow all inbound traffic and allow all outbound traffic.",
    ],
    answerId: [1],
    answer: "Allow no inbound traffic and allow all outbound traffic.",
    explanation:
      "By default, a new security group in AWS allows all outbound traffic and no inbound traffic. This default setting ensures that instances can initiate outbound connections but are not reachable from the outside until specific inbound rules are added.",
  },
  {
    text: "Which one of the below is not an AWS Storage Service?",
    options: ["Amazon S3", "Amazon Glacier", "Amazon CloudFront", "Amazon EBS"],
    answerId: [2],
    answer: "Amazon CloudFront",
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) service, not a storage service. The other options—Amazon S3, Amazon Glacier, and Amazon EBS—are all AWS storage services.",
  },
  {
    text: "You are trying to launch an EC2 instance, however the instance seems to go into a terminated status immediately. What would probably not be a reason that this is happening?",
    options: [
      "The AMI is missing a required part.",
      "The snapshot is corrupt.",
      "You need to create storage in EBS first.",
      "You've reached your volume limit.",
    ],
    answerId: [2],
    answer: "You need to create storage in EBS first.",
    explanation:
      "If an EC2 instance immediately terminates, it is more likely due to issues with the AMI, snapshot corruption, or reaching volume limits rather than needing to create storage in EBS first. EBS volumes need to be specified and correctly attached to instances, but this is usually not the direct cause of immediate termination.",
  },
  {
    text: "A company is building software on AWS that requires access to various AWS services. Which configuration should be used to ensure that AWS credentials (i.e., Access Key ID/Secret Access Key combination) are not compromised?",
    options: [
      "Enable Multi-Factor Authentication for your AWS root account.",
      "Assign an IAM role to the Amazon EC2 instance.",
      "Store the AWS Access Key ID/Secret Access Key combination in software comments.",
      "Assign an IAM user to the Amazon EC2 Instance.",
    ],
    answerId: [1],
    answer: "Assign an IAM role to the Amazon EC2 instance.",
    explanation:
      "Assigning an IAM role to an EC2 instance allows the instance to obtain temporary security credentials automatically, which eliminates the need to store AWS credentials in your application code or configuration files. This approach enhances security and reduces the risk of credential compromise.",
  },
  {
    text: "Can we attach an EBS volume to more than one EC2 instance at the same time?",
    options: [
      "Yes",
      "No",
      "Only EC2-optimized EBS volumes.",
      "Only in read mode.",
    ],
    answerId: [1],
    answer: "No",
    explanation:
      "An EBS volume can only be attached to one EC2 instance at a time. While EBS volumes can be attached to an instance as either the root volume or as additional data volumes, they cannot be simultaneously attached to multiple instances. The exception is EBS volumes that are attached in read-only mode using specific configurations.",
  },
  {
    text: "You need to measure the performance of your EBS volumes as they seem to be underperforming. You have come up with a measurement of 1,024 KB I/O but your colleague tells you that EBS volume performance is measured in IOPS. How many IOPS is equal to 1,024 KB I/O?",
    options: ["16", "256", "8", "4"],
    answerId: [3],
    answer: "4",
    explanation:
      "The performance of EBS volumes is measured in Input/Output Operations Per Second (IOPS). Since EBS volumes typically measure IOPS based on 8 KB I/O operations, 1,024 KB I/O would be equivalent to 1,024 / 8 = 128 IOPS. However, if the measurement provided is for 1,024 KB I/O directly, you would divide 1,024 KB by 256 KB to get the IOPS value. This results in 4 IOPS, based on the provided options.",
  },
  {
    text: "Your company produces customer commissioned one-of-a-kind skiing helmets combining high fashion with custom technical enhancements. Customers can show off their individuality on the ski slopes and have access to head-up-displays, GPS rear-view cams, and any other technical innovation they wish to embed in the helmet. The current manufacturing process is data-rich and complex, including assessments to ensure that the custom electronics and materials used to assemble the helmets are to the highest standards. Assessments are a mixture of human and automated assessments. You need to add a new set of assessments to model the failure modes of the custom electronics using GPUs with CUDA, across a cluster of servers with low latency networking. What architecture would allow you to automate the existing process using a hybrid approach and ensure that the architecture can support the evolution of processes over time?",
    options: [
      "Use AWS Data Pipeline to manage movement of data & meta-data and assessments. Use an autoscaling group of G2 instances in a placement group.",
      "Use Amazon Simple Workflow (SWF) to manage assessments, movement of data & meta-data. Use an auto-scaling group of G2 instances in a placement group.",
      "Use Amazon Simple Workflow (SWF) to manage assessments, movement of data & meta-data. Use an auto-scaling group of C3 instances with SR-IOV (Single Root I/O Virtualization).",
      "Use AWS Data Pipeline to manage movement of data & meta-data and assessments. Use an autoscaling group of C3 with SR-IOV (Single Root I/O Virtualization).",
    ],
    answerId: [1],
    answer:
      "Use Amazon Simple Workflow (SWF) to manage assessments, movement of data & meta-data. Use an auto-scaling group of G2 instances in a placement group.",
    explanation:
      "Amazon SWF is suitable for managing complex workflows and integrating human and automated tasks. G2 instances are designed for GPU workloads, making them ideal for CUDA-based processing. Combining SWF for workflow management with an auto-scaling group of G2 instances ensures that the system can handle data-intensive and GPU-heavy tasks efficiently.",
  },
  {
    text: "You are designing Internet connectivity for your VPC. The Web servers must be available on the Internet. The application must have a highly available architecture. Which alternatives should you consider? (Choose 2 answers)",
    options: [
      "Configure a NAT instance in your VPC. Create a default route via the NAT instance and associate it with all subnets. Configure a DNS A record that points to the NAT instance public IP address.",
      "Configure a CloudFront distribution and configure the origin to point to the private IP addresses of your Web servers. Configure a Route 53 CNAME record to your CloudFront distribution.",
      "Place all your web servers behind ELB. Configure a Route 53 CNAME to point to the ELB DNS name.",
      "Assign EIPs to all web servers. Configure a Route 53 record set with all EIPs. With health checks and DNS failover.",
      "Configure ELB with an EIP. Place all your Web servers behind ELB. Configure a Route 53 A record that points to the EIP.",
    ],
    answerId: [2, 3],
    answer:
      "Place all your web servers behind ELB. Configure a Route 53 CNAME to point to the ELB DNS name. Assign EIPs to all web servers. Configure a Route 53 record set with all EIPs. With health checks and DNS failover.",
    explanation:
      "To ensure high availability and Internet connectivity, placing web servers behind an Elastic Load Balancer (ELB) provides automatic traffic distribution and fault tolerance. Configuring Route 53 with health checks ensures that traffic is directed to healthy instances. While assigning EIPs directly to web servers is an alternative, using ELB is generally preferred for scalability and management.",
  },
  {
    text: "You need to configure an Amazon S3 bucket to serve static assets for your public-facing web application. Which methods ensure that all objects uploaded to the bucket are set to public read? (Choose 2 answers)",
    options: [
      "Set permissions on the object to public read during upload.",
      "Configure the bucket ACL to set all objects to public read.",
      "Configure the bucket policy to set all objects to public read.",
      "Use AWS Identity and Access Management roles to set the bucket to public read.",
      "Amazon S3 objects default to public read, so no action is needed.",
    ],
    answerId: [0, 2],
    answer:
      "Set permissions on the object to public read during upload. Configure the bucket policy to set all objects to public read.",
    explanation:
      "Setting object permissions during upload ensures that each object is immediately accessible to the public. Configuring the bucket policy provides a consistent, bucket-wide setting that applies to all objects. Bucket ACLs alone do not guarantee that all objects will be public without additional configuration, and S3 objects are not public by default. IAM roles are used for managing access permissions, not for making objects publicly readable.",
  },
  {
    text: "A major customer has asked you to set up his AWS infrastructure so that it will be easy to recover in the case of a disaster of some sort. Which of the following is important when thinking about being able to quickly launch resources in AWS to ensure business continuity in case of a disaster?",
    options: [
      "Create and maintain AMIs of key servers where fast recovery is required.",
      "Regularly run your servers, test them, and apply any software updates and configuration changes.",
      "All items listed here are important when thinking about disaster recovery.",
      "Ensure that you have all supporting custom software packages available in AWS.",
    ],
    answerId: [2],
    answer:
      "All items listed here are important when thinking about disaster recovery.",
    explanation:
      "Effective disaster recovery planning involves creating AMIs for fast recovery, regularly testing and updating systems, and ensuring that necessary software packages are available. Each item listed contributes to a robust disaster recovery strategy.",
  },
  {
    text: "You are developing a new mobile application and are considering storing user preferences in AWS. This would provide a more uniform cross-device experience to users using multiple mobile devices to access the application. The preference data for each user is estimated to be 50KB in size. Additionally, 5 million customers are expected to use the application on a regular basis. The solution needs to be cost-effective, highly available, scalable and secure. How would you design a solution to meet the above requirements?",
    options: [
      "Setup an RDS MySQL instance in 2 Availability Zones to store the user preference data. Deploy a public facing application on a server in front of the database to manage security and access credentials.",
      "Setup a DynamoDB table with an item for each user having the necessary attributes to hold the user preferences. The mobile application will query the user preferences directly from the DynamoDB table.",
      "Web Identity Federation, and DynamoDB Fine Grained Access Control to authenticate and authorize access.",
      "Setup an RDS MySQL instance with multiple read replicas in 2 Availability Zones to store the user preference data. The mobile application will query the user preferences from the read replicas. Leverage the MySQL user management and access privilege system to manage security and access credentials.",
      "Store the user preference data in S3. Setup a DynamoDB table with an item for each user and an item attribute pointing to the user's S3 object. The mobile application will retrieve the S3 URL from DynamoDB and then access the S3 object directly.",
    ],
    answerId: [1],
    answer:
      "Setup a DynamoDB table with an item for each user having the necessary attributes to hold the user preferences. The mobile application will query the user preferences directly from the DynamoDB table.",
    explanation:
      "DynamoDB is ideal for high-volume, scalable, and cost-effective storage and retrieval of user preferences. It handles large numbers of reads and writes efficiently and scales automatically, making it well-suited for handling data for millions of users. RDS and S3 solutions might introduce complexity and additional cost, and do not offer the same level of scalability and ease of management as DynamoDB.",
  },
  {
    text: "In the Amazon RDS which uses the SQL Server engine, what is the maximum size for a Microsoft SQL Server DB Instance with SQL Server Express edition?",
    options: ["10GB per DB.", "100GB per DB.", "2TB per DB.", "1TB per DB."],
    answerId: [0],
    answer: "10GB per DB.",
    explanation:
      "SQL Server Express edition is limited to a maximum database size of 10GB. This restriction is in place to differentiate the Express edition from other editions that support larger databases.",
  },
  {
    text: "You have deployed a web application targeting a global audience across multiple AWS Regions under the domain name example.com. You decide to use Route 53 Latency-Based Routing to serve web requests to users from the region closest to the user. To provide business continuity in the event of server downtime you configure weighted record sets associated with two web servers in separate Availability Zones per region. During a DR test you notice that when you disable all web servers in one of the regions Route 53 does not automatically direct all users to the other region. What could be happening? (Choose 2 answers)",
    options: [
      "Latency resource record sets cannot be used in combination with weighted resource record sets.",
      "You did not setup an HTTP health check for one or more of the weighted resource record sets associated with the disabled web servers.",
      "The value of the weight associated with the latency alias resource record set in the region with the disabled servers is higher than the weight for the other region.",
      "One of the two working web servers in the other region did not pass its HTTP health check.",
      "You did not set 'Evaluate Target Health' to 'Yes' on the latency alias resource record set associated with example.com in the region where you disabled the servers.",
    ],
    answerId: [1, 4],
    answer:
      "You did not setup an HTTP health check for one or more of the weighted resource record sets associated with the disabled web servers. You did not set 'Evaluate Target Health' to 'Yes' on the latency alias resource record set associated with example.com in the region where you disabled the servers.",
    explanation:
      "HTTP health checks ensure that Route 53 only routes traffic to healthy resources. 'Evaluate Target Health' must be enabled to ensure Route 53 considers the health of the target when making routing decisions. Without these configurations, Route 53 may not redirect traffic as expected during a failover.",
  },
  {
    text: "Amazon EBS provides the ability to create backups of any Amazon EC2 volume into what is known as [...].",
    options: ["snapshots.", "images.", "instance backups.", "mirrors."],
    answerId: [0],
    answer: "snapshots.",
    explanation:
      "Amazon EBS snapshots provide a point-in-time backup of EBS volumes. Snapshots can be used to restore data or create new volumes. Other options such as images or mirrors are not used for EBS backups.",
  },
  {
    text: "You've been hired to enhance the overall security posture for a very large e-commerce site. They have a well-architected multi-tier application running in a VPC that uses ELBs in front of both the web and the app tier with static assets served directly from S3. They are using a combination of RDS and DynamoDB for their dynamic data and then archiving nightly into S3 for further processing with EMR. They are concerned because they found questionable log entries and suspect someone is attempting to gain unauthorized access. Which approach provides a cost-effective scalable mitigation to this kind of attack?",
    options: [
      "Recommend that they lease space at a DirectConnect partner location and establish a DirectConnect connection to their VPC. They would then establish Internet connectivity into their space, filter the traffic in hardware Web Application Firewall (WAF), and then pass the traffic through the DirectConnect connection into their application running in their VPC.",
      "Add previously identified hostile source IPs as an explicit INBOUND DENY NACL to the web tier subnet.",
      "Add a WAF tier by creating a new ELB and an AutoScaling group of EC2 Instances running a host-based WAF. They would redirect Route 53 to resolve to the new WAF tier ELB. The WAF tier would then pass the traffic to the current web tier. The web tier Security Groups would be updated to only allow traffic from the WAF tier Security Group.",
      "Remove all but TLS 1.2 from the web tier ELB and enable Advanced Protocol Filtering. This will enable the ELB itself to perform WAF functionality.",
    ],
    answerId: [2],
    answer:
      "Add a WAF tier by creating a new ELB and an AutoScaling group of EC2 Instances running a host-based WAF. They would redirect Route 53 to resolve to the new WAF tier ELB. The WAF tier would then pass the traffic to the current web tier. The web tier Security Groups would be updated to only allow traffic from the WAF tier Security Group.",
    explanation:
      "Using AWS WAF (Web Application Firewall) helps to filter malicious traffic before it reaches your application. Adding a WAF tier provides an additional layer of security by inspecting and filtering HTTP requests. This approach is scalable and cost-effective, as it utilizes existing AWS services to enhance security without extensive infrastructure changes.",
  },
  {
    text: "You are designing the network infrastructure for an application server in Amazon VPC. Users will access all the application instances from the Internet as well as from an on-premises network. The on-premises network is connected to your VPC over an AWS Direct Connect link. How would you design routing to meet the above requirements?",
    options: [
      "Configure a single routing table with a default route via the Internet gateway. Propagate a default route via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets.",
      "Configure a single routing table with a default route via the Internet gateway. Propagate specific routes for the on-premises networks via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets.",
      "Configure a single routing table with two default routes: one to the internet via an Internet gateway, the other to the on-premises network via the VPN gateway. Use this routing table across all subnets in your VPC.",
      "Configure two routing tables: one that has a default route via the Internet gateway and another that has a default route via the VPN gateway. Associate both routing tables with each VPC subnet.",
    ],
    answerId: [0],
    answer:
      "Configure a single routing table with a default route via the Internet gateway. Propagate a default route via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets.",
    explanation:
      "This configuration allows traffic to flow efficiently from the internet and the on-premises network through Direct Connect. A single routing table with a default route for both internet and Direct Connect ensures that all traffic is routed properly without requiring multiple routing tables.",
  },
  {
    text: "You have multiple VPN connections and want to provide secure communication between sites using the AWS VPN CloudHub. Which statement is the most accurate in describing what you must do to set this up correctly?",
    options: [
      "Create a virtual private gateway with multiple customer gateways, each with unique Border Gateway Protocol (BGP) Autonomous System Numbers (ASNs).",
      "Create a virtual private gateway with multiple customer gateways, each with a unique set of keys.",
      "Create a virtual public gateway with multiple customer gateways, each with a unique Private subnet.",
      "Create a virtual private gateway with multiple customer gateways, each with unique subnet id.",
    ],
    answerId: [0],
    answer:
      "Create a virtual private gateway with multiple customer gateways, each with unique Border Gateway Protocol (BGP) Autonomous System Numbers (ASNs).",
    explanation:
      "AWS VPN CloudHub requires each customer gateway to have a unique ASN to avoid routing conflicts. This setup allows for secure communication between multiple sites using BGP routing.",
  },
  {
    text: "A user is aware that a huge download is occurring on his instance. He has already set the Auto Scaling policy to increase the instance count when the network I/O increases beyond a certain limit. How can the user ensure that this temporary event does not result in scaling?",
    options: [
      "The network I/O are not affected during data download.",
      "The policy cannot be set on the network I/O.",
      "There is no way the user can stop scaling as it is already configured.",
      "Suspend scaling.",
    ],
    answerId: [3],
    answer: "Suspend scaling.",
    explanation:
      "Suspending scaling actions allows you to prevent the Auto Scaling policy from triggering additional instance launches due to temporary spikes in network I/O. This is useful for preventing unnecessary scaling during transient events like large data downloads.",
  },
  {
    text: "The Amazon EC2 web service can be accessed using the [...] web services messaging protocol. This interface is described by a Web Services Description Language (WSDL) document.",
    options: ["SOAP.", "DCOM.", "CORBA.", "XML-RPC."],
    answerId: [0],
    answer: "SOAP.",
    explanation:
      "Amazon EC2 provides a SOAP-based API for accessing its services, and this API is described using a WSDL document. Other protocols like DCOM, CORBA, and XML-RPC are not used for AWS EC2 APIs.",
  },
  {
    text: "Which of the following are true regarding encrypted Amazon Elastic Block Store (EBS) volumes? (Choose 2 answers)",
    options: [
      "Supported on all Amazon EBS volume types.",
      "Snapshots are automatically encrypted.",
      "Available to all instance types.",
      "Existing volumes can be encrypted.",
      "Shared volumes can be encrypted.",
    ],
    answerId: [0, 1],
    answer:
      "Supported on all Amazon EBS volume types. Snapshots are automatically encrypted.",
    explanation:
      "EBS encryption is supported on all volume types and ensures that snapshots created from encrypted volumes are also encrypted. Existing volumes cannot be encrypted directly but can be migrated to encrypted volumes.",
  },
  {
    text: "Is Federated Storage Engine currently supported by Amazon RDS for MySQL?",
    options: ["Only for Oracle RDS types.", "Yes.", "No.", "Only in VPC."],
    answerId: [2],
    answer: "No.",
    explanation:
      "Amazon RDS for MySQL does not support the Federated Storage Engine. This engine is not available in RDS due to limitations in its architecture and compatibility considerations.",
  },
  {
    text: "While creating the snapshots using the API, which Action should I be using?",
    options: [
      "MakeSnapshot.",
      "FreshSnapshot.",
      "DeploySnapshot.",
      "CreateSnapshot.",
    ],
    answerId: [3],
    answer: "CreateSnapshot.",
    explanation:
      "The correct API action for creating a snapshot in AWS is 'CreateSnapshot'. Other options are not valid API actions for snapshot creation.",
  },
  {
    text: "A customer needs to capture all client connection information from their load balancer every five minutes. The company wants to use this data for analyzing traffic patterns and troubleshooting their applications. Which of the following options meets the customer requirements?",
    options: [
      "Enable AWS CloudTrail for the load balancer.",
      "Enable access logs on the load balancer.",
      "Install the Amazon CloudWatch Logs agent on the load balancer.",
      "Enable Amazon CloudWatch metrics on the load balancer.",
    ],
    answerId: [1],
    answer: "Enable access logs on the load balancer.",
    explanation:
      "Access logs provide detailed information about the requests made to the load balancer, including client connection data. AWS CloudTrail is for API activity logging, and CloudWatch metrics provide performance metrics rather than detailed access logs.",
  },
  {
    text: "Will my standby RDS instance be in the same Region as my primary?",
    options: [
      "Only for Oracle RDS types.",
      "Yes.",
      "Only if configured at launch.",
      "No.",
    ],
    answerId: [1],
    answer: "Yes.",
    explanation:
      "In Amazon RDS, the standby instance for high availability (Multi-AZ deployments) is always in the same Region as the primary instance to ensure fast failover and data consistency.",
  },
  {
    text: "If I want my instance to run on a single-tenant hardware, which value do I have to set the instance's tenancy attribute to?",
    options: ["Dedicated.", "Isolated.", "One.", "Reserved."],
    answerId: [0],
    answer: "Dedicated.",
    explanation:
      "Setting the instance's tenancy attribute to 'Dedicated' ensures that it runs on single-tenant hardware, providing isolation from other AWS customers' instances.",
  },
];

export default questions;
