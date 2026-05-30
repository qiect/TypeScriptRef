export interface TutorialSection {
    id: string;
    title: string;
    content: string;
    codeExample?: {
        code: string;
        language: string;
        description: string;
    };
}
export interface TutorialChapter {
    slug: string;
    title: string;
    description: string;
    order: number;
    icon: string;
    sections: TutorialSection[];
}
export declare const tutorialChapters: TutorialChapter[];
