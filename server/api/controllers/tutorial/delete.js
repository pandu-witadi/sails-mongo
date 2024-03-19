//
//
module.exports = {
    inputs: {
        id: {
              type: 'string',
              required: true,
          },
    },
    
    async fn(inputs) {
        const tutorial = await Tutorial.destroyOne(inputs.id)

        return {
            items: tutorial,
        }
    }
}
