onEvent('recipes', (event) => {
    const id_prefix = 'jmm:normal/minecraft/stonecutter/';

    event.stonecutting('atum:crystal_glass', 'minecraft:glass').id(`${id_prefix}glass_from_crystal_glass`);
});