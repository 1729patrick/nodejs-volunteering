import ProjectDates from '../src/app/models/ProjectDates';


test('projectDates insert', async () => {
    const projectDateData = {
        start: new Date('July 12, 2020 00:00:00'),
        end: new Date('July 20, 2020 23:59:59'),
        type: '??',
        project_id: 1
    };

    const [id] = await new ProjectDates(projectDateData).insert();
    const projectDateInserted = await new ProjectDates().findBy({ id });

    expect(projectDateInserted.length).toBe(1);
    expect(projectDateInserted[0].type).toBe('??');
});


test('projectDates update', async () => {
    const projectDateData = {
        start: new Date('July 12, 2020 00:00:00'),
        end: new Date('July 20, 2020 23:59:59'),
        type: '??',
        project_id: 1
    };

    const [id] = await new ProjectDates(projectDateData).insert();

    await new ProjectDates().update({ id }, { ...projectDateData, type: 'daquelas' });

    const [projectDateUpdated] = await new ProjectDates().findBy({ id });

    expect(projectDateUpdated.type).toBe('daquelas');
});

test('projectDates delete', async () => {
    const projectDateData = {
        start: new Date('July 12, 2020 00:00:00'),
        end: new Date('July 20, 2020 23:59:59'),
        type: '??',
        project_id: 1
    };

    const [id] = await new ProjectDates(projectDateData).insert();

    await new ProjectDates().delete({ id });

    const projectDateDeleted = await new ProjectDates().findBy({ id });

    expect(projectDateDeleted.length).toBe(0);
});

test('projectDates list', async () => {
    const projectDateData = {
        start: new Date('July 12, 2020 00:00:00'),
        end: new Date('July 20, 2020 23:59:59'),
        type: '??',
        project_id: 1
    };

    const projectDates = await new ProjectDates().findAll();

    expect(projectDates.length).toBeGreaterThan(0);
});
