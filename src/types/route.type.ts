export interface Route {
  id:string,
  title: string;
  url?: string,
  icon?:string,
  isActive?: boolean,
  items?: {
    title: string;
    url: string;
  }[];
}