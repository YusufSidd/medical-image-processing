FROM openjdk:11
ADD ./target/medical-image-processing-service-0.0.1-SNAPSHOT.jar /usr/src/medical-image-processing-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "medical-image-processing-service-0.0.1-SNAPSHOT.jar"]
