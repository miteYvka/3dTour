FROM openjdk:21.0.1-jdk AS build

WORKDIR /app

COPY gradle ./gradle
COPY build.gradle settings.gradle gradlew ./

RUN ./gradlew --version && \
    ./gradlew build --no-daemon

COPY src ./src
RUN ./gradlew bootJar --no-daemon

FROM openjdk:21.0.1-jre
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]