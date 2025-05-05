# Pokemon Cards Application

This application is a React Native app that lists Pokemon cards, shows their details, and provides a favorite feature.

## Technologies and Libraries Used

### Core Technologies
- **React Native**: Cross-platform mobile application development framework
- **TypeScript**: JavaScript superset that provides type safety
- **Expo**: Platform for developing and distributing React Native applications

### State Management
- **Redux Toolkit**: State management library used to manage application state
  - Used for managing favorite cards
  - Manages API calls with async thunks

### Navigation
- **React Navigation**: Library used for managing page transitions and navigation structure
  - Provides page transitions with Stack Navigator
  - TypeScript integration for type-safe navigation

### UI Components and Styling
- **Expo Image**: Library that provides advanced image loading and caching features
- **@shopify/flash-list**: Library used for high-performance list view
  - Provides better performance with large lists
  - Automatic pagination and loading features

### Data Management
- **Axios**: Library used for HTTP requests
  - Used for communication with Pokemon API
- **AsyncStorage**: Library used for local storage
  - Used for storing favorite cards on device

### Testing
- **Jest**: Test framework
- **@testing-library/react-native**: Library used for testing React Native components
- **@testing-library/react-hooks**: Library used for testing React hooks

### Development Tools
- **Babel**: Tool used for compiling JavaScript/TypeScript code
  - Manages aliases with module resolver
- **TypeScript**: Provides type checking and enhanced IDE support

## Project Structure

```
src/
├── api/          # API requests and configuration
├── components/   # Reusable UI components
├── constants/    # Constants
├── hooks/        # Custom React hooks
├── navigation/   # Navigation configuration
├── screens/      # Application screens
├── store/        # Redux store configuration
├── theme/        # Theme and style definitions
└── types/        # TypeScript type definitions
```

## Installation

1. Clone the project
2. Install dependencies:
```bash
yarn install
```
3. Start the application:
```bash
yarn start
```

## Testing

To run tests:
```bash
yarn test
``` 