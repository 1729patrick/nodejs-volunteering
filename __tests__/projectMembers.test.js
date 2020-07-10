import ProjectMembers from '../src/app/models/ProjectMembers';

test('projectMembers insert', async () => {
    const projectMData = {
        privacy: '?',
        isOwner: undefined,
        user_id: 1,
        project_id: 1
    };

    const [id] = await new ProjectMembers(projectMData).insert();
    const projectMemberInserted = await new ProjectMembers().findBy({ id });

    expect(projectMInserted.length).toBe(1);
    expect(projectMInserted[0].privacy).toBe('?');
});


test('projectMembers update', async () => {
    const projectMData = {
        privacy: '?',
        isOwner: undefined,
        user_id: 1,
        project_id: 1
    };

    const [id] = await new ProjectMembers(projectMData).insert();

    await new ProjectMembers().update({ id }, { ...projectMData, privacy: '??' });

    const [projectMUpdated] = await new ProjectMembers().findBy({ id });

    expect(projectMUpdated.name).toBe('??');
});

test('projectMembers delete', async () => {
    const projectMData = {
        privacy: '?',
        isOwner: undefined,
        user_id: 1,
        project_id: 1
    };

    const [id] = await new ProjectMembers(projectMData).insert();

    await new ProjectMembers().delete({ id });
    const projectMDeleted = await new ProjectMembers().findBy({ id });

    expect(projectMDeleted.length).toBe(0);
});

test('projectMembers list', async () => {
    const projectMData = {
        privacy: '?',
        isOwner: undefined,
        user_id: 1,
        project_id: 1
    };
    const projectsM = await new ProjectMembers().findAll();

    expect(projectsM.length).toBeGreaterThan(0);
});
