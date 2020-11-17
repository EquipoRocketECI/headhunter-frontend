FROM openjdk:8

ENV PORT 8080

COPY "target/*.jar" "app.jar"

ENTRYPOINT ["java","-jar","app.jar"]