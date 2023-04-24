export const URL = {
    user: {
        session : {
            onTime: '/on-time',
            closed: '/closed',
            detail: '/:sessionType/:id',
        }
    },
    admin: {
        participant: {
            list: '/admin/participants',
        },
        session : {
            list: '/admin/sessions',
            create: '/admin/sessions/create'
        }
    }
}


const detailUrlStr = (sessionType, id) => {
    return /:sessionType/:id
}
