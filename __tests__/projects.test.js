import Projects from '../src/app/models/Projects';

test('project insert', async () => {
    const projectData = {
        name: 'voluntariado',
        summary: 'coisas de voluntarido',
        intervation_area: 'sado',
        target_audience: 'todos',
        goals: 'revolucionar',
        required_course: 'none',
        entities: 'ips',
        observations: '2 meses',
        is_active: true,
        is_approved: true,
        image_id: 1,
    };

    const [id] = await new Projects(projectData).insert();
    const projectInserted = await new Projects().findBy({ id });

    expect(projectInserted.length).toBe(1);
    expect(projectInserted[0].name).toBe('voluntariado');
});


test('project update', async () => {
    const projectData = {
        name: 'voluntariado',
        summary: 'coisas de voluntarido',
        intervation_area: 'sado',
        target_audience: 'todos',
        goals: 'revolucionar',
        required_course: 'none',
        entities: 'ips',
        observations: '2 meses',
        is_active: true,
        is_approved: true,
        image_id: 1,
    };

    const [id] = await new Projects(projectData).insert();

    await new Projects().update({ id }, { ...projectData, name: 'muito voluntariado' });

    const [projectUpdated] = await new Projects().findBy({ id });

    expect(projectUpdated.name).toBe('muito voluntariado');
});

test('project delete', async () => {
    const projectData = {
        name: 'voluntariado',
        summary: 'coisas de voluntarido',
        intervation_area: 'sado',
        target_audience: 'todos',
        goals: 'revolucionar',
        required_course: 'none',
        entities: 'ips',
        observations: '2 meses',
        is_active: true,
        is_approved: true,
        image_id: 1,
    };


    const [id] = await new Projects(projectData).insert();

    await new Projects().delete({ id });
    const projectDeleted = await new Projects().findBy({ id });

    expect(projectDeleted.length).toBe(0);
});

test('project list', async () => {
    const projectData = {
        name: 'voluntariado',
        summary: 'coisas de voluntarido',
        intervation_area: 'sado',
        target_audience: 'todos',
        goals: 'revolucionar',
        required_course: 'none',
        entities: 'ips',
        observations: '2 meses',
        is_active: true,
        is_approved: true,
        image_id: 1,
    };

    const projects = await new Projects().findAll();

    expect(projects.length).toBeGreaterThan(0);
});
