onEvent('entity_type.tags', (event) => {
    let entities = ['#jmm:mob_spawner_blacklist'];
    event.get('industrialforegoing:mob_imprisonment_tool_blacklist').add(entities);
});
