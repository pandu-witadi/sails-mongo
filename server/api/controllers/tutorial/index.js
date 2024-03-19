//
//
module.exports = {
    async fn(inputs) {
        const tutorials = await Tutorial.find({}).sort('id')

        return {
            items: tutorials,
        }
    }
}
