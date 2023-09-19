# Membrane Frontend

Membrane Frontend is the user interface counterpart for the Louis Login Backend system. This centralized authentication system is designed for Single Sign-On (SSO) functionality, streamlining user authentication across multiple client applications through token-based email verification.

## Prerequisites

- npm
- Louis Login Backend set up and running

## Configuration

### Environment Variables

Configuration of Membrane Frontend is primarily done through environment variables. Here's a quick overview:

- `REACT_APP_MEMBRANE_BACKEND_URL`: Points to the backend service endpoint. You should provide a redirect URL to Membrane Backend here.

For a detailed template of environment variables, see the `.env.template` file in the root directory. It provides existing environment variables as a template. You should duplicate this file, rename it to `.env`, and provide your specific values.

## Setup & Running

1. Clone the repository.
2. Navigate into the cloned directory.
3. Install dependencies.
4. Start the development server.

Your application should now be running at `http://localhost:3000` or the next available port.

## Workflow with Louis Login Backend

For a deeper understanding of how Membrane Frontend interacts with Louis Login Backend, refer to the "Louis Login Backend" section in this document:

[Membrane Backend on GitHub](https://github.com/ai-cfia/membrane-backend)

