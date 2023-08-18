export class Post {
    id: number | undefined;
    author: string = '';
    at: string = '';
    name: string = '';
    category: string = '';
    impact: string = '';
    biography: string = '';
    project: string = '';
    imageUrl: string = '';
    createdAt: Date = new Date();
    isActive: boolean = false;

    get isNew(): boolean {
        return this.id === undefined;
    }

    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.author) this.author = initializer.author;
        if (initializer.at) this.at = initializer.at;
        if (initializer.name) this.name = initializer.name;
        if (initializer.category) this.category = initializer.category;
        if (initializer.impact) this.impact = initializer.impact;
        if (initializer.biography) this.biography = initializer.biography;
        if (initializer.project) this.project = initializer.project;
        if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
        if (initializer.createdAt) this.createdAt = new Date(initializer.contractSignedOn);
        if (initializer.isActive) this.isActive = initializer.isActive;
    }
}