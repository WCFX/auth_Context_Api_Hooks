export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'uiasdui9gasfuoighas0t9hitidhfosduhfosdhfopsdifsdokfsd',
        user: {
          name: 'Wagner',
          email: 'wagnerbfx@gmail.com',
        },
      });
    }, 2000);
  });
}
