export default function (filter = {}) {
    let query = ''
    for (const key in filter) {
        if(filter[key]) {
            query += `${key}=${filter[key]}&`
        }
    }
    return query
}
