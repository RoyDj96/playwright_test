FROM mcr.microsoft.com/playwright:v1.49.0-noble

WORKDIR /app
COPY package.json .
RUN npm install
RUN npx playwright install

COPY . .
CMD ["npx", "playwright", "test"]
#CMD ["npx", "playwright", "test", "--", "--project=chromium"]