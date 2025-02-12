# Mantine UI Dashboard

A modern, boilerplate admin dashboard built with Mantine UI, Vite, and TypeScript. This template serves as a foundation for creating administrative web applications with a clean UI, responsive design, and scalable architecture.

## Features

- **Mantine UI**: A powerful component library for building visually appealing and responsive interfaces.
- **Vite**: A fast and optimized build tool for modern web development.
- **TypeScript**: A statically-typed superset of JavaScript for better development experience and fewer runtime errors.
- **React Router**: A robust library for managing navigation and routing between pages.

## Prerequisites

Ensure you have the following tools installed before starting:

- **Node.js** (v16 or higher)
- **Docker** (for containerization)
- **Git** (for version control)
- **Make** (for managing Makefile commands)

## Installation

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/godwill1224/mantine-ui-dashboard.git
cd mantine-ui-dashboard
```

### 2. Install Dependencies

Install the required project dependencies using either `npm` or `yarn`:

```bash
npm install
# or
yarn install
```

### 3. Run the Application Locally

To run the application in development mode, use the following command:

```bash
npm run dev
# or
yarn dev
```

This will start Vite's development server, and the app will be accessible at `http://localhost:3000` by default.

---

### Docker Setup

You can containerize the application using Docker for easier deployment and environment management.

#### 1. Build the Docker Image

To build the Docker image, run:

```bash
npm run docker:build
# or
yarn docker:build
```

This command will build the Docker image based on the `Dockerfile` provided in the project.

#### 2. Run the Docker Container

Once the image is built, you can run the application inside a Docker container with:

```bash
npm run docker:run
# or
yarn docker:run
```

This will run the app inside a container and map port 3000 of the container to port 3000 of your host machine. The app will be accessible at `http://localhost:3000`.

#### 3. Using Docker Compose

For easier management, you can use `docker-compose` to build and run the application. If you have a `docker-compose.yml` file in your project, use the following command:

```bash
npm run docker:up
# or
yarn docker:up
```

This will automatically build the image and start the container in one command.

#### 4. Restarting Docker Containers

To stop and restart the Docker containers (rebuild and run), use:

```bash
npm run docker:restart
# or
yarn docker:restart
```

#### 5. Stop Docker Containers

To stop and remove the containers, use:

```bash
npm run docker:down
# or
yarn docker:down
```

---

### Makefile Setup

The Makefile allows you to easily manage your Docker and development commands.

#### Available Make Commands

- **Start Containers (Detached)**: This will start the containers in detached mode (in the background).

```bash
make up
```

- **Rebuild Containers**: This will rebuild the containers and start them.

```bash
make rebuild
```

- **Stop Containers and Rebuild**: This will stop the containers, remove them, and rebuild the containers.

```bash
make zap
```

- **Stop Containers and Remove Volumes**: This will stop the containers, remove them, and remove the associated volumes.

```bash
make .zap
```

- **Stop Containers**: This will stop and remove the containers but not the volumes.

```bash
make down
```

- **Stop Containers and Remove Volumes**: This will stop and remove the containers along with their associated volumes.

```bash
make volumes
```

#### Running Makefile Commands

To run a specific command from the Makefile, use:

```bash
make <command-name>
```

For example, to start the containers in detached mode:

```bash
make up
```

---

### License

This setup is open-source and free to use for any project.
