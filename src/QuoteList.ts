import { Quote } from "./Quote";

export interface QuoteList extends Quote {
    quoteList: Quote[];
}