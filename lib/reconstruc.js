function recontrucArrOrObj (){
       if (Array.isArray(data)) {
        return data.map(item => recontruc(item, template));
    }
    if (typeof data === 'object' && data !== null) {
        const result = {};
        for (const key in template) {
            if (key in data) {
                result[key] = recontrucArrOrObj(data[key], template[key]);
            } else {
                result[key] = template[key];
            }
        }

        return result;
    }
    return data;
}

function reconstruct (data) {
       if (Array.isArray(data)) {
        return data.map(item => reconstruct(item, template));
    }
    const result = {};
    for (const key in template) {
        if (key in data) {
            if (Array.isArray(template[key]) || typeof template[key] === 'object') {
                result[key] = reconstruct(data[key], template[key]);
            } else {
                result[key] = data[key];
            }
        } else {
            result[key] = template[key];
        }
    }
    return result;
}