<section align="center">
  <h1>Word Horizon</h1>
  <div>
    ![React](https://img.shields.io/static/v1?label=react&message=19.1.0&color=lightblue&style=for-the-badge&logo=react)
    ![Vite](https://img.shields.io/static/v1?label=vite&message=6.3.5&color=purple&style=for-the-badge&logo=vite)
    ![TypeScript](https://img.shields.io/static/v1?label=typescript&message=5.8.3&color=blue&style=for-the-badge&logo=typescript)
    ![TailwindCSS](https://img.shields.io/static/v1?label=tailwindcss&message=4.1.11&color=blue&style=for-the-badge&logo=tailwindcss)
    ![Status](https://img.shields.io/static/v1?label=status&message=development&color=yellow&style=for-the-badge)
  </div><br>

Expand your English vocabulary with smart flashcards!
Learn words, definitions, and usage through spaced repetition!
Ideal for students, travelers, and language learners!

[](https://github.com/user-attachments/assets/c640f259-8c40-4f22-b205-4f500a5676ae)

</section>

## How to Run the Application

You'll need [Docker > 25.0.4](https://www.docker.com/).

After configuring Docker, clone this repository:

```shell
git clone git@github.com:zolppy/word-horizon.git
```

Navigate to the project operations directory and then start Docker containers with:

```shell
docker compose up --build
```

## Lint

This project uses [ESLint](https://eslint.org/) as lint tool.

To run it use this command:

```shell
docker compose run --rm word-horizon npm run lint
```
