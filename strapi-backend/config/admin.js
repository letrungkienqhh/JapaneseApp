module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '29d2d9e7480af10f1c2a8651e06ac8e3'),
  },
});
