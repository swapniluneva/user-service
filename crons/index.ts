var cron = require('node-cron');
import { UserCron } from './user.cron';

var jobTask = cron.schedule('5 * * * * *', () => {
  console.log('running a task every minute');
  (new UserCron()).DumpUsers();
});

export default () => {
  jobTask.start();
}