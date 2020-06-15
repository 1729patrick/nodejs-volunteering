import Users from '../src/app/models/Users';

test('user insert', async () => {
  const userData = {
    name: 'patrick',
    email: 'p@b.com',
    phone: '6555151',
    city: '12254',
    date_of_birth: 12,
    status: 1,
    school: 122,
    course: 123,
    observations: 123,
    is_admin: true,
    privacy: 121,
    password: 'pb',
    company_id: 1,
  };

  const [id] = await new Users(userData).insert();
  const userInserted = await new Users().findBy({ id });

  expect(userInserted.length).toBe(1);
  expect(userInserted[0].email).toBe('p@b.com');
});

test('user update', async () => {
  const userData = {
    name: 'patrick',
    email: 'p@b.com',
    phone: '6555151',
    city: '12254',
    date_of_birth: 12,
    status: 1,
    school: 122,
    course: 123,
    observations: 123,
    is_admin: true,
    privacy: 121,
    password: 'pb',
    company_id: 1,
  };

  const [id] = await new Users(userData).insert();

  await new Users().update({ id }, { ...userData, name: 'pba' });

  const [userUpdated] = await new Users().findBy({ id });

  expect(userUpdated.name).toBe('pba');
});

test('user delete', async () => {
  const userData = {
    name: 'patrick',
    email: 'p@b.com',
    phone: '6555151',
    city: '12254',
    date_of_birth: 12,
    status: 1,
    school: 122,
    course: 123,
    observations: 123,
    is_admin: true,
    privacy: 121,
    password: 'pb',
    company_id: 1,
  };

  const [id] = await new Users(userData).insert();

  await new Users().delete({ id });
  const projcetDeleted = await new Users().findBy({ id });

  expect(projcetDeleted.length).toBe(0);
});

test('user list', async () => {
  const userData = {
    name: 'patrick',
    email: 'p@b.com',
    phone: '6555151',
    city: '12254',
    date_of_birth: 12,
    status: 1,
    school: 122,
    course: 123,
    observations: 123,
    is_admin: true,
    privacy: 121,
    password: 'pb',
    company_id: 1,
  };

  const users = await new Users().findAll();

  expect(users.length).toBeGreaterThan(0);
});
