# Use a small and fast nginx base image
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your project files into the nginx web directory
COPY . /usr/share/nginx/html

# Expose port 80 to the host
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
