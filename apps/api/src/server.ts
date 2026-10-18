import { app } from './app.js';
import { environment } from './config/environment.js';

const port = environment.PORT;

app.listen(port, () => {
  console.log(`PayFlow API listening on port ${port}`);
});
