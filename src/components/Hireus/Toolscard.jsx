

import React from 'react';


const apps = [
    {
      name: 'Bitbucket',
      description: 'Bitbucket is a Git-based tool for version control, team collaboration, and CI/CD integration with Jira',
      icon: 'src/assets/imgs/Hireus/bitbucket.png',
      link: 'https://bitbucket.org/'
    },
    {
      name: 'GitLab',
      description: 'A DevOps platform that streamlines version control, CI/CD, issue tracking, and deployment.',
      icon: 'src/assets/imgs/Hireus/gitlab.png',
      link: 'https://gitlab.com/'
    },
    {
      name: 'SonarQube',
      description: 'A tool that analyzes code for bugs, vulnerabilities, and quality issues to maintain secure, clean code.',
      icon: 'src/assets/imgs/Hireus/sonarqube.png',
      link: 'https://www.sonarqube.org/'
    },
    {
      name: 'GitHub',
      description: 'GitHub is a platform for hosting code, enabling collaboration, code review, and project management.',
      icon: 'src/assets/imgs/Hireus/github.png',
      link: 'https://github.com/'
    },
    {
      name: 'BlazeMeter',
      description: 'A performance testing tool for running scalable load tests to ensure web and mobile apps handle real-world traffic',
      icon: 'src/assets/imgs/Hireus/blazemeter.png',
      link: 'https://www.blazemeter.com/'
    },
    {
      name: 'Azure Repos',
      description: 'Part of Microsoft Azure DevOps, Azure Repos provides cloud-hosted Git repositories for source control. It supports versioning, collaboration, and code reviews, ensuring secure and efficient code management.',
      icon: 'src/assets/imgs/Hireus/azure.png',
      link: 'https://azure.microsoft.com/en-us/services/devops/repos/'
    },
    {
      name: 'Apache Ant',
      description: 'A Java-based build tool used to automate software build processes, especially in large Java projects. It uses XML to define tasks like compiling, packaging, and deployment.',
      icon: 'src/assets/imgs/Hireus/ant.png',
      link: 'https://ant.apache.org/'
    },
    {
      name: 'Gradle',
      description: 'A powerful build automation tool used for Java, Android, and other languages. It offers flexibility, fast builds, and support for dependency management.',
      icon: 'src/assets/imgs/Hireus/gradle.png',
      link: 'https://gradle.org/'
    },
    {
      name: 'Amazon ECS',
      description: 'A fully managed container orchestration service that makes it easy to run Docker containers on AWS',
      icon: 'src/assets/imgs/Hireus/ecs.png',
      link: 'https://aws.amazon.com/ecs/'
    },
    {
      name: 'Docker',
      description: 'An open-source platform that automates the deployment, scaling, and management of applications inside containers. ',
      icon: 'src/assets/imgs/Hireus/docker.png',
      link: 'https://www.docker.com/'
    },
    {
      name: 'Kubernetes',
      description: 'An open-source container orchestration platform used to automate the deployment, scaling, and management of containerized applications.',
      icon: 'src/assets/imgs/Hireus/kubernetes.png',
      link: 'https://kubernetes.io/'
    },
    {
      name: 'Splunk',
      description: 'A platform for searching, monitoring, and analyzing machine-generated big data. Splunk is widely used for operational intelligence, ',
      icon: 'src/assets/imgs/Hireus/splunk.png',
      link: 'https://www.splunk.com/'
    },
    {
      name: 'JMeter',
      description: 'An open-source software designed for performance testing and load testing of web applications.',
      icon: 'src/assets/imgs/Hireus/jmeter.png',
      link: 'https://jmeter.apache.org/'
    },
    {
      name: 'Selenium',
      description: 'Selenium is an open-source framework used for automating web browser interactions Its widely adopted for functional testing of web applications across various browsers and platforms.',
      icon: 'src/assets/imgs/Hireus/selenium.png',
      link: 'https://www.selenium.dev/'
    },
    {
      name: 'Tsung',
      description: 'An open-source multi-protocol distributed load testing tool. Tsung allows performance testing of applications like web servers, databases, and messaging systems,',
      icon: 'src/assets/imgs/Hireus/tsung.png',
      link: 'http://tsung.erlang-projects.org/'
    },
    {
      name: 'Maven',
      description: 'A project management and build automation tool for Java. Maven simplifies dependency management, builds, and documentation with a standardized project structure.',
      icon: 'src/assets/imgs/Hireus/maven.png',
      link: 'https://maven.apache.org/'
    },
    {
      name: 'Xcode',
      description: 'Apple’s integrated development environment (IDE) used to develop apps for iOS, macOS, watchOS, and tvOS. It includes tools for UI design, coding, testing, and performance analysis.',
      icon: 'src/assets/imgs/Hireus/xcode.png',
      link: 'https://developer.apple.com/xcode/'
    },
    {
      name: 'NMAP',
      description: 'An open-source tool used for network discovery and security auditing. NMAP helps identify devices on a network, discover open ports',
      icon: 'src/assets/imgs/Hireus/nmap.png',
      link: 'https://nmap.org/'
    },
    {
      name: 'Wireshark',
      description: 'A widely-used network protocol analyzer that captures and inspects data traffic in real-time. Wireshark is instrumental in troubleshooting network issues',
      icon: 'src/assets/imgs/Hireus/wireshark.png',
      link: 'https://www.wireshark.org/'
    },
    {
      name: 'Google Cloud',
      description: 'Google Cloud provides a suite of cloud computing services that run on the same infrastructure Google uses internally for its end-user products.',
      icon: 'src/assets/imgs/Hireus/googlecloud.png',
      link: 'https://cloud.google.com/'
    },
    {
      name: 'OpenStack',
      description: 'An open-source cloud computing platform used for building and managing public and private clouds.',
      icon: 'src/assets/imgs/Hireus/openstack.png',
      link: 'https://www.openstack.org/'
    }
  ];

  export default function ToolsTechSection() {
    return (
      <div className=" px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm mb-5 font-medium text-gray-500">Tools & Tech Supported</h2>
          <div className="text-3xl sm:text-2xl font-lufga leading-[180%] text-gray-900  ml-0 sm:ml-100 text-center  sm:text-left">
            <p>We partner with industry leaders to co-create value, scale innovation, and deliver impactful solutions.</p>
          </div>
  
          {/* Horizontally scrollable section */}
          <div className="mt-35 overflow-x-auto md:overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
            <div className="flex gap-6 min-w-max max-w-full">
              {apps.map((app, index) => (
                <a
                  key={index}
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[300px] w-50 h-53 flex-shrink-0   p-4  transition duration-300 flex flex-col gap-3 items-center justify-between"
                >
                  <img src={app.icon} alt={app.name} className="w-19 h-16 mx-auto" />
                  <h3 className="text-center text-xl font-lugha underline text-gray-800">{app.name}</h3>
                  <p className="text-center text-sm line-clamp-3 leading-snug text-gray-600">{app.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  