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
        let tutorial = await Tutorial.findOne(inputs.id)

        return {
            items: tutorial,
        }
    }
}
