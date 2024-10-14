import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()])
    .then((responses) => {
      const obj = {
        ...responses[0],
        ...responses[1],
      };
      console.log(`${obj.body} ${obj.firstName} ${obj.lastName}`);
    })
    .catch(() => {
      console.log(new Error('Signup system offline'));
    });
}
