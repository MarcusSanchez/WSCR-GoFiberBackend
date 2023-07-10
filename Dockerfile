# Build Stage
FROM golang:1.20-alpine AS build

WORKDIR /app

# Copy go.mod and go.sum files
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy the entire project
COPY . .

# Copy the "public" directory
COPY public/ ./public/

# Introduce a change to invalidate the cache
RUN echo "Cache busting" > cache-buster

# Build the application
RUN CGO_ENABLED=0 GOOS=linux go build -o myapp

# Final Stage
FROM alpine:latest

RUN apk --no-cache add ca-certificates

WORKDIR /root/

# Copy the built executable from the build stage
COPY --from=build /app/myapp .

# Copy the "public" directory
COPY --from=build /app/public/ ./public/

ENV PORT=3000

# Expose the necessary port
EXPOSE 3000

# Command to run the executable
CMD ["./myapp"]