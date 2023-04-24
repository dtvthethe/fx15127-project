export const URL = {
    user: {
        session : {
            onTime: '/on-time',
            closed: '/closed',
            onTimeDetail: '/on-time/:id',
            closedDetail: '/closed/:id',
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
};

export const detailUrlStr = (page, id) => {
    switch (page) {
        case URL.user.session.onTime:
            return URL.user.session.onTimeDetail.replace(':id', id);
        case URL.user.session.closed:
            return URL.user.session.closedDetail.replace(':id', id);
        default:
            return '/';
    }
};
