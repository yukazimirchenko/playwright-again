export async function get(request, url, headers = {}, params = {}) {
    const response = await request.get(url, {
        headers,
        params
    })
    return response;
}

export async function post(request, url, data = {}, headers = {}) {
    const response = await request.post(url, {
        data, 
        headers
    })
    return await response;
}
