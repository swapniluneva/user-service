import { UserService } from '../components/user/services/user.services';

export class UserCron {

    sqlConnection: any;

    async DumpUsers() {
        try {
            // Check Users table is empty OR not
            const cnt = await (new UserService()).GetCount();
            console.log('running jobs', cnt);
            if(cnt && cnt.length > 0 && cnt[0].cnt > 0) {
                console.log('Users already populated: ', cnt[0].cnt);
                return;
            }

            let loopBreak = false;
            let pageCount = 0;
            while(!loopBreak) {
                loopBreak = true;
                let users = await (new UserService()).RequestUsers(pageCount++);
                users = JSON.parse(users);
                if(users && users.data && users.data.length > 0) {
                    loopBreak = false;
                    // console.log(users.data.map((obj: any) => Object.values(obj)))
                    let values = users.data.map((obj: any) => Object.values(obj)).reduce((acc: any, curr: any) => {
                        acc.push("('" + curr.join("','") + "')");
                        return acc;
                    }, []);
                    await (new UserService()).AddUsers(values.join(','));
                }
            }
        } catch(err) {
            console.log('Error in Job execution: ', err);
            throw err;
        } 
    }
}
