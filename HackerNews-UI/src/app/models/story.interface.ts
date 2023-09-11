
export interface StoryInfo  {
    id: number;
    time: number; 
    by: string;
    text: string;     
    parent: string;
    poll: string;
    kids: string[];
    url: string;
    score:number;
    title: string;
    parts: string;
    descendants: number;
    type: string;
}
