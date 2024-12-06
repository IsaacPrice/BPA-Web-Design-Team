export type Merch = 
{
    name: string;
    linkName: string;
    category: string;
    price: number;
    imagePaths: string[];
    sizes?: string[];
    sizeAbbreviations?: string[];
    description: string;
}