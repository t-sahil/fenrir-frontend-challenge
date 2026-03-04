# Project X – Technical Task

Frontend challenge submission for Fenrir Security.  
Recreated the provided design using a clean, component-based architecture.

## Tech Stack

- React + TypeScript
- SCSS
- React Router
- Lucide React

## Implementation Details

### Authentication
- Session persisted using `localStorage`
- Protected routes redirect unauthenticated users to login

### Dashboard
- Real-time search filtering on mock scan data
- Clickable table rows
- Dynamic routing to scan detail pages using ID params

### Scan Detail Page
- Minimal implementation
- Confirms dynamic routing works correctly

## Run Locally

```bash
npm install
npm run dev
