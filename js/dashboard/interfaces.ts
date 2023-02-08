export interface Course {
    image: string;
    title: string;
    subject: string;
    grade: number;
    additional_grade: number;
    units: number;
    lessons: number;
    classes: string[];
    students: null | number;
    start_date: null | string;
    end_date: null | string;
    isfavourite: boolean;
    isexpired: boolean;
    iswatch: boolean;
    iscalender: boolean;
    isgraded: boolean;
    isreported: boolean

}