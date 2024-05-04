import { ITab } from "./components/Tab/types";
import { IPage } from "./pages/types";

export interface IAppState {
  currentPage: IPage | undefined;
  currentUsername: string;
  selectedUsername: string;
  selectedArticleId: string;
  isLoading: boolean;
  tabs: ITab[];
}