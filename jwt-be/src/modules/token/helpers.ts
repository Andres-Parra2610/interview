export const extractTokenFromHeader = (headers: Headers) => {
  const authorization = headers['authorization'];
  if (!authorization) {
    throw new Error('No authorization header found');
  }
  const [, token] = authorization.split(' ');
  if (!token) {
    throw new Error('No token found in authorization header');
  }
  return token;
}