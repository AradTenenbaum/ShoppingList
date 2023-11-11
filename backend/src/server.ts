import app from "./app";
import { PORT } from "./config";
import { initDB } from "./db";
import { appendInitCategoriesIfNotExistsLogic } from "./logic/category.logic";
import { BASE_CATEGORIES } from "./utils/constants";
import { logMessage } from "./utils/logs";

const port = PORT || 5000;

app.listen(port, async () => {
  await initDB();
  await appendInitCategoriesIfNotExistsLogic(BASE_CATEGORIES);
  logMessage(`Server is listening on port ${port}`);
});
