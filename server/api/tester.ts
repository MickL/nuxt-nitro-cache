import {addSeconds, format} from 'date-fns';

const maxAge = 2; // seconds

export default cachedEventHandler(
    async (event): Promise<any> => {
        const now = new Date();
        const expiresAt = addSeconds(now, maxAge);

        return {
            time: now.getTime(),
            timeFormatted: format(now, 'dd.MM.yyyy - HH:mm:ss'),
            expiresAt: expiresAt.getTime(),
            expiresAtFormatted: format(expiresAt, 'dd.MM.yyyy - HH:mm:ss'),
        }
    },
    {
        maxAge,
    },
);
