export interface CountryStatistic {
    confirmed: number;
    country: string;
    date: string;
    deaths: number;
    recovered: number;
}

export interface Survey {
    surveyId?: string;
    name: string;
    email: string;
    data: string;
    isWFH: boolean;
    hasSymptom: boolean;
    overseas: string;
    transportType: string;
    transportAddition: string;
    analysis?: Analysis;
}

export interface Analysis {
    positive: number;
    negative: number;
    neutral: number;
}

export interface OrgOverview {
    positive: number;
    negative: number;
    neutral: number;
    whfRate: number;
    overseas: Array<{
        country: string,
        count: number;
    }>;
}
