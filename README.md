# Home Test - Frontend Web Developer

## Demo

### [With API](https://my-next-with-api.netlify.app/)

### [Without API](https://my-next-without-api.netlify.app/)

## Features

### User

- **Authentication:**

  1. Login with form validation.
  2. Register with form validation.
  3. Upon successful login/registration, redirect to the article list page.
  4. Logout with redirection to the login page.

- **Article List:** 5. Filter articles by category. 6. Search articles with debounce (300-500ms). 7. Pagination if the data exceeds 9 items.

- **Article Detail:** 8. Display the complete content of an article. 9. "Other Articles": Show a maximum of 3 articles from the same category as the currently viewed article.

### Admin

- **Authentication:**

  1. Login with form validation.
  2. Register with form validation.
  3. Upon successful login/registration, redirect to the article list page.
  4. Logout with redirection to the login page.

- **Article List:**

  1. Filter articles by category.
  2. Search articles with debounce (300-500ms).
  3. Pagination if the data exceeds 10 items.

- **Create Article:**

  1. Implement form validation.
  2. Create a preview display before submission (using a fetch API call).

- **Edit Article:**
  1. Implement form validation.
  2. Create a preview display before submission (using a fetch API call).

## Tech Stack

- **Framework:** Next.js (App Router, SSR and CSR)
- **Styling:** Tailwind CSS + Shadcn/ui
- **Icons:** Lucide
- **Form Validation:** Zod
- **Version Control:** Git and GitHub
