import seed from 'meteor/themeteorchef:seeder';

export default const _seedUsers = () => {
  seed( 'users', {
    environments: [ 'development', 'staging', 'production' ],
    data: [{
      email: 'admin@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Carl', last: 'Winslow' }
      },
      roles: [ 'admin' ]
    }]
  });
};
