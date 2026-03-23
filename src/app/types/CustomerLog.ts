
export default interface CustomerLog {
    id: string;
    customerId: string;
    date: Date;
    type: string;
    title: string;
    author: string;
    message: string;
}