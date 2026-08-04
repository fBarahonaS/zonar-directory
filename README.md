# Directory

A React Native based app that loads a list of users from the Random-User-API and shows them in a simple contacts directory cards which you can filter.

## What it does

- Fetches 1000 users from `https://randomuser.me/api`
- Displays each contact with a thumbnail, name, and email
- Includes a search input for filtering by first name, last name, or email
- Shows loading and error states during data fetch

## Project structure

- `App.tsx` — app entry point, renders the `Dashboard`
- `src/screens/Dashboard.tsx` — fetches users and manages search/filter state
- `src/components/Header.tsx` — search bar and title
- `src/components/UserCard.tsx` — renders user cards
- `src/hooks/useFiltering.ts` — filter logic for search queries
- `src/helpers/AlertComponent.tsx` — simple alert messages
- `src/types/user.ts` — user type definitions

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start Expo:
   ```bash
   npm start
   ```
3. Open the app:
   - Press `a` for Android emulator/device
   - Press `i` for iOS simulator/device
   - Or scan the QR code with Expo Go
