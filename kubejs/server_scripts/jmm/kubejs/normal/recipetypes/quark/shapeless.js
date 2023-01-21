onEvent('recipes', (event) => {
    const id_prefix = 'jmm:normal/quark/shapeless/';

    const recipes = [
        {
            output: 'quark:white_candle',
            inputs: ['#quark:candles', 'minecraft:white_dye'],
            id: `${id_prefix}dye_cancle_white`
        },
        {
            output: 'quark:white_candle', //
            inputs: 'eidolon:candle',
            id: `${id_prefix}white_candle`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
