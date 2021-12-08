CREATE TABLE "questions" (
  "id" SERIAL PRIMARY KEY,
  "title" text NOT NULL,
  "question" text NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "answers" (
  "id" SERIAL PRIMARY KEY,
  "answer_id" int NOT NULL,
  "answer" text NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

ALTER TABLE "answers" ADD FOREIGN KEY ("answer_id") REFERENCES "questions" ("id");
