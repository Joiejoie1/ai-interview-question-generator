# AI Interview Question Generator

A simple AI-powered web application that generates thoughtful interview questions based on a job title.

Users can enter a role such as **Customer Success Manager**, and the application uses the OpenRouter API to generate 3 relevant interview questions focused on communication, problem-solving, and role-specific thinking.

---

## Features

* Generate AI-powered interview questions
* Clean and responsive UI
* Loading state during API requests
* Basic input validation
* Error handling for failed API requests
* Server-side API integration using Next.js route handlers

---

## Tech Stack

* Next.js 16
* TypeScript
* Tailwind CSS
* OpenRouter API
* React

---

## Project Structure

```bash
app/
 ├── api/
 │    └── questions/
 │         └── route.ts
 ├── page.tsx
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Joiejoie1/ai-interview-question-generator.git
```

### 2. Navigate into the Project

```bash
cd ai-interview-question-generator
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment Variables

Create a `.env.local` file in the root directory:

```env
OPENROUTER_API_KEY=your_api_key_here
```

### 5. Run the Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## Environment Variables

| Variable       | Description           |
| -------------- | --------------------- |
| OPENROUTER_API_KEY | OpenRouter API key |

Get your API key from:

https://openrouterai/

---

## Prompting Strategy

The application uses a structured prompt designed to generate concise and role-specific interview questions.

Example prompt structure:

```txt
Generate 3 thoughtful interview questions for a Customer Success Manager role.

Requirements:
- Focus on communication, problem-solving, and role-specific thinking
- Keep questions concise
- Return only the questions as a numbered list
```

---

## Tradeoffs & Decisions

* Chose OpenRouter API because of its generous free tier and simple integration
* Kept the UI intentionally minimal to prioritize clarity and execution speed
* Used Next.js route handlers to avoid exposing API keys on the client side
* Focused on maintainable and readable code over unnecessary complexity

---

## Live Demo

[View Live Application](https://ai-interview-question-generator-gqti45f45-joy-e60b2f24.vercel.app)

---

## Author

Joy Gundu

GitHub:
https://github.com/Joiejoie1
