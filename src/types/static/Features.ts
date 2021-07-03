export type Features = {
    contents: Feature[];
    created: string;
}

export type Feature = {
    title: string;
    list: FeatureItem[];
}

export type FeatureItem = {
    name: string;
    checked: boolean;
}