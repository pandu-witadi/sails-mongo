//
//
import axios from 'axios'

import { baseURL } from '../config'

const test_get = async () => {
    console.log(baseURL + `/api/test`)
    const { data } = await axios.get(baseURL + `/api/test`)
    return data
}

export {
    test_get
}
