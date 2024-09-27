export type Theme = {
    id: number;
    title: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
};

export type ThemeList = {
    themes: Theme[];
}