
export default interface Reminder {
    id: string;
    customerId: string;
    severity: 'error' | 'info' | 'success' | 'warning';
    title: string;
    message: string;
}