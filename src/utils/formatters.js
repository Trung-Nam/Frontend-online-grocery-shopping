import { format } from 'date-fns';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'yyyy-MM-dd');
};

export default formatDate