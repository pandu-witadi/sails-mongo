//
//
module.exports = {
    inputs: {
        title: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        published: {
          type: 'boolean',
        },
    },

    async fn(inputs) {
        const tutorial = await Tutorial.create(inputs).fetch()

        return {
            item: tutorial,
        }
    }
}
