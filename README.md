# Text Blaze Suggester

## How to run


1. Rename `.env.example` to `.env.local`.
2. Fill `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
3. `yarn build && yarn start`

`yarn dev` doesn't work because we use an internal `next` server and in a `dev` mode it doesn't support module sharing (we share a default task manager).

Open http://localhost:3000 in a browser

## Flow

1. User click `Analyze my emails` -> 
2. Server redirects him to the google oauth -> 
3. Google sends him back to the callback url ->
4. We create an instance of the email provider (async iterator with a few decorators) ->
5. We create a combined processor (each processor analyzes emails in a different way) ->
6. Create a task with appropriate command and send it to the task manager ->
7. Redirect user to the result page where he will wait for the task result

## Questions

- We know that we process emails. Can we take advantage of this info? For example, we can analyze email parts differently (subject, header, body)
- What is the average size of the email?
- How many emails do we need to analyze per user?
- Do we need to have all emails at the same time or we can process them one by one or use a batching?
- How much time/memory do we need to process emails for one user?
- How to split text correctly? (n-grams, ?)
- If we found similar sentences, how to check that they are not in similar paragraphs?
- Do we need to clean up somehow text before comparing?
- What algorithms do we have for text comparison?
- Do we need to use an exact comparison, or should we also find almost identical texts? (NLP, cosine similarity ?)
- Can we use something like Elasticsearch/Solr for finding similar texts?
- ...

## Useful links

- [https://github.com/spencermountain/compromise](https://github.com/spencermountain/compromise)

- [https://winkjs.org/](https://winkjs.org/)

- [https://www.npmjs.com/package/simplengrams](https://www.npmjs.com/package/simplengrams)

- [https://github.com/jloveric/SentenceSimilarity](https://github.com/jloveric/SentenceSimilarity)

- [https://npm.io/package/string-comparison](https://npm.io/package/string-comparison)