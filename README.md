# React Native Test Case Project

This project is a sample application built with React Native and Expo. It demonstrates modern React Native ecosystem practices including components, navigation, state management, and testing workflows.

## Table of Contents
- [Installation](#installation)
- [Development](#development)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd test-case
   ```
2. **Install dependencies:**
   ```sh
   yarn install
   # or
   npm install
   ```
3. **Create environment files if needed:**
   If your project requires environment variables, create a `.env` file in the root directory.

## Development

To start the project:
```sh
# Start with Expo
yarn start
# or
npm run start
```

To run on Android/iOS/Web:
```sh
yarn android
yarn ios
yarn web
```

## Testing

To run tests:
```sh
yarn test
```

> The project uses Jest and Testing Library for unit tests. All necessary mocks and setup are defined in the `jest.setup.js` file.

## Project Structure

```
├── __tests__                # Test files
├── src                      # Application source code
│   ├── api                  # API and services
│   ├── components           # React components
│   ├── constants            # Constants
│   ├── hooks                # Custom hooks
│   ├── navigation           # Navigation
│   ├── screens              # Screens
│   ├── store                # Redux store and slices
│   ├── theme                # Theme and styles
│   └── types                # Type definitions
├── package.json             # Project dependencies and scripts
├── babel.config.js          # Babel configuration
├── jest.setup.js            # Jest test environment setup
├── .gitignore               # Files ignored by git
└── README.md                # Project documentation
```

## Contributing

1. Fork the repository and create a new branch.
2. Make your changes.
3. Ensure all tests pass.
4. Open a pull request.

## License

This project is licensed under the MIT License. 